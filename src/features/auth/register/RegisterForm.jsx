import React from 'react';
import { Form, Segment, Button, Header } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import TextInput from '../../../app/common/form/TextInput';
import { connect } from 'react-redux';
import { authSingUp } from '../authActions';

const RegisterForm = ({ formStyle, handleSubmit, authSingUp }) => {
  return (
    <Form size="large" onSubmit={handleSubmit(authSingUp)} >
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
        <Button fluid type='submit' size="large" color="teal">
          Register
        </Button>
      </Segment>
    </Form>
  );
};

const mapActionsToProps = { authSingUp }

export default connect(null, mapActionsToProps)(reduxForm({ form: 'registerForm' })(RegisterForm));