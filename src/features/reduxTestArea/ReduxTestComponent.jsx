import React, { useState, useEffect, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter, setCounter } from './testActions';
import { Button, Form } from 'semantic-ui-react';

const ReduxTestComponent = ({ data, incrementCounter, decrementCounter, setCounter}) => {
  const [ state, setstate ] = useState(data);
  useEffect(() => setstate(data), [data]);
  const handleChange = ({ target: { value } }) => setstate(value);
  return (
    <Fragment>
      <h1>data in store is: <span style={{ color: 'blue' }}>{data}</span></h1>
      <Button onClick={incrementCounter} positive content='Incrementar'/>
      <Button onClick={decrementCounter} negative content='Decrementar'/>
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
    </Fragment>
  )
}

ReduxTestComponent.propTypes = {
  data: PropTypes.number.isRequired,
  incrementCounter: PropTypes.func.isRequired,
  decrementCounter: PropTypes.func.isRequired,
  setCounter: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  data: state.test.data
})

const mapActionsToProps = {
  incrementCounter,
  decrementCounter,
  setCounter
}

export default connect(mapStateToProps, mapActionsToProps)(ReduxTestComponent)
