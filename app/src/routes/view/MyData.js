import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './MyData.css';
import { Table, Dropdown, List, Grid, Header, Icon, Input, Label, Menu, Divider, Card, Image, } from 'semantic-ui-react'

class MyData extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      studyId: null,
    };
  }

  onChangeCompany = (e, data) => {
    console.log(data);
    this.setState({ studyId: data.value });
  }

  renderRequests = () => {
    return (
      <div>
        <Header as='h4'>
          <Icon name='inbox' />
          <Header.Content>New Requests</Header.Content>
        </Header>
        <Menu vertical>
          <Menu.Item name='inbox' onClick={this.handleItemClick}>
            <Label color='teal'>1</Label>
            Inbox
          </Menu.Item>
          <Menu.Item name='spam' onClick={this.handleItemClick}>
            <Label>51</Label>
            Trash
          </Menu.Item>
        </Menu>
      </div>
    );
  }

  renderUser = () => {
    return (
      <Card>
        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
        <Card.Content>
          <Card.Header>Matthew</Card.Header>
          <Card.Meta>
            <span className='date'>Joined in 2015</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='file' />
            22 Datasets
          </a>
        </Card.Content>
      </Card>
    );
  }

  renderMyDatasets = () => {
    return (
      <div>
        <Header as='h4'>
          <Icon name='database' />
          <Header.Content>Latest Data Updates</Header.Content>
        </Header>
        <List>
          <List.Item>
            <List.Icon name='heart' />
            <List.Content>
              <List.Header as='a'>Blood pressure measurement</List.Header>
              <List.Description>
                <div><Icon name="clock outline" /> 2 minutes ago &middot; event &middot; 1.2 KB </div>
              </List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='heart' />
            <List.Content>
              <List.Header as='a'>Blood pressure measurement</List.Header>
              <List.Description>
                <div><Icon name="clock outline" /> 10 minutes ago &middot; event &middot; 1.2 KB </div>
              </List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='heart' />
            <List.Content>
              <List.Header as='a'>Blood pressure measurement</List.Header>
              <List.Description>
                <div><Icon name="clock outline" /> 1 days ago &middot; event &middot; 1.3 KB </div>
              </List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='file' />
            <List.Content>
              <List.Header as='a'>Blood analysis report</List.Header>
              <List.Description>
                <div><Icon name="clock outline" /> 3 days ago &middot; file &middot; 2.3 MB </div>
              </List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='file' />
            <List.Content>
              <List.Header as='a'>Genetic profile</List.Header>
              <List.Description>
                <div><Icon name="clock outline" /> 1 month ago &middot; file &middot; 10 MB </div>
              </List.Description>
            </List.Content>
          </List.Item>
        </List>
      </div>
    );
  }

  renderTrace = () => {
    const companyOptions = [
      { key: 'study1', value: 'study1', text: 'A Phase 1b/2 Study of Alvocidib Plus Decitabine in Patients With MDS' },
      { key: 'study2', value: 'study2', text: 'Effect of Remote Ischaemic preConditioning on Liver Injury in Patients Undergoing LIVER Resection Surgery' },
      { key: 'study3', value: 'study3', text: 'Inhaled Oxytocin and HPA Axis Reactivity' },
      { key: 'study4', value: 'study4', text: 'Safety and Immune Response of Increasing Doses of OVX836 After Intramuscular or Intranasal Administrations in Healthy Subjects' },
      { key: 'study5', value: 'study5', text: 'Evaluation of the Benefits of Individualized Advice Administration on Quality of Sleep for the Elderly Living at Home' },
      { key: 'study6', value: 'study6', text: 'Phosphate Microvascular Study' },
      { key: 'study7', value: 'study7', text: 'Fecal Microbiota Transplantation (FMT) of FMP30 in Relapsing-Remitting Multiple Sclerosis' },
      { key: 'study8', value: 'study8', text: 'Gastric Gluten-Degradation Activity of PvP001' },
      { key: 'study9', value: 'study9', text: 'Cognitive Functions in Patients With Multiple Sclerosis' },
      { key: 'study10', value: 'study10', text: 'A Study of HQP1351 in Patients With GIST or Other Solid Tumors' },
      { key: 'study11', value: 'study11', text: 'Multiple Noninvasive Examination Modality to Evaluate the Severity of Ocular Surface Disorders' },
      { key: 'study12', value: 'study12', text: 'A Phase 2 Study to Evaluate Once Daily Low Dose and High Dose Solabegron or Placebo Given for 12 Weeks to Treat Women With Symptoms of Overactive Bladder: Sudden Urge to Urinate, Frequent Urination Associated With Wetting Episodes (VEL-2001)' },
      { key: 'study13', value: 'study13', text: 'Efficacy and Safety of Apixaban in the Treatment of Heparin Induced Thrombocytopenia (HIT)' },
      { key: 'study14', value: 'study14', text: 'EMPA-KIDNEY (The Study of Heart and Kidney Protection With Empagliflozin)' },
      { key: 'study15', value: 'study15', text: 'Ageing Gut Brain Interactions' },
      { key: 'study16', value: 'study16', text: 'Strategy Training for People With Aphasia After Stroke' },
      { key: 'study17', value: 'study17', text: 'Efficacy and Safety of HQGZWWT Patients With Rheumatoid Arthritis' },
      { key: 'study18', value: 'study18', text: 'EMPA-KIDNEY (The Study of Heart and Kidney Protection With Empagliflozin)' },
      { key: 'study19', value: 'study19', text: 'Ageing Gut Brain Interactions' },
      { key: 'study20', value: 'study20', text: 'Strategy Training for People With Aphasia After Stroke' },
      { key: 'study21', value: 'study21', text: 'Efficacy and Safety of HQGZWWT Patients With Rheumatoid Arthritis' },
      { key: 'study22', value: 'study22', text: 'Prevention of Atelectasis, Via High Flow Nasal Cannula to Obtain a PEP, During General Anesthesia in Children' }
    ];
    return (
      <div>
        <Header as='h4'>
          <Icon name='star' />
          <Header.Content>Data Usage</Header.Content>
        </Header>
        <Dropdown
          placeholder='Select Study'
          fluid search selection
          options={companyOptions}
          onChange={this.onChangeCompany}
        />
      </div>
    );
  }

  renderUsageDetails = () => {
    const { studyId } = this.state;
    const data = {
      'study1': {

      },
      'study2': {

      },
    };
    if (!studyId) return;
    return (
      <div>
        <Table basic='very'>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Keywords used</Table.Cell>
              <Table.Cell>
                <Label className={s.tag}>male</Label> <Label>ovaries</Label> <Label>cancer</Label>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Organization</Table.Cell>
              <Table.Cell>Roche Diabetes Care GmbH</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Principal investigator</Table.Cell>
              <Table.Cell>Prof. Dr. Alex Hummel</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Number of participants</Table.Cell>
              <Table.Cell>23.544</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Start date</Table.Cell>
              <Table.Cell>01.04.2013</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>End date</Table.Cell>
              <Table.Cell>12.08.2017</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    );
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Divider hidden />
          <h1>{this.props.title}</h1>
          <Divider />
          <Grid columns={3}>
            <Grid.Row>
              <Grid.Column>
                {this.renderRequests()}
                <Divider hidden />
                {this.renderMyDatasets()}
              </Grid.Column>
              <Grid.Column>
                {this.renderUser()}
              </Grid.Column>
              <Grid.Column>
                {this.renderTrace()}
                {this.renderUsageDetails()}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(MyData);
