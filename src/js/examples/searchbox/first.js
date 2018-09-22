import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import SearchBox from './searchbox';
import SearchContainer from './search-container';
import SearchBoxCode from './searchbox.txt';
import Example from '../../components/example';

class SearchBoxExample extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Typography variant="title">Search box in App Bar</Typography>
        <Typography variant="body1">
          When it comes to a general search box in the App Bar, this is the
          pattern I use for having the search box interacting with the currently
          active component. The search box will expose a static method so
          components can listen to events. This pattern is well suited for
          global components that will be present only once in the page.
          I use the same pattern for Login and Global Dialogs.
        </Typography>
        <Example code={SearchBoxCode}>
          <div className={classes.textBox}>
            <SearchBox />
            <SearchContainer />
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
