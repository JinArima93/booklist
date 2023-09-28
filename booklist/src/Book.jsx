import React from 'react'
import './index.css'

const Book = (props) => {
  const { img, title, author, number } = props
  //JSX
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <span className='number'>{`# ${number + 1}`}</span>
    </article>
  )
}

export default Book
