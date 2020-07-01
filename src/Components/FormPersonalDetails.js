import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";

export default class FormPersonalDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    // we are gonna use 'values' to access the props
    const { values, handleChange } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter Personal Details" />
          <TextField
            hintText="Enter your Occupation"
            floatingLabelText="Ocuppation"
            onChange={handleChange("occupation")}
            defaultValue={values.occupation}
          />
          <br />
          <TextField
            hintText="Enter your City"
            floatingLabelText="City"
            onChange={handleChange("city")}
            defaultValue={values.city}
          />
          <br />
          <TextField
            hintText="Enter your Bio"
            floatingLabelText="Bio"
            onChange={handleChange("bio")}
            defaultValue={values.bio}
          />
          <br />
          <RaisedButton
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
          <RaisedButton
            label="Back"
            primary={false}
            style={styles.button}
            onClick={this.back}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15,
  },
};
