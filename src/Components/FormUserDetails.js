import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'

export default class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        // we are gonna use 'values' to access the props
        const { values, handleChange } = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter User Details" />
                    <TextField
                        hintText="Enter your First Name"
                        floatingLabelText="First Name"
                        onChange={handleChange('firstName')}
                        defaultValue={values.firstName}
                    />
                    <br />
                    <TextField
                        hintText="Enter your Last Name"
                        floatingLabelText="Last Name"
                        onChange={handleChange('lastName')}
                        defaultValue={values.lastName}
                    />
                    <br />
                    <TextField
                        hintText="Enter your Email"
                        floatingLabelText="Email"
                        onChange={handleChange('email')}
                        defaultValue={values.email}
                    />
                    <br />
                    <RaisedButton
                        label="Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}
