import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ProvideData.css';
import Link from '../Link';
import { Form, Input, Button, Menu, Grid, GridRow, GridColumn, Divider } from 'semantic-ui-react';

class ProvideData extends React.Component {
    state = {
        data: {
            name: '',
            age: '',
            description: '',
            tags: '',
        },
        activeItem: 'Patient',
        userId: 'patient',
        isPatientCreated: false,
        newPatient: {
            firstName: '',
            lastName: '',
            address: '',
            gender: 'Male'
        }
    }


    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    handleChange = (target, event, input) => {
        if (target) {
            const targetObject = this.state[target];
            targetObject[input.name] = input.value;
            this.setState({ [target]: targetObject }); 
        } else {
            this.setState({
                [input.name]: input.value
            });
        }
    }

    handleProvide = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const data = this.state;
    }
  
    render() {
    
    const { activeItem, isPatientCreated, data, newPatient } = this.state; 
    const users = [{
        text: 'Donald Duck',
        value: 11,
        key: 11
    }, {
        key: 11,
        text: 'Donald Trump',
        value: 12,
    }];
    return (
      <div className={s.root}>
        <div className={s.container}>
        <Divider hidden />
          <h1>{this.props.title}</h1>
          <Divider />
        <Grid>
            <Grid.Row>
                <Grid.Column width={6}>
                    <Menu pointing vertical>
                        <Menu.Item 
                            name='Patient'
                            active={activeItem === 'Patient'}
                            onClick={this.handleItemClick} 
                        />
                        <Menu.Item
                            name='Data'
                            active={activeItem === 'Data'}
                            onClick={this.handleItemClick}
                        />
                    </Menu>
                </Grid.Column>
                <Grid.Column width={10}>
                    {activeItem === "Patient" && 
                        <Form>
                        <Divider horizontal>
                            <Form.Checkbox
                                value={false} 
                                checked={!isPatientCreated} 
                                onChange={(e, ee) => this.handleChange('', e, ee)}
                                name="isPatientCreated"
                                toggle 
                                label="Choose Patient" 
                            />
                        </Divider>
                        <Form.Dropdown 
                            onChange={(e, ee) => this.handleChange('', e, ee)} 
                            options={users}
                            name="patientId"
                            label="Patient" 
                            placeholder="Choose Patient"
                            value={this.state.name} 
                        />
                        <Divider horizontal>
                            <Form.Checkbox 
                                value={true}
                                checked={isPatientCreated}
                                onChange={(e, ee) => this.handleChange('', e, ee)}
                                name="isPatientCreated" 
                                toggle 
                                label="Or Create" />
                        </Divider>
                        <Form.Input
                            onChange={(e, ee) => this.handleChange('newPatient', e, ee)} 
                            name="firstName"
                            label="First Name" 
                            value={newPatient.firstName} 
                        />
                        <Form.Input 
                            onChange={(e, ee) => this.handleChange('newPatient', e, ee)} 
                            name="lastName"
                            label="Last Name" 
                            value={newPatient.lastName} 
                        />
                        <Form.Dropdown
                            onChange={(e, ee) => this.handleChange('newPatient', e, ee)} 
                            name="gender"
                            label="Gender" 
                            value={newPatient.gender}
                            options={[{key: 'Male', value: 'Male', text: 'Male'}, 
                            {key: 'Fermale', value: 'Fermale', text: 'Fermale'}]} 
                        />
                        <Button 
                        className={s.button}
                        content="Next Step" 
                        onClick={() => this.handleItemClick('', { name: 'Data' })} />    
                        </Form>
                    }
                    {activeItem === "Data" && <Form>
                        <Form.TextArea 
                            onChange={(e, ee) => this.handleChange('data', e, ee)}
                            name="description"
                            label="Description" 
                            value={data.description} 
                        />
                        <Form.Input 
                            onChange={(e, ee) => this.handleChange('data', e, ee)}
                            name="height"
                            label="Height" 
                            value={data.growth} 
                        />
                        <Form.Input 
                            onChange={(e, ee) => this.handleChange('data', e, ee)}
                            name="weight"
                            label="Weight" 
                            value={data.weight} 
                        />
                        <Form.Input 
                            onChange={(e, ee) => this.handleChange('data', e, ee)}
                            name="temperature"
                            label="Temperature" 
                            value={data.temperature} 
                        />
                        <Form.Input 
                            onChange={(e, ee) => this.handleChange('data', e, ee)}
                            name="pressure"
                            label="Pressure" 
                            value={data.pressure} 
                        />
                        <Form.Input 
                            onChange={(e, ee) => this.handleChange('data', e, ee)}
                            name="diagnosis"
                            label="Diagnosis" 
                            value={data.diagnose} 
                        />
                        <Button className={s.button} content="Provide" onClick={this.handleProvide} />
                    </Form>}
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </div>
  </div>
    );
  }
}

export default withStyles(s)(ProvideData);
