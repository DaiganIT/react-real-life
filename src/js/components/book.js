import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Names from './names';
import Item from './item';

function Book(props) {
  const { items, onItemClick, selectedItem } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="title" color="inherit">
            React Real Life Examples
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container>
        <Grid item xs={2}>
          <Names items={items} onItemClick={onItemClick} />
        </Grid>
        <Grid item xs={10}>
          <Item example={selectedItem} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

Book.propTypes = {
  items: PropTypes.array.isRequired,
  selectedItem: PropTypes.object.isRequired,
  onItemClick: PropTypes.func.isRequired,
};

export default Book;
