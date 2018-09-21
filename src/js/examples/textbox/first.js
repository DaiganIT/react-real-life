import React from 'react';
import TextBox from './textbox-sfc';
import TextBoxCode from './textbox-sfc.txt';
import Example from '../../components/example';

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
        <Example code={TextBoxCode}>
          <TextBox value={this.state.value} onChange={this.onChange('value')} />
        </Example>
      </React.Fragment>
    );
  }
}
