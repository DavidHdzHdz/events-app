import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import cuid from 'cuid';
import EventList from '../eventList/EventList';
import EventForm from '../eventForm/EventForm';

const eventListData = [
  {
    id: '1',
    title: 'Trip to Tower of London',
    date: '2018-03-27',
    category: 'culture',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: 'Bob',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
    attendees: [
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      },
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      }
    ]
  },
  {
    id: '2',
    title: 'Trip to Punch and Judy Pub',
    date: '2018-03-28',
    category: 'drinks',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: 'Punch & Judy, Henrietta Street, London, UK',
    hostedBy: 'Tom',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
    attendees: [
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      },
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      }
    ]
  }
];

class EventDashboard extends Component {
  state = {
    events: eventListData,
    isOpenForm: false,
    selectedEvent: null
  }

  handleisFormOpenToggle = () => {
    // we can use a callback for use before state props
    this.setState(({ isOpenForm }) => ({ isOpenForm: !isOpenForm, selectedEvent: null }));
  }
  handleCreateEvent = newEvent => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = '/assets/images/user.png';
    this.setState({ events: [ ...this.state.events, newEvent ], isOpenForm: false });
  }
  handleUpdateEvent = updatedEvent => {
    const updateFunc = events =>
      events.map(event => event.id === updatedEvent.id ? { ...event, ...updatedEvent } : { ...event });
    this.setState(({ events }) => ({ events: updateFunc(events), isOpenForm: false, selectedEvent: null }));
  }
  handleSelectedEvent = event => {
    this.setState({ selectedEvent: event, isOpenForm: true });
  };
  render() {
    const { events, isOpenForm, selectedEvent } = this.state;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList
            events={events}
            handleSelectedEvent={this.handleSelectedEvent}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <Button
            positive
            content="Create Event"
            onClick={this.handleisFormOpenToggle}
          />
          {isOpenForm &&
            <EventForm
              key={selectedEvent ? selectedEvent.id : 0}
              handleFormCancel={this.handleisFormOpenToggle}
              handleCreateEvent={this.handleCreateEvent}
              handleUpdateEvent={this.handleUpdateEvent}
              eventData={selectedEvent}
            />
          }
        </Grid.Column>
      </Grid>
    )
  }
}

export default EventDashboard;
