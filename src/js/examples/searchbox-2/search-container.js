import React from 'react';
import PropTypes from 'prop-types';
import PubSub from 'pubsub-js';

export default class SearchContainer extends React.Component {
  state = {
    searchValue: '',
  };

  componentDidMount() {
    this.subscription = PubSub.subscribe(
      `SEARCH-${this.props.idPrefix}`,
      this.onSearchEvent,
    );
  }

  componentWillUnmount() {
    if (this.subscription) {
      PubSub.unsubscribe(this.subscription);
      this.subscription = null;
    }
  }

  onSearchEvent = (event, value) => {
    this.setState({ searchValue: value });
  };

  render() {
    return (
      <React.Fragment>Search value: {this.state.searchValue}</React.Fragment>
    );
  }
}

SearchContainer.propTypes = {
  idPrefix: PropTypes.string.isRequired,
};
