import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';
import logoUrl from './logo-small.png';
import logoUrl2x from './logo-small@2x.png';
import Input from 'semantic'
import Echarts from '../Echarts/Echarts.js'

class TargetFilters extends React.Component {
  
    state = {

    };
    render() {
    return (
      <div>
        <Echarts type="BAR" />
      </div>
    );
  }
}

export default withStyles(s)(TargetFilters);
