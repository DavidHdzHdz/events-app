import React, { Component } from 'react';
import { Container, Menu, Button } from 'semantic-ui-react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import SignedOutMenu from '../menus/SignedOutMenu';
import SignedInMenu from '../menus/SignedInMenu';

class NavBar extends Component {
  state = { isAuthenticated: false }
  handleLogin = () => this.setState({ isAuthenticated: true });
  handleLogout = () => {
    this.setState({ isAuthenticated: false });
    this.props.history.push('/');
  }
  render() {
    const { isAuthenticated } = this.state
    return (
      <Menu inverted fixed='top'>
        <Container>
          <Menu.Item as={NavLink} exact to='/' header>
            <img src={`${window.location.origin}/assets/images/logo.png`} alt='logo' />
            Events App
          </Menu.Item>
          <Menu.Item as={NavLink} exact to='/events' name='Events' />
          <Menu.Item as={NavLink} exact to='/people' name='People' />
          <Menu.Item as={NavLink} exact to='/test' name='Test' />
          <Menu.Item>
            <Button
              as={Link}
              to='/create-event'
              floated='right'
              positive
              inverted
              content='Create Event'
            />
          </Menu.Item>
          {isAuthenticated ?
            <SignedInMenu handleLogout={this.handleLogout} /> :
            <SignedOutMenu handleLogin={this.handleLogin} />
          }
        </Container>
      </Menu>
    )
  }
}

export default withRouter(NavBar);