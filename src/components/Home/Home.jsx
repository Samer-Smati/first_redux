import React from 'react'
import Users from '../ui/Cards/CustomCards'
import {useSelector} from 'react-redux'
import {Row,Col} from 'react-bootstrap'
import { useDispatch } from 'react-redux'

import { inncrement,decrement } from './../../redux/action';
function Home() {
  const dispatch = useDispatch()
  // const users = useSelector(state => state.users)
  const value = useSelector(state => state.value) 
  return (
    <div>
     <button onClick={()=>dispatch(inncrement())}>+</button>
      <span>{value}</span>
      <button onClick={()=>dispatch(decrement())}>-</button>
    </div>
  )
}

export default Home