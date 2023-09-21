import React from 'react'
import './index.css'

const Book = ({ image, title, author }) => {
  return (
    <article className='book'>
      <img src={image} alt='' />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  )
}

export default Book
