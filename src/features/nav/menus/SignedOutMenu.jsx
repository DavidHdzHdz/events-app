
import React from 'react';
// import PropTypes from 'prop-types';
import { Menu, Button } from 'semantic-ui-react'

const SignedOutMenu = ({ handleLogin, handleRegister }) => {
  return (
    <Menu.Item position='right'>
      <Button basic inverted content='Login' onClick={handleLogin}/>
      <Button basic inverted content='Register' style={{marginLeft: '0.5em'}} onClick={handleRegister} />
    </Menu.Item>
  )
}

SignedOutMenu.propTypes = {

}

export default SignedOutMenu;