import React, { Component, Fragment } from 'react';
import { Container, Menu, Button } from 'semantic-ui-react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import SignedOutMenu from '../menus/SignedOutMenu';
import SignedInMenu from '../menus/SignedInMenu';
import { connect } from 'react-redux';
import { openModal } from '../../modals/modalsActions';
import { authLogOut } from '../../auth/authActions';

class NavBar extends Component {
  handleLogin = () => {
    this.props.openModal('LoginModal');
    // this.setState({ isAuthenticated: true });
  };
  handleRegister = () => {
    this.props.openModal('RegisterModal');
    // this.setState({ isAuthenticated: true });
  };
  handleLogout = () => {
    this.props.authLogOut();
    this.props.history.push('/');
  }
  render() {
    const { isAuthenticated, user } = this.props.auth;
    return (
      <Menu inverted fixed='top'>
        <Container>
          <Menu.Item as={NavLink} exact to='/' header>
            <img src={`${window.location.origin}/assets/images/logo.png`} alt='logo' />
            Events App
          </Menu.Item>
          <Menu.Item as={NavLink} exact to='/events' name='Events' />
          {isAuthenticated && (
            <Fragment>
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
            </Fragment>
          )}
          {isAuthenticated ?
            <SignedInMenu handleLogout={this.handleLogout} user={user} /> :
            <SignedOutMenu handleLogin={this.handleLogin} handleRegister={this.handleRegister} />
          }
        </Container>
      </Menu>
    )
  }
}

const mapStateToProps = state => ({ auth: state.auth });
const mapActionsToProps = { openModal, authLogOut }

export default withRouter(connect(mapStateToProps, mapActionsToProps)(NavBar));