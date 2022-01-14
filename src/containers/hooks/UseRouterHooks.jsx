import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
export const UseRouterHooks = props => {
  const location = useLocation()
  const params = useParams()
  const navigate = useNavigate()
  // console.log(location)
  // console.log(params)
  // console.log(navigation)
  return (
    <div >
      UseRouterHooks
      <button className='btn' onClick={() => navigate('/')}>Home</button>
    </div>
  )
}