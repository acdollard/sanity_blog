import React from 'react';
import { BlogGridStyles } from '../../styles/blog/BlogGridStyles';
import BlogItem from './BlogItem';

function BlogGrid({ blogs }) {
  return (
    <BlogGridStyles>
      {blogs.map((b) => <BlogItem
      key={b.id}
      title={b.title}
      path={b.slug.current}
      categories={b.categories}
      image={{
        imageData: b.coverImage.asset.gatsbyImageData,
        altText: b.coverImage.alt,
      }}
      publishedAt={b.publishedAt}
      />)}
    </BlogGridStyles>
  )
}

export default BlogGrid;