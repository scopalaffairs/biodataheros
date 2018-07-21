import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './RequestData.css';
import { Table, Dropdown, List, Grid, Header, Icon, Input, Label, Menu, Divider, Card, Image, } from 'semantic-ui-react'
import { WithContext as ReactTags } from 'react-tag-input';

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
        { id: 'epilepsy', text: 'Epilepsy' },
        { id: 'eczema', text: 'Eczema' },
        { id: 'fetal', text: 'Fetal alcohol syndrome' },
        { id: 'fibromyalgia', text: 'Fibromyalgia' },
        { id: 'gerd', text: 'GERD (Gastroesophageal Reflux Disease)' },
        { id: 'growth', text: 'Growth hormone deficiency' },
        { id: 'heart_diseases', text: 'Heart diseases' },
        { id: 'hiv_aids', text: 'HIV/AIDS' },
        { id: 'hunting', text: 'Huntingtons disease' },
        { id: 'inflammatory', text: 'Inflammatory bowel disease' },
        { id: 'juvenile', text: 'Juvenile rheumatoid arthritis' },
        { id: 'kidney', text: 'Kidney disease' },
        { id: 'lactose', text: 'Lactose intolerance' },
        { id: 'learning', text: 'Learning disabilities' },
        { id: 'migraine', text: 'Migraine' },
        { id: 'mental_health', text: 'Mental health' },
        { id: 'lupus', text: 'Lupus' },
        { id: 'mono', text: 'Mono(nucleosis)' },
        { id: 'multiple_sclerosis', text: 'Multiple sclerosis' },
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

        </div>
      </div>
    );
  }
}

export default withStyles(s)(RequestData);
