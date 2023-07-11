import React from 'react';
import { BlogGridStyles } from '../../styles/blog/BlogGridStyles';
import BlogItem from './BlogItem';

function BlogGrid({ blogs }) {
  console.log(blogs)
  return (
    <BlogGridStyles>
      {blogs.map((b) => <BlogItem
      key={b.id}
      title={b.title}
      path={b.slug.current}
      categories={b.categories}
      image={b.coverImage && {
        imageData: b.coverImage.asset ? b.coverImage.asset.gatsbyImageData : "",
        altText: b.coverImage ? b.coverImage.alt : "",
      }}
      publishedAt={b.publishedAt}
      />)}
    </BlogGridStyles>
  )
}

export default BlogGrid;