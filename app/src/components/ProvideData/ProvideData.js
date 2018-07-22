import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ProvideData.css';
import Link from '../Link';
import { Header, Form, Input, Button, Menu, Grid, GridRow, GridColumn, Divider } from 'semantic-ui-react';
import Dropzone from 'react-dropzone';

class ProvideData extends React.Component {
    state = {
        files: [],
        data: {
            name: '',
            age: '',
            description: '',
            tags: '',
        },
        activeItem: 'Select patient',
        userId: 'patient',
        isPatientCreated: false,
        newPatient: {
            firstName: '',
            lastName: '',
            address: '',
            gender: 'Male'
        }
    }

    onDrop(files) {
        this.setState({
            files
        });
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
        window.location = '/view'
    }

    handleChangeIsCreate = (value) => {
        this.setState({ isPatientCreated: value })
    }

    render() {
        let dropzoneRef;

        const { activeItem, isPatientCreated, data, newPatient } = this.state;
        const users = [
            {
                key: 11,
                text: 'Markus Fischer',
                value: 12,
            },
            {
                key: 12,
                text: 'Alex Hopf',
                value: 13,
            },
            {
                key: 14,
                text: 'Nadja Umms',
                value: 15,
            },
            {
                key: 16,
                text: 'Dr. Olaf Ross',
                value: 17,
            },
        ];
        return (
            <div className={s.root}>
                <div className={s.container}>
                    <Divider hidden />
                    <h1>{this.props.title}</h1>
                    <Divider />
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={5}>
                                <Menu pointing vertical>
                                    <Menu.Item
                                        name='Select patient'
                                        active={activeItem === 'Select patient'}
                                        onClick={this.handleItemClick}
                                    />
                                    <Menu.Item
                                        name='Enter Clinical Data'
                                        active={activeItem === 'Enter Clinical Data'}
                                        onClick={this.handleItemClick}
                                    />
                                    <Menu.Item
                                        name='Connect Wearable'
                                        active={activeItem === 'Connect Wearable'}
                                        onClick={this.handleItemClick}
                                    />
                                </Menu>
                            </Grid.Column>
                            <Grid.Column width={11}>
                                {activeItem === "Select patient" &&
                                    <Form>
                                        <Button.Group fluid className={s.buttonGroup}>
                                            <Button
                                                onClick={() => this.handleChangeIsCreate(false)}
                                                className={isPatientCreated ? '' : s.button}
                                            >Choose existing patient
                                            </Button>
                                            <Button.Or />
                                            <Button
                                                className={!isPatientCreated ? '' : s.button}
                                                onClick={() => this.handleChangeIsCreate(true)}>
                                                Create new patient
                                            </Button>
                                        </Button.Group>
                                        {!isPatientCreated && <Form.Dropdown
                                            onChange={(e, ee) => this.handleChange('', e, ee)}
                                            options={users}
                                            name="patientId"
                                            label="Patient"
                                            placeholder="Choose Patient"
                                            value={this.state.name}
                                        />}
                                        {isPatientCreated && <div><Form.Input
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
                                                options={[{ key: 'Male', value: 'Male', text: 'Male' },
                                                { key: 'Female', value: 'Female', text: 'Female' }]}
                                            />
                                        </div>}

                                        <Button
                                            className={`${s.button} ${s.topMargin}`}
                                            floated="right"
                                            content="Next Step"
                                            color='blue'
                                            onClick={() => this.handleItemClick('', { name: 'Enter Clinical Data' })} />
                                    </Form>
                                }
                                {activeItem === "Enter Clinical Data" && <Form>
                                    <Header as='h3'>Upload a Health Record</Header>
                                    <Dropzone
                                        className={s.dropzone}
                                        activeClassName={s.dropzoneActive}
                                        ref={(node) => { dropzoneRef = node; }}
                                        onDrop={this.onDrop.bind(this)}
                                    >
                                        <p>Please try to drop some files here, or click to select files to upload.</p>
                                    </Dropzone>
                                    {this.state.files.length !== 0 &&
                                        <aside>
                                            <Divider hidden />
                                            <Header as='h4'>Records you provide</Header>
                                            <ul>
                                                {
                                                    this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
                                                }
                                            </ul>
                                        </aside>
                                    }
                                    <Divider horizontal>Or</Divider>
                                    <Header as='h3'>Enter a Health Record</Header>
                                    <Form.Input
                                        onChange={(e, ee) => this.handleChange('data', e, ee)}
                                        name="diagnosis"
                                        label="Diagnosis"
                                        value={data.diagnose}
                                    />
                                    <Form.TextArea
                                        onChange={(e, ee) => this.handleChange('data', e, ee)}
                                        name="description"
                                        label="Description"
                                        value={data.description}
                                    />
                                    <Form.Group widths='equal'>
                                        <Form.Input
                                            onChange={(e, ee) => this.handleChange('data', e, ee)}
                                            name="height"
                                            label="Height (cm)"
                                            value={data.growth}
                                        />
                                        <Form.Input
                                            onChange={(e, ee) => this.handleChange('data', e, ee)}
                                            name="weight"
                                            label="Weight (kg)"
                                            value={data.weight}
                                        />
                                    </Form.Group>
                                    <Form.Group widths='equal'>
                                        <Form.Input
                                            onChange={(e, ee) => this.handleChange('data', e, ee)}
                                            name="temperature"
                                            label="Temperature (°C)"
                                            value={data.temperature}
                                        />
                                        <Form.Input
                                            onChange={(e, ee) => this.handleChange('data', e, ee)}
                                            name="pressure"
                                            label="Pressure (mm Hg)"
                                            value={data.pressure}
                                        />
                                    </Form.Group>
                                    <Button
                                        className={`${s.button} ${s.topMargin}`}
                                        floated="right"
                                        content="Create Health Record"
                                        onClick={this.handleProvide}
                                    />
                                </Form>}
                                {activeItem === "Connect Wearable" &&
                                    <div>
                                        <Header as='h3'>Connect Wearable</Header>
                                        <div>Please start the BioDataApp on your Apple Watch and enter the code provided to you:</div>
                                        <Divider hidden />
                                        <Form>
                                            <Form.Group>
                                                <Form.Input
                                                    onChange={(e, ee) => this.handleChange('data', e, ee)}
                                                    name="code"
                                                    label="Code"
                                                    value={data.code}
                                                />
                                            </Form.Group>
                                            <Button
                                                className={`${s.button} ${s.topMargin}`}
                                                floated="right"
                                                content="Connect Apple Watch"
                                                onClick={this.handleProvide}
                                            />
                                        </Form>
                                    </div>
                                }
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default withStyles(s)(ProvideData);
