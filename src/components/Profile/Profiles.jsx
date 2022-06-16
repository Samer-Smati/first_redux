import React from 'react'
import {useParams} from 'react-router-dom'
import {useSelector} from 'react-redux'
function Profiles() {
  const {id} = useParams();
  const user = useSelector(state=> state.users)
  .filter(el => el.id == id)
  console.log(user)
  return (
    <div>
        {user[0].name}
    </div>
  )
}

export default Profiles