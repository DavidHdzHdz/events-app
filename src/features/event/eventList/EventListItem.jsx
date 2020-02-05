import React, { Component } from 'react';
import { Segment, Item, Icon, List, Button } from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

class EventListItem extends Component {
  render() {
    const { event, handleDeleteEvent } = this.props;
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="tiny" circular src={event.hostPhotoURL} />
              <Item.Content>
                <Item.Header as="a">{event.title}</Item.Header>
                <Item.Description>
                  Hosted by <a href=".">{event.hostedBy}</a>
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock" />
              {format(event.date.toDate(), 'EEE do LLLL')} at{' '}
              {format(event.date.toDate(), 'h:mm a')} |
            <Icon name="marker" /> {event.venue}
          </span>
        </Segment>
        <Segment secondary>
          <List horizontal>
            {
              event.attendees && Object.entries(event.attendees).map(([ key, value ]) => (
                <EventListAttendee key={key} attendee={value} />
              ))
            }
          </List>
        </Segment>
        <Segment clearing>
          <span>{event.description}</span><br /><br />
          <Button
            as={Link}
            to={`/event/${event.id}`}
            color="teal"
            floated="right"
            content="View"
          />
          <Button
            as="a"
            color="red"
            floated="right"
            content="Delete"
            onClick={() => handleDeleteEvent(event.id)}
          />
        </Segment>
      </Segment.Group>
    )
  }
}

export default EventListItem;
