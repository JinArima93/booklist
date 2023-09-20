import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

function Book(props) {
  return (
    <article className='book'>
      <img src='' alt='' />
      <h3>{props.title}</h3>
      <h4>{props.author}</h4>
    </article>
  )
}

export default Book
