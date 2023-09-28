import React from 'react'
import Book from './Book'
import { books } from './books'

const Booklist = () => {
  return (
    <>
      <h1>Book Sellers</h1>
      <section className='booklist'>
        {books.map((book, index) => {
          return <Book {...book} key={book.id} number={index} />
        })}
      </section>
    </>
  )
}

export default Booklist

// {
//   books.map((book) => {
//     return <Book {...book} key={book.id} />
//   })
// }
// {
//   books.map((book) => {
//     return <Book {...book} key={book.id} />
//   })
// }
