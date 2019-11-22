import React, { Fragment } from 'react';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/event/eventDashboard/EventDashboard';
import NavBar from '../../features/nav/navBar/NavBar';
import { Route } from 'react-router';
import HomePage from '../../features/home/HomePage';
import EventDetailedPage from '../../features/event/eventDetailed/EventDetailedPage';
import PeopleDashboard from '../../features/user/peopleDashboard/PeopleDashboard';
import UserDetailedPage from '../../features/user/userDetailed/UserDetailedPage';
import SettingsDashboard from '../../features/user/settings/SettingsDashboard';
import EventForm from '../../features/event/eventForm/EventForm';

const App = () => {
  return (
    <Fragment>
      <NavBar></NavBar>
      <Container className='main'>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/events' component={EventDashboard}/>
        <Route exact path='/event/:id' component={EventDetailedPage}/>
        <Route exact path='/people' component={PeopleDashboard}/>
        <Route exact path='/user/:id' component={UserDetailedPage}/>
        <Route exact path='/settings' component={SettingsDashboard}/>
        <Route exact path='/create-event' component={EventForm}/>
      </Container>
    </Fragment>
  );
}

export default App;