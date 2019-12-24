import React from 'react'
import { Form, Message } from 'semantic-ui-react'

const TextArea = ({
  input,
  placeholder,
  type,
  label,
  rows,
  meta: { touched, error }
}) => {
  return (
    <Form.Field error={touched && !!error} >
      {label && <label>{label}</label>}
      <textarea
        {...input}
        placeholder={placeholder}
        type={type}
        rows={rows}
      />
      {touched && error && <Message size='mini' color='red'  content={error} />}
    </Form.Field>
  )
}

export default TextArea;
