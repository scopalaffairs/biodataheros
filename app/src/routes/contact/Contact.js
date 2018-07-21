/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Contact.css';
import Echarts from '../../components/Echarts'
import { BAR } from '../../components/Echarts/constants/types';
import ProvideData from '../../components/ProvideData/ProvideData';

class Contact extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    const items = [{
      age: 13,
      diesses: '',
      male: 'M',
    }, {
      age: 15,
      diesses: '',
      male: 'M',
    }, {
      age: 16,
      diesses: '',
      male: 'M',
    }, {
      age: 29,
      diesses: '',
      male: 'M',
    }, {
      age: 30,
      diesses: '',
      male: 'M',
    }, {
      age: 45,
      diesses: '',
      male: 'M',
    }, {
      age: 87,
      diesses: '',
      male: 'M',
    }, {
      age: 19,
      diesses: '',
      male: 'M',
    }]
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.title}</h1>
          <ProvideData /> 
          <Echarts type={BAR} items={items} series={[{
            value: "age"
          }]} />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Contact);
