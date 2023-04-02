import React from 'react';
import {AuthorGridStyles} from '../../styles/author/AuthorGridStyles';
import AuthorItem from './AuthorItem';

function AuthorGrid({authors}) {
  console.log(authors)
  return (
    <AuthorGridStyles>
      {authors.map((author) => (
        <AuthorItem 
          key={author.id}
          name={author.name}
          profileImage={author.profileImage}
          slug={author.slug}
        />
      ))}
    </AuthorGridStyles>
  )
}

export default AuthorGrid;