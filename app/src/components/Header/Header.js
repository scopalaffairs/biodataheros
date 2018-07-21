import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';
import { Button, Icon } from 'semantic-ui-react';

class Header extends React.Component {
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
            <div className={`ui vertical masthead center aligned segment ${s.header}`}>
              <div className="ui text container">
                <h1 className="ui inverted header">
                  Imagine-a-Company
                </h1>
                <h2>Do whatever you want when you want to.</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Header);
