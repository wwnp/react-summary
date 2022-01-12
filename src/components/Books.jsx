import React from 'react'
import { useContext } from 'react'
import { CustomContex } from '../containers/hooks/Context'
import { Book } from './Book'
export const Books = props => {
  const { books } = useContext(CustomContex)
  return (
    books.map(book => {
      return <Book
        key={book.title + new Date().getFullYear()}
        title={book.title}
        id={book.id}
      >
      </Book>
    })
  )
}