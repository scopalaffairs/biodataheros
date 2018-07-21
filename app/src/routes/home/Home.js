import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';
import { Divider, Container, Button, Icon, Label, Menu, Table } from 'semantic-ui-react';

class Home extends React.Component {
  static propTypes = {
    news: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        content: PropTypes.string,
      }),
    ).isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Divider hidden />
          <Container textAlign='center'>
            <Button color="blue" icon labelPosition='right'>
              Provide Data
              <Icon name='random' />
            </Button>
            <Button  color="blue" icon labelPosition='right'>
              My Data
              <Icon name='table alternate' />
            </Button>
            <Button  color="blue" icon labelPosition='right'>
              Request Data
              <Icon name='shopping basket' />
            </Button>
          </Container>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
