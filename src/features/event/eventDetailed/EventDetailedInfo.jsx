/* global google */
import React, { useState } from 'react'
// import PropTypes from 'prop-types'
import { Segment, Grid, Icon, Button } from 'semantic-ui-react';
import { EventDetailedMap }  from './EventDetailedMap';
import { format, parseISO } from 'date-fns';

const EventDetailedInfo = ({ event }) => {
  const [ isMapOpened, setIsMapOpened ] = useState(false);
  console.log(event.venueLatLng);
  return (
    <Segment.Group>
      <Segment attached="top">
        <Grid>
          <Grid.Column width={1}>
            <Icon size="large" color="teal" name="info" />
          </Grid.Column>
          <Grid.Column width={15}>
            <p>{event.description}</p>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached>
        <Grid verticalAlign="middle">
          <Grid.Column width={1}>
            <Icon name="calendar" size="large" color="teal" />
          </Grid.Column>
          <Grid.Column width={15}>
            <span>
              {format(parseISO(event.date), 'EEE do LLLL')} at{' '}
              {format(parseISO(event.date), 'h:mm a')}
            </span>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached>
        <Grid verticalAlign="middle">
          <Grid.Column width={1}>
            <Icon name="marker" size="large" color="teal" />
          </Grid.Column>
          <Grid.Column width={11}>
            <span>{event.venue}</span>
          </Grid.Column>
          <Grid.Column width={4}>
            <Button
              color="teal"
              size="tiny"
              content={isMapOpened ? 'Hide Map' : 'Show Map'}
              onClick={() => setIsMapOpened(!isMapOpened)}
            />
          </Grid.Column>
        </Grid>
      </Segment>
      {isMapOpened &&
        <EventDetailedMap
          google={google}
          style={{ width: '100%', height: '300px' }}
          center={event.venueLatLng}
        />
      }
    </Segment.Group>
  )
}

EventDetailedInfo.propTypes = {

}

export default EventDetailedInfo
