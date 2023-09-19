import React from 'react'

const Booklist = () => {
  return (
    <>
      <h1>amazon best sellers</h1>
      <section className='booklist'>
        {books.map((book) => {
          return <Book {...book} key={book.id} />
        })}
      </section>
    </>
  )
}

export default Booklist
