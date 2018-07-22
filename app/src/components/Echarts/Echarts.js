import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Grid, Header } from 'semantic-ui-react';
import s from './Echarts.css';
import AsyncComponent from '../../components/AsyncComponent/AsyncComponent';
import zooms from './modules/zooms';
import yAxises from './modules/yAxises';
import xAxises from './modules/xAxises';
import tooltips from './modules/tooltips';
import legends from './modules/legends';
import { getOptionFromArray, getOptionFromObject } from './utils';
import { LINE, PIE, BAR, SCATTER, RADAR, GRAPH } from './constants/types';
import ButtonsPannel from './buttons/ButtonsPannel';
import { buttonsSettings } from './constants/buttonsSettings';
import { ZOOM_IN, ZOOM_OUT } from './constants/buttonTypes';
import { AXIS_DEFAULTS } from './constants/axis';
import {
  LEGENDS_TYPE_DEFAULTS,
  SERIE_VALUE,  
  ITEM_NAME,
} from './constants/legends';
import { BUTTONS_DEFAULTS_SET } from './constants/buttons';

const ReactEcharts = AsyncComponent(() => import('echarts-for-react'));

class Echarts extends React.Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    echartProps: PropTypes.instanceOf(Object),
    items: PropTypes.instanceOf(Array).isRequired,
    series: PropTypes.instanceOf(Array).isRequired,
    links: PropTypes.instanceOf(Array),
    xAxis: PropTypes.instanceOf(Object),
    yAxis: PropTypes.instanceOf(Object),
    isSmooth: PropTypes.bool,
    title: PropTypes.string,
    seriesName: PropTypes.string,
    nameProperty: PropTypes.string,
    layout: PropTypes.oneOf(['none', 'force', 'circular']),
    withLegend: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    withTooltip: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    withZoom: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    withAxis: PropTypes.oneOf([true, 'x', 'y']),
    withArea: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    withGradient: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    customOption: PropTypes.instanceOf(Object),
    buttons: PropTypes.instanceOf(Array),
  };

  static defaultProps = {
    xAxis: {},
    yAxis: {},
    customOption: {},
    echartProps: {},
    buttons: undefined,
    title: '',
    seriesName: '',
    layout: 'none',
    nameProperty: 'name',
    links: [],
    isSmooth: false,
    withLegend: false,
    withTooltip: false,
    withZoom: false,
    withArea: false,
    withGradient: false,
    withAxis: undefined,
  };

  state = {
    echartCore: null,
    isMouseOver: false,
  };

  componentDidMount() {
    const echartCore = require('echarts/lib/echarts');
    this.setState({ echartCore });
  }

  handleMouseLeave = () => {
    this.setState({ isMouseOver: false });
  };

  handleMouseEnter = () => {
    this.setState({ isMouseOver: true });
  };

  render() {
    const { echartCore } = this.state;
    const { isSmooth, seriesName } = this.state;

    // set default options
    const option = {
      grid: {
        right: '20px',
        left: '30px',
        top: '20px',
        bottom: '40px',
      },
      series: {
        ...this.props.series,
        smooth: isSmooth,
        name: seriesName,
      },
      toolbox: {},
    };

    const withAxis =
      this.props.withAxis === undefined
        ? AXIS_DEFAULTS[this.props.type]
        : this.props.withAxis;

    if (withAxis) {
      if (withAxis === 'x') {
        option.xAxis = getOptionFromObject(
          xAxises,
          withAxis,
          this.props.customOption.xAxis,
        );
      } else if (withAxis === 'y') {
        option.yAxis = getOptionFromObject(
          yAxises,
          withAxis,
          this.props.customOption.yAxis,
        );
      } else {
        option.yAxis = getOptionFromObject(
          yAxises,
          withAxis,
          this.props.customOption.yAxis,
        );
        option.xAxis = getOptionFromObject(
          xAxises,
          withAxis,
          this.props.customOption.xAxis,
        );
      }
    }

    // generate series and data
    switch (this.props.type) {
      case SCATTER:
      case LINE: {
        option.series = this.props.series.map(serie => ({
          data: this.props.items.map(item => [
            item[serie.name],
            item[serie.value],
          ]),
          name: serie.value,
          type: this.props.type,
        }));
        break;
      }
      case GRAPH: {
        option.series = this.props.series.map(serie => ({
          data: this.props.items.map(item => ({
            name: item[serie.name],
            value: item[serie.value],
            x: item[serie.x],
            y: item[serie.y],
          })),
          type: this.props.type,
          layout: this.props.layout,
          links: this.props.links,
        }));
        break;
      }
      case RADAR:
        option.radar = {
          name: {
            textStyle: {
              color: '#fff',
              backgroundColor: '#999',
              borderRadius: 3,
              padding: [3, 5],
            },
          },
          indicator: this.props.series.map(serie => ({
            name: serie.name,
            max: serie.max,
          })),
        };
        option.series = [
          {
            data: this.props.items.map(item => ({
              name: item[this.props.nameProperty],
              value: this.props.series.map(serie => item[serie.value]),
            })),
            type: this.props.type,
          },
        ];
        break;
      case BAR: {
        option.xAxis.data = [];
        option.series = this.props.series.map((serie, serieIndex) => ({
          data: this.props.items.map((item, itemIndex) => {
            if (serieIndex === 0) {
              option.xAxis.data.push(item.name);
            }
            return {
              value: item[serie.value],
              itemStyle: {color: this.props.barColors[itemIndex]},
            };
          }),
          name: serie.value,
          type: this.props.type,
          barMaxWidth: 200,
        }));
        break;
      }
      case PIE: {
        option.series = this.props.series.map(serie => ({
          data: this.props.items.map(item => ({
            name: item[serie.name],
            value: item[serie.value],
          })),
          name: serie.value,
          type: this.props.type,
        }));
        break;
      }
      default: {
        break;
      }
    }

    if (this.props.withGradient) {
      option.series.areaStyle = {
        normal: {
          color:
            echartCore &&
            new echartCore.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: this.props.withGradient.from,
              },
              {
                offset: 1,
                color: this.props.withGradient.to,
              },
            ]),
        },
      };
    }

    if (this.props.withLegend) {
      option.legend = getOptionFromObject(
        legends,
        this.props.withLegend,
        this.props.customOption.legend,
      );
      switch (LEGENDS_TYPE_DEFAULTS[this.props.type]) {
        case ITEM_NAME: {
          option.legend.data = this.props.items.map(item => item.name);
          break;
        }
        case SERIE_VALUE: {
          option.legend.data = this.props.series.map(serie => serie.value);
          break;
        }
        default: {
          break;
        }
      }
    }

    if (this.props.withZoom && withAxis) {
      option.dataZoom = getOptionFromArray(
        zooms,
        this.props.withZoom,
        this.props.customOption.dataZoom,
      );
    }

    if (this.props.withTooltip) {
      option.tooltip = getOptionFromObject(
        tooltips,
        this.props.withTooltip === true ? this.props.type : true,
        this.props.customOption.tooltip,
      );
    }

    // option.visualMap = {
    //   min: data.reduce((min, p) => p.y < min ? p.y : min, data[0].y),
    //   max: 10,
    //   dimension: 1,
    //   orient: 'vertical',
    //   right: 10,
    //   top: 'center',
    //   text: ['HIGH', 'LOW'],
    //   calculable: true,
    //   inRange: {
    //     color: ['#f2c31a', '#24b7f2'],
    //   },
    // };

    const buttons = this.props.buttons || BUTTONS_DEFAULTS_SET[this.props.type];
    if (
      this.props.buttons &&
      this.props.buttons.filter(button =>
        [ZOOM_IN, ZOOM_OUT].includes(button.type),
      )
    ) {
      option.toolbox = {
        itemSize: 0,
        feature: {
          saveAsImage: {},
        },
      };
    }
    return (
      <Grid
        onMouseLeave={this.handleMouseLeave}
        onMouseEnter={this.handleMouseEnter}
      >
        <Grid.Row columns={1}>
          <Grid.Column>
            {ReactEcharts && (
              <ReactEcharts
                option={option}
                ref={e => {
                  this.echarts_react = e;
                }}
                style={{ width: '99%', height: '340px' }}
                {...this.props.echartProps}
              />
            )}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default withStyles(s)(Echarts);
