import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './RequestData.css';
import { Table, Dropdown, List, Grid, Header, Icon, Input, Label, Menu, Divider, Card, Image, } from 'semantic-ui-react'
import { WithContext as ReactTags } from 'react-tag-input';
import Echarts from '../../components/Echarts/Echarts';
import { BAR } from '../../components/Echarts/constants/types';

const Keys = {
  TAB: 9,
  SPACE: 32,
  COMMA: 188,
};

class RequestData extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      tags: [],
      suggestions: [
        { id: 'male', text: 'Male' },
        { id: 'female', text: 'Female' },
        { id: 'alcoholism', text: 'Alcoholism' },
        { id: 'cancer', text: 'Cancer' },
        { id: 'amputation', text: 'Amputation' },
        { id: 'asthma', text: 'Asthma' },
        { id: 'brain_injury', text: 'Brain injury' },
        { id: 'blindness', text: 'Blindness and low vision' },
        { id: 'celiac_disease', text: 'Celiac disease' },
        { id: 'cerebral_palsy', text: 'Cerebral palsy' },
        { id: 'chronic_illness', text: 'Chronic illness' },
        { id: 'depression', text: 'Depression' },
        { id: 'drug_abuse', text: 'Drug abuse and addiction' },
        { id: 'Epilepsy', text: 'Epilepsy' },
        { id: 'Eczema', text: 'Eczema' },
      ]
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
  }


  handleDelete(i) {
    const { tags } = this.state;
    this.setState({
      tags: tags.filter((tag, index) => index !== i),
    });
  }

  handleAddition(tag) {
    this.setState(state => ({ tags: [...state.tags, tag] }));
  }

  handleDrag(tag, currPos, newPos) {
    const tags = [...this.state.tags];
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    this.setState({ tags: newTags });
  }

  render() {
    const { tags, suggestions } = this.state;

    const counts = [105, 20, 32, 44, 18, 19, 40, 15, 17, 86];
    const items = tags.map(tag => {
      return {
        count: counts[tag.text.length % 10],
        name: tag.text,
      }
    });
    console.log(items);
    console.log(items);
    const barColors = ['#9dc183', '#c7ea46', '#00A86B', '#8F9779', 
        '#4F7942', '#98FB98', '#0b6623', '#D0F0C0', '#50C878', '#4CBB17'];
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Divider hidden />
          <h1>{this.props.title}</h1>
          <Divider />

          <Header as='h4'>Enter your filter</Header>

          <ReactTags
            classNames={{
              tags: 'tagsClass',
              tagInput: `ui input ${s.tagInput}`,
              tagInputField: 'tagInputFieldClass',
              selected: 'selectedClass',
              tag: 'ui label',
              remove: 'removeClass',
              suggestions: s.suggestions,
              activeSuggestion: s.activeSuggestion
            }}
            tags={tags}
            suggestions={suggestions}
            handleDelete={this.handleDelete}
            handleAddition={this.handleAddition}
            //handleDrag={this.handleDrag}
            delimiters={[Keys.TAB, Keys.SPACE, Keys.COMMA]} />
          
          {!!tags.length && <Echarts 
          barColors={barColors}
          withTooltip 
            type={BAR} items={items} series={[{
            value: "count",
            name: "name",
          }]} />}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(RequestData);
