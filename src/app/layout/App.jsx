import React, { Fragment } from 'react';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/event/eventDashboard/EventDashboard';
import NavBar from '../../features/nav/navBar/NavBar';
import { Route, Switch, withRouter } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import EventDetailedPage from '../../features/event/eventDetailed/EventDetailedPage';
import PeopleDashboard from '../../features/user/peopleDashboard/PeopleDashboard';
import UserDetailedPage from '../../features/user/userDetailed/UserDetailedPage';
import SettingsDashboard from '../../features/user/settings/SettingsDashboard';
import EventForm from '../../features/event/eventForm/EventForm';
import ReduxTestComponent from '../../features/reduxTestArea/ReduxTestComponent';

const App = ({ location }) => {
  return (
    <Fragment>
      {/* we can use the following syntax for render home and navbar pages' sets */}
      <Route exact path='/' component={HomePage}/>
      <Route
        exact path='/(.+)'
        render={() => (
          <Fragment>
            <NavBar></NavBar>
            <Container className='main'>
              {/*  */}
              <Switch key={location.key}>
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/events' component={EventDashboard}/>
                <Route exact path='/event/:id' component={EventDetailedPage}/>
                <Route exact path='/people' component={PeopleDashboard}/>
                <Route exact path='/user/:id' component={UserDetailedPage}/>
                <Route path='/settings' component={SettingsDashboard}/>
                <Route exact path={[ '/create-event', '/event/manage/:id' ]} component={EventForm}/>
                <Route exact path='/test' component={ReduxTestComponent}/>
              </Switch>
            </Container>
          </Fragment>
        )}
      />
    </Fragment>
  );
}

export default withRouter(App);