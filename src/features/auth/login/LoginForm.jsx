import React from 'react';
import { Form, Segment, Button, Header } from 'semantic-ui-react';
import { reduxForm, Field } from 'redux-form';
import TextInput from '../../../app/common/form/TextInput';
import { connect } from 'react-redux';
import { authLogin } from '../authActions';

const LoginForm = ({ formStyle, handleSubmit, authLogin }) => {
  return (
    <Form error size="large" onSubmit={handleSubmit(authLogin)} >
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
        <Button fluid type='submit' size="large" color="teal">
          Login
        </Button>
      </Segment>
    </Form>
  );
};

const mapActionsToProps = { authLogin }

export default connect(null, mapActionsToProps)(reduxForm({ form: 'loginForm' })(LoginForm));