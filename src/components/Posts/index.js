import React from 'react';
import Banner from '../Banner';
import Post from './Post';

//ARRAY OF POST USED IN HOME PAGE AND POSTS (post.js) PAGE

const Posts = ({ posts = [], title }) => {
  return (
    <section className='posts'>
      <h3 className='posts-title'>{title}</h3>
      <div className='posts-center'>
        {/* posts column */}
        <article>
          {posts.map((post) => {
            return <Post key={post.id} {...post} />;
          })}
        </article>
        {/* banner column */}
        <article>
          <Banner />
        </article>
      </div>
    </section>
  );
};

export default Posts;
