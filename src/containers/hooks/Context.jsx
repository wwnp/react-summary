import React, { createContext, useState } from 'react'
// useContex analog redux - нужно чтобы пробрасывать пропсы минуя другие компоненты
export const CustomContex = createContext();
export const Contex = props => {
  const [books, setBooks] = useState([
    { id: 1, title: 'js' },
    { id: 2, title: 'css' },
    { id: 3, title: 'html' },
  ])
  const addBook = (book) => {
    setBooks([book, ...books])
  }
  const removeBook = (id) => {
    const newBooks = books.filter((book) => book.id !== id)
    setBooks(newBooks)
  }
  const value = {
    books,
    addBook,
    removeBook
  }
  return <CustomContex.Provider value={value}>
    {props.children}
  </CustomContex.Provider>
}