import React from 'react';
import _ from 'lodash';
import memoize from 'memoize-one';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Book from './book';
import examples from '../data/examples';
import theme from '../utils/theme';

class App extends React.Component {
  state = {
    items: [],
    selectedItem: {},
  };

  componentDidMount() {
    const items = examples;
    this.setState({ items: items });
  }

  selectById = memoize((id, items) => _.find(items, (item) => item.id === id));

  onItemClick = (id) => {
    const item = this.selectById(id, this.state.items);
    item.selected = true;
    this.setState({ selectedItem: item });
  };

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Book {...this.state} onItemClick={this.onItemClick} />
      </MuiThemeProvider>
    );
  }
}

export default App;
