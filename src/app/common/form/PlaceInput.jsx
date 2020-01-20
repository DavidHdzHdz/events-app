import React from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import { Form, Message, Segment, List } from 'semantic-ui-react';

const PlaceInput = ({
  input: { value, onChange, onBlur },
  label,
  placeholder,
  options,
  onSelect,
  meta: { touched, error }
}) => {
  return (
    <PlacesAutocomplete
      value={value}
      onChange={onChange}
      searchOptions={options}
      onSelect={onSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <Form.Field error={ touched && !!error }>
          {label && <label>{label}</label>}
          <input {...getInputProps({ placeholder, onBlur })} />
          {touched && error && <Message size='mini' color='red'  content={error} />}
          {suggestions.length > 0 && (
            <Segment style={{
              marginTop: 0,
              position: 'absolute',
              zIndex: 1000,
              width: '100%'
            }}>
              {loading && <div>loading...</div>}
              <List selection>
                {suggestions.map(suggestion => (
                  <List.Item {...getSuggestionItemProps(suggestion)}>
                    <List.Header>
                      {suggestion.formattedSuggestion.mainText}
                    </List.Header>
                    <List.Description>
                      {suggestion.formattedSuggestion.secondaryText}
                    </List.Description>
                  </List.Item>
                ))}
              </List>
            </Segment>
          )}
        </Form.Field>
      )}
    </PlacesAutocomplete>
  )
}

export default PlaceInput;
