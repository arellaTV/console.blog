import { shallow } from 'enzyme';
import ErrorPage from 'next/error';
import React from 'react';
import Wrapper from './';

const Post = Wrapper.WrappedComponent

describe('<Post />', () => {
  test('redirects to a 404 error page if no post is found', () => {
    const wrapper = shallow(
      <Post />
    );
    expect(wrapper.find(ErrorPage).length).toBe(1);
  });

  test('renders a loading state when the graphql query is loading', () => {
    const wrapper = shallow(
      <Post data={{ loading: true, post: {} }}/>
    );
    expect(wrapper.find(ErrorPage).length).toBe(0);

  });

  test('renders a post if given', () => {

  });
});
