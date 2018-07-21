import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';
import { Header, Divider, Container, Button, Icon, Label, Menu, Table } from 'semantic-ui-react';

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
          <div className="ui vertical stripe quote segment">
            <div className="ui equal width stackable internally celled grid">
              <div className="center aligned row">
                <div className="column">
                  <Header as='h2' icon>
                    <Icon className={s.icon} name='star' />
                    Become a data hero
                    <Header.Subheader>Help to avoid or cure diseases by sharing anonymized clinical records and earn money.</Header.Subheader>
                  </Header>
                </div>
                <div className="column">
                  <Header as='h2' icon>
                    <Icon className={s.icon} name='search' />
                    Target your study
                    <Header.Subheader>Find existing patient health records for your research needs and propose a price for the data.</Header.Subheader>
                  </Header>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
