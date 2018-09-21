import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

class Item extends React.Component {
  state = {
    component: undefined,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.example.id !== this.props.example.id) {
      import(`../examples/${this.props.example.id}/main`).then((component) => {
        this.setState({ component: component.default });
      });
    }
  }

  render() {
    const { classes, example } = this.props;

    const pageTitle = !example.id
      ? 'Select an example'
      : `Example ${example.name}`;

    const MyComponent = this.state.component ? this.state.component : 'div';

    return (
      <div className={classes.root}>
        <Typography variant="display1">{pageTitle}</Typography>
        <MyComponent />
      </div>
    );
  }
}

Item.propTypes = {
  classes: PropTypes.object.isRequired,
  example: PropTypes.object.isRequired,
};

const styles = (theme) => ({
  root: {
    margin: theme.margin.page,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

export default withStyles(styles)(Item);
