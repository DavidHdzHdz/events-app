/*global google*/
import React, { Component } from 'react';
import { Segment, Form, Button, Grid, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import cuid from 'cuid';
import { createEvent, updateEvent } from '../eventActions';
import { reduxForm, Field } from 'redux-form';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import {
  composeValidators,
  combineValidators,
  isRequired,
  hasLengthGreaterThan
} from 'revalidate';
import TextInput from '../../../app/common/form/TextInput';
import TextArea from '../../../app/common/form/TextArea';
import SelectInput from '../../../app/common/form/SelectInput';
import DateInput from '../../../app/common/form/DateInput';
import PlaceInput from '../../../app/common/form/PlaceInput';

class EventForm extends Component {
  state = { cityLatLng: {}, venueLatLng: {} }
  componentDidMount() {
    if (this.props.match.params.id) {
      if (!this.props.initialValues) {
        this.props.history.push('/create-event');
      }
    }
  }
  onSubmit = values => {
    const { lat, lng } = this.state.venueLatLng;
    if (lat && lng) {
      values.venueLatLng = { lat, lng };
    }
    if (this.props.initialValues) {
      this.props.updateEvent(values);
      this.props.history.push(`/event/${this.props.initialValues.id}`);
    } else {
      const newEvent = {
        ...values,
        hostPhotoURL: '/assets/images/user.png',
        id: cuid()
      }
      this.props.createEvent(newEvent);
      this.props.history.push(`/event/${newEvent.id}`);
    }
  }
  handleSelectCity = selectedCity => {
    geocodeByAddress(selectedCity)
      .then(results => getLatLng(results[0]))
      .then(latlng => this.setState({ cityLatLng: latlng }))
      .then(() => this.props.change('city', selectedCity));
  }
  handleSelectVenue = selectedVenue => {
    geocodeByAddress(selectedVenue)
      .then(results => getLatLng(results[0]))
      .then(latlng => this.setState({ venueLatLng: latlng }))
      .then(() => this.props.change('venue', selectedVenue));
  }
  render() {
    const { initialValues } = this.props;
    const categoryOptions = [
      { key: 'drinks', value: 'drinks', text: 'Drinks' },
      { key: 'culture', value: 'culture', text: 'Culture' },
      { key: 'film', value: 'film', text: 'Film' },
      { key: 'food', value: 'food', text: 'Food' },
      { key: 'music', value: 'music', text: 'Music' },
      { key: 'travel', value: 'travel', text: 'Travel' },
    ]
    return (
      <Grid>
        <Grid.Column width={2} />
        <Grid.Column width={12}>
          <Segment>
            <Header as='h3' textAlign='center' content={initialValues ? `Update "${initialValues.title}" event` : 'Create Event'} />
            <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
              <Header sub textAlign='center' content='Event Details' />
              <Field
                name='title' placeholder='Give your event a name'
                label='title' component={TextInput} type='text'
              />
              <Field
                name='category' placeholder='What is your event about?' label='category'
                component={SelectInput} type='text' options={categoryOptions}
              />
              <Field
                name='description' placeholder='Tell us about your event'
                label='description' component={TextArea} rows={3} type='text'
              />
              <Header sub textAlign='center' content='Event Location Details'/>
              <Field
                name='city' placeholder='Event City'
                label='city' component={PlaceInput} type='text'
                onSelect={this.handleSelectCity} options={{ types: [ '(cities)' ] }}
              />
              <Field
                name='venue' placeholder='Event Venue'
                label='venue' component={PlaceInput} type='text'
                onSelect={this.handleSelectVenue} options={{
                  location: new google.maps.LatLng(this.state.cityLatLng),
                  radius: 1000,
                  types: [ 'establishment' ]
                }}
              />
              <Field
                name='date' placeholder='Event Date'
                label='date' component={DateInput}
                dateFormat='dd LLL yyyy h:mm a' showTimeSelect
                timeFormat='HH:mm'
              />
              <Button positive type='submit'>
                Submit
              </Button>
              <Button type='button' onClick={() =>
                this.props.initialValues ?
                  this.props.history.push(`/event/${this.props.initialValues.id}`) :
                  this.props.history.push('/events')
              } >
                Cancel
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
        <Grid.Column width={2} />
      </Grid>
    )
  }
}

// we can use revalidate library to validate redux-forms Fields by the following way
const validate = combineValidators({
  title: isRequired('the event title'),
  category: isRequired('the category'),
  description: composeValidators(
    isRequired('the description'),
    hasLengthGreaterThan(5)({ message: 'The description needs to be at least 5 characters' })
  )(),
  city: isRequired('the city'),
  venue: isRequired('the venue'),
  date: isRequired('the date')
});

const mapStateToProps = (state, ownProps) => {
  const { events } = state;
  const { match: { params: { id } } } = ownProps;
  if (events.length > 0 && events.some(event => event.id === id)) {
    return { initialValues: events.find(event => event.id === id) }
  }
  return { initialValues: null }
}

const mapActionsToProps = { createEvent, updateEvent }

export default connect(
  mapStateToProps,
  mapActionsToProps
)(reduxForm({ form: 'eventForm', validate })(EventForm));
