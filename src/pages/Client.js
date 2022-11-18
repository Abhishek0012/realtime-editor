import React, { useTransition } from 'react'
import Avatar from 'react-avatar'
const Cient = ({username}) => {
  console.log({username});
  return (
    <div className="client">
        <Avatar name={username} size={50} round="14px"/>
        <span className="userName">
            {username}
        </span>
    </div>
  )
}

export default Cient
