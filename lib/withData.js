import { ApolloProvider, getDataFromTree } from 'react-apollo';
import { Component } from 'react';
import Head from 'next/head';
import initApollo from './initApollo';
import PropTypes from 'prop-types';

const getComponentDisplayName = (Component) => {
  return Component.displayName || Component.name || 'Unknown';
}

export default ComposedComponent => {
  return class WithData extends Component {
    static displayName = `WithData(${getComponentDisplayName(
      ComposedComponent
    )})`

    static propTypes = {
      serverState: PropTypes.object.isRequired
    }

    static async getInitialProps(ctx) {
      // Initial serverState with apollo (empty)
      let serverState;

      let composedInitialProps = {}
      if (ComposedComponent.getInitialProps) {
        composedInitialProps = await ComposedComponent.getInitialProps(ctx);
      }

      // Run all GraphQL queries in the component tree
      // and extract the resulting data
      const apollo = initApollo();
      try {
        // create the url prop which is passed to every page
        const url = {
          query: ctx.query,
          asPath: ctx.asPath,
          pathname: ctx.pathname,
        }

        // Run all GraphQL queries
        await getDataFromTree(
          <ComposedComponent ctx={ctx} url={url} {...composedInitialProps} />,
          {
            router: {
              asPath: ctx.asPath,
              pathname: ctx.pathname,
              query: ctx.query,
            },
            client: apollo,
          }
        )
      } catch (error) {
        console.log('error is:', error);
        // Prevent Apollo Client GraphQL errors from crashing SSR.
        // Handle them in components via the data.error prop:
        // http://dev.apollodata.com/react/api-queries.html#graphql-query-data-error
      }

      if (!process.browser) {
        // getDataFromTree does not call componentWillUnmount
        // head side effect therefore need to be cleared manually
        Head.rewind();
      }

      // Extract query data from the Apollo store
      serverState = {
        apollo: {
          data: apollo.cache.extract()
        }
      }

      return {
        serverState,
        ...composedInitialProps
      }
    }

    constructor(props) {
      super(props);
      this.apollo = initApollo(props.serverState.apollo.data);
    }

    render() {
      return (
        <ApolloProvider client={this.apollo}>
          <ComposedComponent {...this.props} />
        </ApolloProvider>
      )
    }
  }
}
