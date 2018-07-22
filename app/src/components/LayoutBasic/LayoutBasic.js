import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

// external-global styles must be imported in your JS.
import normalizeCss from 'normalize.css';
import s from './LayoutBasic.css';
import HeaderBasic from '../HeaderBasic';
import Footer from '../Footer';

class LayoutBasic extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div className="layoutRoot">
        <HeaderBasic />
        <div className={s.content}>
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(normalizeCss, s)(LayoutBasic);
