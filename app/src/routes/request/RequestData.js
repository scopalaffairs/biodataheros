import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './RequestData.css';
import { Table, Dropdown, List, Button, Grid, Header, Icon, Form, Input, Label, Menu, Divider, Card, Image, } from 'semantic-ui-react'
import { WithContext as ReactTags } from 'react-tag-input';
import Echarts from '../../components/Echarts/Echarts';
import { BAR } from '../../components/Echarts/constants/types';

const Keys = {
  TAB: 9,
  SPACE: 32,
  COMMA: 188,
};

const PREDEFINED_PRISES = [99, 119, 129, 135, 139, 143, 147, 151, 155, 159, 162];

class RequestData extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      tags: [],
      price: 0,
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

  onPriceChange = (event) => {
    this.setState({ price: event.target.value });
  }

  handleDelete(i) {
    const { tags } = this.state;
    const price = tags.length ? PREDEFINED_PRISES[tags.length] : 0;
    this.setState({
      price,
      tags: tags.filter((tag, index) => index !== i),
    });

    
  }

  handleAddition(tag) {
    const price = PREDEFINED_PRISES[this.state.tags.length + 1];
    this.setState(state => ({ tags: [...state.tags, tag], price }));
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

    const counts = [98, 40, 32, 44, 66, 56, 40, 51, 71, 86, 48];
    const items = tags.map(tag => {
      return {
        count: counts[(tag.text.length + 4) % 10],
        name: tag.text,
      }
    });

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
          
          {!!tags.length && <div>
          <Header className={s.audienceHeader} as='h2'>Audience overview</Header>
          <Grid>
          <Grid.Row>
          <Grid.Column width={11}>
            <Echarts 
              barColors={barColors}
              withTooltip 
                type={BAR} 
                items={items} 
                series={[{
                value: "count",
                name: "name",
              }]} />
          </Grid.Column>
          <Grid.Column  width={5}>
              <Card>
                <Card.Content>
                  <Card.Header className={s.cardHeader}>Set your bid</Card.Header>
                  <Form>
                <Form.Input 
                  labelPosition='right' 
                  name='price' 
                  type='text' 
                  placeholder='Price'
                >
                  <input 
                    value={this.state.price} 
                    type="number"
                    onChange={this.onPriceChange} 
                  />
                  <Label>$</Label>
                </Form.Input>
              </Form>
                </Card.Content>
                <Card.Content extra>
                <Button
                    fluid
                    className={`${s.button} ${s.topMargin}`}
                    content="Create Request"
                />
                </Card.Content>
              </Card>
          </Grid.Column>
          
          </Grid.Row>
          </Grid>
          </div>}
          </div>
      </div>
    );
  }
}

export default withStyles(s)(RequestData);
