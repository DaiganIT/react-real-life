import React from 'react';
import FirstExample from './first';
import SecondExample from './second';

export default class TextBoxExample extends React.Component {
  render() {
    return (
      <React.Fragment>
        <FirstExample />
        <SecondExample />
      </React.Fragment>
    );
  }
}
