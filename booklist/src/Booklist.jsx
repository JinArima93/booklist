import React from 'react'
import Book from './Book'
const Booklist = () => {
  return (
    <>
      <h1>amazon best sellers</h1>
      <section className='booklist'>
        <Book
          title='Title Ni'
          author='Mang Thorney'
          image='https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTWW0ZhzIo8ExcV0le_rbf_fS0Wpeu4i9cYTPCMdSuEmS2EljD-1vclLhnMzbELlA94pOgs2xhA2Tl83KE'
        />
        <Book title='Taylor Swift' author='Taylor Sheesh' />
        <Book title='asdsad' author='asdsda' />
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
