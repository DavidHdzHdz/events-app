/*global google */
import React, { useState, useEffect, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { asyncIncrementCounter, asyncDecrementCounter, setCounter } from './testActions';
import { Button, Form } from 'semantic-ui-react';
import PlacesInputTest from './PlacesInputTest';
import { MapContainer } from './MapContainer';
import { geocodeByAddress } from 'react-places-autocomplete';
import { getLatLng } from 'react-places-autocomplete';
// modals test
import { openModal } from '../modals/modalsActions';

const ReduxTestComponent = ({
  data,
  asyncIncrementCounter,
  asyncDecrementCounter,
  setCounter,
  openModal,
  isLoading,
  elementName
}) => {
  const [ state, setstate ] = useState(data);
  const [ latLng, setlatLng ] = useState({});
  useEffect(() => setstate(data), [data]);
  const handleChange = ({ target: { value } }) => setstate(value);
  const handleSelectLocation = (location) => {
    geocodeByAddress(location)
      .then(results => getLatLng(results[0]))
      .then(latLng => setlatLng(latLng))
      .catch(error => console.error('Error', error));
  }
  return (
    <Fragment>
      <h1>data in store is: <span style={{ color: 'blue' }}>{data}</span></h1>
      <Button
        name='incrementButton'
        loading={elementName === 'incrementButton' && isLoading}
        onClick={event => asyncIncrementCounter(event.target.name)}
        positive
        content='Incrementar'
      />
      <Button
        name='decrementButton'
        loading={elementName === 'decrementButton' && isLoading}
        onClick={event => asyncDecrementCounter(event.target.name)}
        negative
        content='Decrementar'
      />
      <Form onSubmit={(event) => {
        event.preventDefault();
        console.log(state);
        setCounter(parseInt(state));
      }}>
        <Form.Field>
          <label> Valor del Contador </label>
          <input value={state} onChange={handleChange}/>
          <Button positive type='submit'>
            Enviar
          </Button>
        </Form.Field>
      </Form>
      <br />
      <br />
      <PlacesInputTest onSelect={handleSelectLocation} />
      <MapContainer
        google={google}
        style={{ width: '800px', height: '300px' }}
        center={latLng}
      />

      {/* test modal */}
      <br />
      <br />
      <Button positive content='Test Modal' onClick={() =>
        openModal('TestModal', { prop1: 'prop1Test', prop2: '' })
      } />
      <Button positive content='Login Modal' onClick={() =>
        openModal('LoginModal', { prop1: 'prop1Log', prop2: '' })
      } />
      <Button positive content='Register Modal' onClick={() =>
        openModal('RegisterModal', { prop1: 'prop1Log', prop2: '' })
      } />
    </Fragment>
  )
}

ReduxTestComponent.propTypes = {
  data: PropTypes.number.isRequired,
  asyncIncrementCounter: PropTypes.func.isRequired,
  asyncDecrementCounter: PropTypes.func.isRequired,
  setCounter: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  data: state.test.data,
  isLoading: state.async.isLoading,
  elementName: state.async.elementName
})

const mapActionsToProps = {
  asyncIncrementCounter,
  asyncDecrementCounter,
  setCounter,
  openModal
}

export default connect(mapStateToProps, mapActionsToProps)(ReduxTestComponent)
