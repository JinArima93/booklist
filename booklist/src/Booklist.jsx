import React from 'react'
import Book from './Book'
const Booklist = () => {
  return (
    <>
      <h1>amazon best sellers</h1>
      <section className='booklist'>
        <Book title='Title Ni' author='Mang Thorney' />
        <Book title='Taylor Swift' author='Taylor Sheesh' />
        <Book />
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
