import React from 'react'
import { Form, Select, Message } from 'semantic-ui-react'

const SelectInput = ({
  input: { value, onChange },
  placeholder,
  type,
  label,
  options,
  multiple,
  meta: { touched, error }
}) => {
  return (
    <Form.Field error={touched && !!error} >
      {label && <label>{label}</label>}
      <Select
        value={value || null}
        onChange={(_, data) => onChange(data.value)}
        placeholder={placeholder}
        type={type}
        options={options}
        multiple={multiple}
      />
      {touched && error && <Message size='mini' color='red'  content={error} />}
    </Form.Field>
  )
}
export default SelectInput;
