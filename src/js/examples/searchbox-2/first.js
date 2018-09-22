import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import SearchBox from './searchbox';
import SearchBoxCode from './searchbox.txt';
import SearchContainer from './search-container';
import Example from '../../components/example';

class SearchBoxExample extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Typography variant="title">Search box in App Bar 2</Typography>
        <Typography variant="body1">
          When you need to have communication between components, and you cannot
          use the standard parent-child with props, a PubSub is ideal for
          components that can occur more than once in a page. In this example we
          have the same searchbox as before, but using PubSub. A PubSub is a
          patternt where a component subscribe to an event, and another
          component publishes events. In this case, the SearchContainer will be
          the Subscriber, and the searchbox will be the Publisher.
        </Typography>
        <Example code={SearchBoxCode}>
          <div className={classes.textBox}>
            <SearchBox idPrefix="unique" />
            <SearchContainer idPrefix="unique" />
          </div>
        </Example>
      </React.Fragment>
    );
  }
}

SearchBoxExample.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = (theme) => ({
  textBox: {
    marginBottom: theme.spacing.unit,
  },
});

export default withStyles(styles)(SearchBoxExample);
