import React from "react";
import "./Header.css";
import Form from "../Form/Form.js";
import BlogIcon from "../BlogIcon.js";
import App from "../App.js"

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      isComponentVisible: false,
      ContactsStateUpdate: false,
      isAppComponentVisible:false,
      employee: {
        name: "",
        email: "",
        mobile: "",
        website: "",
        landline: "",
        address: "",
      },
    };
  }

  handleClick = () => {
    this.setState({ isComponentVisible: true });
  };

  handleCancel = () => {
    this.setState({ isComponentVisible: false });
  };
  
  handleHomeClick=()=>{
   this.setState({isAppComponentVisible:true})
  }

  handleContactsState = () => {
    this.setState({ ContactsStateUpdate: true });
    this.props.contactsState();
  };

  render() {
    return (
      <div className="Container">
        <div className="mainHeading">
          <h2>Address Book</h2>
        </div>
        <div className="nav">
          <div>
            {this.isAppComponentVisible && <App/>}
          <button onClick={this.handleHomeClick}>Home</button>&nbsp;&nbsp;&nbsp;

            <button onClick={this.handleClick}>+Add</button>
            {this.state.isComponentVisible ? (
              <Form
                employee={this.state.employee}
                cancel={this.handleCancel}
                contactsState={this.handleContactsState}
              />
            ) : null}
          </div>
          <div>
            <BlogIcon />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
