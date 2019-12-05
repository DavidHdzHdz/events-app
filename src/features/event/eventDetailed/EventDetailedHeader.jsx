import React from 'react';
// import PropTypes from 'prop-types'
import { Segment, Image, Item, Header, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const eventImageStyle = {
  filter: 'brightness(30%)'
};

const eventImageTextStyle = {
  position: 'absolute',
  bottom: '5%',
  left: '5%',
  width: '100%',
  height: 'auto',
  color: 'white'
};

const EventDetailedHeader = ({ event }) => {
  return (
    <Segment.Group>
      <Segment basic attached='top' style={{ padding: '0' }}>
        <Image
          src={`${window.location.origin}/assets/images/categoryImages/${event.category}.jpg`}
          fluid
          style={eventImageStyle}
        />

        <Segment basic style={eventImageTextStyle}>
          <Item.Group>
            <Item>
              <Item.Content>
                <Header
                  size='huge'
                  content={event.title}
                  style={{ color: 'white' }}
                />
                <p>{event.date}</p>
                <p>
                  Hosted by <strong>{event.hostedBy}</strong>
                </p>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Segment>

      <Segment attached='bottom'>
        <Button  size='small'>Cancel My Place</Button>
        <Button  size='small' color='teal'>Join This Event</Button>
        <Button  as={Link} to={`/event/manage/${event.id}`} floated='right' size='small' color='orange'>
          Manage Event
        </Button>
      </Segment>
    </Segment.Group>
  )
}

EventDetailedHeader.propTypes = {

}

export default EventDetailedHeader

