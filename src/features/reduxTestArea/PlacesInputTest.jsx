import React from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';

class PlacesInputTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = { location: '' };
  }
  handleChange = location => {
    this.setState({ location });
  }
  handleSelect = location => {
    this.props.onSelect(location);
    this.setState({ location });
  }
  render() {
    return (
      <PlacesAutocomplete
        value={this.state.location}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}

export default PlacesInputTest;