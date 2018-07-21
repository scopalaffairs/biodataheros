/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.css';
import Link from '../Link';
import { Icon } from 'semantic-ui-react';

class Navigation extends React.Component {
  render() {
    return (
      <div className={s.root} role="navigation">
        <Link className={s.link} to="/providedata">
          <Icon name='random' /> Provide Data
        </Link>
        <Link className={s.link} to="/mydata">
          <Icon name='table' /> My Data
        </Link>
        <Link className={s.link} to="/requestdata">
          <Icon name='shopping basket' /> Request Data
        </Link>
        <span className={s.spacer}> | </span>
        <Link className={s.link} to="/profile">
          Markus Fischer
        </Link>
      </div>
    );
  }
}

export default withStyles(s)(Navigation);
