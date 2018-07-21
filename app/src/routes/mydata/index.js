import React from 'react';
import LayoutBasic from '../../components/LayoutBasic';
import MyData from './MyData';

const title = 'View My Data';

function action() {
  return {
    chunks: ['mydata'],
    title,
    component: (
      <LayoutBasic>
        <MyData title={title} />
      </LayoutBasic>
    ),
  };
}

export default action;
