import React, { Component } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';

class EventForm extends Component {
  /**
   * Controlled form in react way
   */
  state = { title: '', date: '', city: '', venue: '', hostedBy: '' }

  componentDidMount() {
    if (this.props.eventData) {
      this.setState({ ...this.props.eventData });
    }
  }
  handleOnChange = ({ target: { name, value } }) => this.setState({ [name]: value });
  handleSubmit = event => {
    event.preventDefault();
    if (this.props.eventData) {
      this.props.handleUpdateEvent(this.state);
    } else {
      this.props.handleCreateEvent(this.state);
    }
  }
  render() {
    const { handleFormCancel } = this.props;
    const { title, date, city, venue, hostedBy } = this.state;

    return (
      <Segment>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Event Title</label>
            <input
              name='title'
              value={title}
              placeholder='Event title'
              onChange={this.handleOnChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input
              name='date'
              value={date}
              type="date"
              onChange={this.handleOnChange}
              placeholder='Event Date'
            />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input
              name='city'
              value={city}
              onChange={this.handleOnChange}
              placeholder='City event is taking place'
            />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input
              name='venue'
              value={venue}
              onChange={this.handleOnChange}
              placeholder='Enter the Venue of the event'
            />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input
              name='hostedBy'
              value={hostedBy}
              onChange={this.handleOnChange}
              placeholder='Enter the name of person hosting'
            />
          </Form.Field>
          <Button positive type='submit'>
            Submit
          </Button>
          <Button type='button' onClick={handleFormCancel}>Cancel</Button>
        </Form>
      </Segment>
    )
  }
}

export default EventForm;
