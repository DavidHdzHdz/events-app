import React from 'react'
// import PropTypes from 'prop-types'
import { Menu, Image, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const SignedInMenu = ({ handleLogout }) => {
  return (
    <Menu.Item position="right">
      <Image avatar spaced="right" src={`${window.location.origin}/assets/images/user.png`} />
      <Dropdown pointing="top left" text="Username">
        <Dropdown.Menu>
          <Dropdown.Item text="Create Event" icon="plus" />
          <Dropdown.Item text="My Events" icon="calendar" />
          <Dropdown.Item text="My Network" icon="users" />
          <Dropdown.Item text="My Profile" icon="user" />
          <Dropdown.Item as={Link} to='/settings' text="Settings" icon="settings" />
          <Dropdown.Item text="Sign Out" icon="power" onClick={handleLogout}/>
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  )
}

SignedInMenu.propTypes = {

}

export default SignedInMenu
