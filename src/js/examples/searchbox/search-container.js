import React from 'react';
import SearchBox from './searchbox';

export default class SearchContainer extends React.Component {
  state = {
    searchValue: '',
  };

  componentDidMount() {
    SearchBox.addListener('container', this.onSearchEvent);
  }

  componentWillUnmount() {
    SearchBox.removeListener('container');
  }

  onSearchEvent = (value) => {
    this.setState({ searchValue: value });
  }

  render() {
    return (
      <React.Fragment>
        Search value: {this.state.searchValue}
      </React.Fragment>
    );
  }
}
