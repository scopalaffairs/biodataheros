import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './HeaderBasic.css';
import Link from '../Link';
import Navigation from '../Navigation';
import { Button, Icon } from 'semantic-ui-react';

class HeaderBasic extends React.Component {
  render() {
    return (
      <div>
        <div className={s.root}>
          <div className={s.container}>
            <Navigation />
            <Link className={s.brand} to="/">
              <Icon name='heartbeat'  />
              <span className={s.brandTxt}>BioDataHero</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(HeaderBasic);
