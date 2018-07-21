import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Popup, Button } from 'semantic-ui-react';
import s from './Button.css';
import { ZOOM_IN, ZOOM_OUT, DOWNLOAD_IMAGE } from '../constants/buttonTypes';

const ZOOM_RANGE = 5;

class EchartButton extends React.Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    echartsReact: PropTypes.instanceOf(Object).isRequired,
    icon: PropTypes.string.isRequired,
    popup: PropTypes.string.isRequired,
  };

  handleOnClick = () => {
    switch (this.props.type) {
      case ZOOM_IN: {
        this.handleClickZoomPlus();
        break;
      }
      case ZOOM_OUT: {
        this.handleClickZoomMinus();
        break;
      }
      case DOWNLOAD_IMAGE: {
        this.handleClickDownload();
        break;
      }
      default: {
        break;
      }
    }
  };

  handleClickZoomMinus = () => {
    const { echartsReact } = this.props;
    const echartsInstance = echartsReact.component_ref.getEchartsInstance();
    const option = echartsInstance._api.getOption();
    const { start, end } = option.dataZoom[0];
    let newEnd = end;
    let newStart = start;

    let narrowStartBorder = false;
    if (start < ZOOM_RANGE) {
      narrowStartBorder = true;
    }
    let narrowEndBorder = false;
    if (end > 100 - ZOOM_RANGE) {
      narrowEndBorder = true;
    }
    if (narrowEndBorder && narrowStartBorder) {
      newEnd = 100;
      newStart = 0;
    } else if (narrowEndBorder) {
      newEnd = 100;
      newStart = start - ZOOM_RANGE - (ZOOM_RANGE - 100 + end);
    } else if (narrowStartBorder) {
      newEnd = end + ZOOM_RANGE + (ZOOM_RANGE - start);
      newStart = 0;
    } else {
      newEnd = end + ZOOM_RANGE;
      newStart = start - ZOOM_RANGE;
    }
    echartsInstance._api.dispatchAction({
      type: 'dataZoom',
      start: newStart,
      end: newEnd,
    });
  };

  handleClickDownload = () => {
    const { echartsReact } = this.props;
    const echartsInstance = echartsReact.component_ref.getEchartsInstance();
    const componentMap = Object.keys(echartsInstance._componentsMap)[0];
    const features = echartsInstance._componentsMap[componentMap]._features;
    features.saveAsImage.model.iconPaths.saveAsImage.trigger('click');
  };

  handleClickZoomPlus = () => {
    const { echartsReact } = this.props;
    const echartsInstance = echartsReact.component_ref.getEchartsInstance();
    const option = echartsInstance._api.getOption();

    const { start, end } = option.dataZoom[0];
    let newEnd = end;
    let newStart = start;

    let zoomWidth = end - start;
    if (1 + start !== end) {
      if (zoomWidth < ZOOM_RANGE * 2) {
        if (zoomWidth % 2 === 1) {
          zoomWidth += 1;
        }
        newEnd = (end + start) / 2;
        newStart = newEnd - 1;
      } else {
        newEnd = end - ZOOM_RANGE;
        newStart = start + ZOOM_RANGE;
      }
      echartsInstance._api.dispatchAction({
        type: 'dataZoom',
        start: newStart,
        end: newEnd,
      });
    }
  };

  render() {
    return (
      <Popup
        trigger={
          <Button
            onClick={this.handleOnClick}
            size="small"
            icon={this.props.icon}
          />
        }
        content={this.props.popup}
      />
    );
  }
}

export default withStyles(s)(EchartButton);
