import React from 'react';
import TextBox from './textbox-sfc';
import TextBoxCode from './textbox-sfc.txt';
import Example from '../../components/example';
import { Typography } from '../../../../node_modules/@material-ui/core';

export default class TextBoxExample extends React.Component {
  state = {
    value: '',
  };

  onChange = (name) => (value) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <React.Fragment>
        <Typography variant="title">
          Textbox as a Stateless Functional Component
        </Typography>
        <Typography variant="body1">
          This is the way I prefer my Text Boxes to be. It is a controlled component and the state is handled in the parent component
        </Typography>
        <Example code={TextBoxCode}>
          <TextBox value={this.state.value} onChange={this.onChange('value')} />
        </Example>
      </React.Fragment>
    );
  }
}
