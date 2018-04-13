import {  Fragment } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import postListQuery from './query.graphql';
import './styles.sass';

const PostList = (props) => {
  let items = [];
  if (!props.data.loading) items = props.data.posts.items;
  return (
    <Fragment>
      <h1>Recent Stories</h1>
      {items.map(item => {
        let sourceUrl = '/static/asset_fallback.svg';
        if (item.post.featuredImage) {
          sourceUrl = item.post.featuredImage.sourceUrl;
          let mediumImage = item.post.featuredImage.mediaDetails.sizes.filter(size => size.name === 'medium')[0];
          if (mediumImage) sourceUrl = `http://localhost:8888/wp-content/uploads/${mediumImage.sourceUrl}`
        }
        return (
          <div key={item.post.globalId}>
            <a href={`${item.post.categories.items[0].category.slug}/${item.post.slug}`}>
              <img src={sourceUrl} width="320px"/>
              <h2>{item.post.title}</h2>
            </a>
            <div dangerouslySetInnerHTML={{ __html: item.post.excerpt }} />
          </div>
        )
      })}
    </Fragment>
  );
}

export default graphql(postListQuery)(PostList);
