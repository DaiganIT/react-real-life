import React from 'react';

export default class TextBox extends React.Component {
  state = {
    value: '',
  };

  onChangeValue = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    const { value } = this.state;

    return (
      <input
        type="text"
        {...this.props}
        value={value}
        onChange={this.onChangeValue}
      />
    );
  }
}
