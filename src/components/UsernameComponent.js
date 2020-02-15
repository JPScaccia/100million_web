import React from 'react'


const UsernameComponent = (props) => {
  const { username, onChange } = props
  return (
    <div>
      <input
        type="text"
        placeholder={username}
        onChange={onChange} >
      </input>
    </div>
  )
}

export default UsernameComponent
