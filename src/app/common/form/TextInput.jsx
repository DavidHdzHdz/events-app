import React from 'react'
import { Form, Message } from 'semantic-ui-react'

const TextInput = ({
  input,
  placeholder,
  type,
  label,
  meta: { touched, error }
}) => {
  return (
    <Form.Field error={touched && !!error} >
      {label && <label>{label}</label>}
      <input
        {...input}
        placeholder={placeholder}
        type={type}
      />
      {touched && error && <Message size='mini' color='red'  content={error} />}
    </Form.Field>
  )
}
export default TextInput;
