import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

const LoadingPage = ({ inverted = false }) => {
  return (
    inverted ?
      (
        <Dimmer active inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
      ) :
      (
        <Dimmer active>
          <Loader>Loading</Loader>
        </Dimmer>
      )
  )
}

export default LoadingPage;