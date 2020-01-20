import React from 'react';
import { Form, Segment, Button, Header } from 'semantic-ui-react';
import { reduxForm, Field } from 'redux-form';
import TextInput from '../../../app/common/form/TextInput';

const LoginForm = ({ formStyle }) => {
  return (
    <Form error size="large">
      <Segment style={formStyle}>
        <Header sub textAlign='center' content='Login to Events App' />
        <br />
        <Field
          name="email"
          component={TextInput}
          type="text"
          label='Email'
          placeholder="Email Address"
        />
        <Field
          name="password"
          component={TextInput}
          type="password"
          label='Password'
          placeholder="password"
        />
        <Button fluid size="large" color="teal">
          Login
        </Button>
      </Segment>
    </Form>
  );
};

export default reduxForm({ form: 'loginForm' })(LoginForm);