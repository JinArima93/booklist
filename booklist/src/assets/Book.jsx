import React from 'react'
import ReactDOM from 'react-dom/client'

const Image = () => <h2>image placeholder</h2>
const Title = () => {
  return <h2>Book Title</h2>
}
const Author = () => <h4>Author</h4>

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  )
}

export default Book
