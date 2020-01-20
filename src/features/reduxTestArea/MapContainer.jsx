import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { Segment } from 'semantic-ui-react';

export const MapContainer = ({ center, google, style }) => {
  return (
    <Segment attached style={{ padding: 0 }}>
      <div style={style}>
        <Map
          google={google}
          style={style}
          center={center}
          zoom={12}
        >
          <Marker name={'Event Location'} position={center} />
        </Map>
      </div>
    </Segment>
  );
}

// this is only used when whe have not imported the api yet
export default GoogleApiWrapper({
  apiKey: ('AIzaSyDD-2A2mlfnMS6Kq36lW-FSTVShBFlF064')
})(MapContainer)