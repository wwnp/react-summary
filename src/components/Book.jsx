import React, { useContext } from 'react'
import { CustomContex } from '../containers/hooks/Context'
export const Book = props => {
  const { removeBook } = useContext(CustomContex)
  return (
    <h2 onClick={() => removeBook(props.id)}>{props.title}</h2>
  )
}