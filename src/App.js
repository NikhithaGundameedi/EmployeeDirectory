import React from "react";
import Header from "./Header/Header.js";
import Contacts from "./Contacts/Contacts.js";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      updateContactState: false,
      contact: [],
    };
  }

  handleContactState = () => {
    if (localStorage.getItem("EmployeeData")) {
      let contactsList = JSON.parse(localStorage.getItem("EmployeeData"));
      this.setState({ contact: contactsList });
    }
  };

  render() {
    return (
      <div>
        <Header
          data={this.handleCancel}
          contactsState={this.handleContactState}
        />
        <Contacts data={this.state.contact} submit={this.handleContactState} />
      </div>
    );
  }
}
export default App;
