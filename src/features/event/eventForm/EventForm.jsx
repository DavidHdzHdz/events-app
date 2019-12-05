import React, { Component } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';

class EventForm extends Component {
  state = { title: '', date: '', city: '', venue: '', hostedBy: '' }

  componentDidMount() {
    // if user navigates to manage a event that doesn't exist it redirects to create-event rout
    /** this is an issue with  this.props.history.goBack */
    if(this.props.match.params.id) {
      if(!this.props.eventData) {
        this.props.history.push('/create-event');
      } else {
        this.setState({ ...this.props.eventData });
      }
    }
  }
  handleOnChange = ({ target: { name, value } }) => this.setState({ [name]: value });
  handleSubmit = event => {
    event.preventDefault();
    if (this.props.eventData) {
      // this.props.handleUpdateEvent(this.state);
    } else {
      // this.props.handleCreateEvent(this.state);
    }
  }
  render() {
    const { title, date, city, venue, hostedBy } = this.state;
    const { eventData } = this.props;
    return (
      <Segment>
        {eventData ? <h2> Update "{eventData.title}" event</h2> : <h2>Create Event</h2>}
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
          <Button type='button' onClick={this.props.history.goBack}>Cancel</Button>
        </Form>
      </Segment>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { events } = state;
  const { match: { params: { id } } } = ownProps;
  if (events.length > 0 && events.some(event => event.id === id)) {
    return { eventData: events.find(event => event.id === id) }
  }
  return { eventData: null }
}

export default connect(mapStateToProps)(EventForm);
