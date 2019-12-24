import React from 'react';
import { Form, Message } from 'semantic-ui-react';
import  DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateInput = ({
  input: { value, onChange, onBlur },
  placeholder,
  label,
  meta: { touched, error },
  ...rest
}) => {
  return (
    <Form.Field error={touched && !!error} >
      {label && <label>{label}</label>}
      <DatePicker
        {...rest}
        placeholderText={placeholder}
        selected={value ? new Date(value) : null}
        onChange={onChange}
        onChangeRaw={event => event.preventDefault()}
        onBlur={onBlur}
      />
      {touched && error && <Message size='mini' color='red'  content={error} />}
    </Form.Field>
  )
}
export default DateInput;
