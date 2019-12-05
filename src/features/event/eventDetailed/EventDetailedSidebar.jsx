import React, { Fragment } from 'react'
// import PropTypes from 'prop-types'
import { Segment, Item, Label } from 'semantic-ui-react';

const EventDetailedSidebar = ({ attendees }) => {
  return (
    <Fragment>
      <Segment
        textAlign='center'
        style={{ border: 'none' }}
        attached='top'
        secondary
        inverted
        color='teal'
      >
        {attendees && attendees.length} {attendees.length === 0 ? 'Person' : 'People'} Going
      </Segment>
      <Segment attached>
        <Item.Group divided>
          {attendees &&
            attendees.map(attendee => (
              <Item key={attendee.id} style={{ position: 'relative' }}>
                {attendee.isHost &&
                  <Label
                    style={{ position: 'absolute' }}
                    color='orange'
                    ribbon='right'
                  >
                    Host
                  </Label>
                }
                <Item.Image size='tiny' src={attendee.photoURL} />
                <Item.Content verticalAlign='middle'>
                  <Item.Header as='h3'>{attendee.name}</Item.Header>
                </Item.Content>
              </Item>
            ))
          }
        </Item.Group>
      </Segment>
    </Fragment>
  )
}

EventDetailedSidebar.propTypes = {

}

export default EventDetailedSidebar
