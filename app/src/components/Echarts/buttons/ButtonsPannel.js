import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ButtonsPannel.css';
import Button from './Button';

class ButtonsPannel extends React.Component {
  static propTypes = {
    echartsReact: PropTypes.instanceOf(Object).isRequired,
    buttons: PropTypes.instanceOf(Array).isRequired,
  };

  render() {
    return (
      <div className={s.toolbar}>
        {this.props.buttons.map(button => (
          <Button echartsReact={this.props.echartsReact} {...button} />
        ))}
      </div>
    );
  }
}

export default withStyles(s)(ButtonsPannel);
