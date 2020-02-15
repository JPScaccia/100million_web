import React from 'react'


const InputField = ({
  input, label, type, placeholder,
  meta: {
    touched,
    error
  }}) => (
  <div>
    <label>
      {label}
    </label>
    <div className='inputContainer'>
      <input
        className='inputField'
        {...input}
        placeholder={placeholder}
        type={type} />
      <div className='inputError'>
        {touched && error}
      </div>
    </div>
  </div>
);

export default InputField
