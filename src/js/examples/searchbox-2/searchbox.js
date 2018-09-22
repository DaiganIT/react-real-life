import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import TextBox from '../textbox/textbox-sfc';
import PubSub from 'pubsub-js';

export default class SearchBox extends React.Component {
  state = {
    value: '',
  };

  onChange = (value) => {
    this.setState({ value: value });
  };

  onSearch = () => {
    PubSub.publish(`SEARCH-${this.props.idPrefix}`, this.state.value);
  };

  render() {
    return (
      <React.Fragment>
        <TextBox value={this.state.value} onChange={this.onChange} />
        <Button onClick={this.onSearch}>Search</Button>
      </React.Fragment>
    );
  }
}

SearchBox.propTypes = {
  idPrefix: PropTypes.string.isRequired,
};
