import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';

function Names(props) {
  const { classes, items, onItemClick } = props;

  return (
    <List className={`${classes.list} list`} subheader={<li />}>
      {_.map(items, (item) => (
        <ListItem key={`item-${item.id}`} className={!item.selected ? classes.element : classes.selectedElement}>
          <ListItemText
            primary={`${item.name}`}
            onClick={() => onItemClick(item.id)}
          />
        </ListItem>
      ))}
    </List>
  );
}

Names.propTypes = {
  classes: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
  onItemClick: PropTypes.func.isRequired,
};

const styles = (theme) => ({
  list: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
    height: '100%',
    overflow: 'auto',
  },
  listSelection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
  element: {
    cursor: 'pointer',
    transition: 'all 400ms ease-in-out',
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
      color: 'white',
    },
  },
  selectedElement: {
    cursor: 'pointer',
    backgroundColor: theme.palette.primary.light,
    color: 'white',
  }
});

export default withStyles(styles)(Names);
