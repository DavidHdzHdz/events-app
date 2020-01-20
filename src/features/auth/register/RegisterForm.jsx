import React from 'react';
import { Form, Segment, Button, Header } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import TextInput from '../../../app/common/form/TextInput';

const RegisterForm = ({ formStyle }) => {
  return (
    <Form size="large">
      <Segment style={formStyle} >
        <Header sub textAlign='center' content='Register to Events App' />
        <br />
        <Field
          name="displayName"
          type="text"
          component={TextInput}
          label='Display Name'
          placeholder="Known As"
        />
        <Field
          name="email"
          type="text"
          component={TextInput}
          label='Email'
          placeholder="Email"
        />
        <Field
          name="password"
          type="password"
          component={TextInput}
          label='Password'
          placeholder="Password"
        />
        <Button fluid size="large" color="teal">
          Register
        </Button>
      </Segment>
    </Form>
  );
};

export default reduxForm({ form: 'registerForm' })(RegisterForm);