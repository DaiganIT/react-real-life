import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import TextBox from './textbox-s';
import TextBoxCode from './textbox-s.txt';
import Example from '../../components/example';

class TextBoxExample extends React.Component {
  constructor() {
    super();
    this.form = React.createRef();

    this.state = {
      search: '',
    };
  }

  onSubmit = (e) => {
    const search = this.form.current[0];

    this.setState({
      search: search.value,
    })

    e.preventDefault();
  };

  render() {
    return (
      <React.Fragment>
        <Typography variant="title">
          Textbox as a component with State
        </Typography>
        <Typography variant="body1">
          This textbox will handle its own state. This means that the value of
          the input will not be available to its parent component. There are
          still options where you might find this useful.
        </Typography>
        <Typography variant="body1">
          Using the form ref is possible to get the current state on submit.
          Take for example a search box. We do not care about the state until a button or a key is pressed.
        </Typography>
        <Example code={TextBoxCode}>
          <form onSubmit={this.onSubmit} ref={this.form}>
            <TextBox id="search-box" />
            <button type="submit"> Search </button>
          </form>
          <div>State on parent component value: {this.state.search}</div>
        </Example>
      </React.Fragment>
    );
  }
}

TextBoxExample.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = (theme) => ({
  textBox: {
    marginBottom: theme.spacing.unit,
  },
});

export default withStyles(styles)(TextBoxExample);
