import React from 'react';
import LayoutBasic from '../../components/LayoutBasic';
import RequestData from './RequestData';

const title = 'Request Data';

function action() {
  return {
    chunks: ['request'],
    title,
    component: (
      <LayoutBasic>
        <RequestData title={title} />
      </LayoutBasic>
    ),
  };
}

export default action;
