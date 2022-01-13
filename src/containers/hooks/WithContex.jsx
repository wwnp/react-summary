import React from 'react'
import { Contex } from './Context'
import { Books } from '../../components/Books'
import { CustomContex } from './Context'
import { useContext } from 'react'
export const WithContex = props => {
  const value = useContext(CustomContex)
  return (
    <Books></Books>
  )
}