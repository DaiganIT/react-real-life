import React from 'react';
import PropTypes from 'prop-types';

export default function TextBox(props) {
  const { onChange } = props;

  const onChangeValue = (e) => {
    onChange(e.target.value, e);
  }

  return <input type="text" {...props} onChange={onChangeValue} />;
}

TextBox.propTypes = {
  onChange: PropTypes.func.isRequired,
};
