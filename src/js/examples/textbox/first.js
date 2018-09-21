import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import TextBox from './textbox-sfc';
import TextBoxCode from './textbox-sfc.txt';
import Example from '../../components/example';

class TextBoxExample extends React.Component {
  state = {
    value: '',
  };

  onChange = (name) => (value) => {
    this.setState({ [name]: value });
  };

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Typography variant="title">
          Textbox as a Stateless Functional Component
        </Typography>
        <Typography variant="body1">
          This is the way I prefer my Text Boxes to be. It is a controlled
          component and the state is handled in the parent component
        </Typography>
        <Example code={TextBoxCode}>
          <div className={classes.textBox}>
            <TextBox
              value={this.state.value}
              onChange={this.onChange('value')}
            />
          </div>
          <div>State on parent component value: {this.state.value}</div>
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
