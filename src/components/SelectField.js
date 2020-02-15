import React from 'react'


const SelectField = ({
  input, label, type, size, selection,
  meta: { touched, error }, children }) => {

  return (
    <div>
      <label>{label}</label>
      <div>
        <select {...input} size={size} value={selection}>
          {children}
        </select>
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  )
}

export default SelectField
