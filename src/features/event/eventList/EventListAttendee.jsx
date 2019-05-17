import React, { Component } from 'react';
import { List, Image } from 'semantic-ui-react';

class EventListAttendee extends Component {
  render() {
    return (
      <List.Item>
        <Image as="a" size="mini" circular src="https://randomuser.me/portraits/women/2.jpg"></Image>
      </List.Item>
    )
  }
}

export default EventListAttendee;
