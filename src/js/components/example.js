import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Highlight from 'react-highlight';
import 'highlight.js/styles/darcula.css';

const ViewMode = 'view';
const CodeMode = 'code';

class Example extends React.Component {
  state = {
    mode: ViewMode,
  };

  changeMode = (newMode) => () => {
    this.setState({ mode: newMode });
  };

  render() {
    const { classes, children, code } = this.props;
    const { mode } = this.state;

    let codeClasses = classes.code;
    codeClasses +=
      ' ' + (mode === CodeMode ? classes.codeVisible : '');
    return (
      <React.Fragment>
        <div className={classes.root}>
          <div className={classes.buttonBar}>
            {mode === ViewMode ? (
              <Button onClick={this.changeMode(CodeMode)}>View Code</Button>
            ) : (
              <Button onClick={this.changeMode(ViewMode)}>Hide Code</Button>
            )}
          </div>
          <div className={classes.example}>
            <div>{children}</div>
            <div className={codeClasses}>
              <Highlight language="javascript">{code}</Highlight>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Example.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
  code: PropTypes.string.isRequired,
};

const styles = (theme) => ({
  root: {
    position: 'relative',
  },
  example: {
    backgroundColor: '#eeeeee',
    padding: 24,
    paddingTop: 48,
    textAlign: 'center',
  },
  code: {
    textAlign: 'left',
    transition: 'all 250ms ease-in-out',
    transform: 'scaleY(0)',
    fontSize: 0,
    transformOrigin: 'top',
    overflow: 'hidden',
  },
  codeVisible: {
    transform: 'scaleY(1)',
    fontSize: theme.typography.fontSize,
  },
  buttonBar: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
});

export default withStyles(styles)(Example);
