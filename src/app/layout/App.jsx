import React from 'react';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/event/eventDashboard/EventDashboard';
import NavBar from '../../features/nav/navBar/NavBar';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Container className="main">
        <EventDashboard />
      </Container>
    </div>
  );
}

export default App;