import React from "react";
import "./Contacts.css";
import ContactInfo from "../ContactDetails/ContactInfo";
import Edit from "../Edit/Edit";
import Delete from "../Delete/Delete";
import {getLocalStorageData,setLocalStorageData} from "../LocalStorage";

class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
      contact: [],
      isContactInfoComponentVisible: false,
      isupdateContact: false,
      id: -1,
    };
  }

  componentDidMount() {
    if (getLocalStorageData()) {
      this.setState({contact:getLocalStorageData()},()=>{
        console.log(this.state.contact)
      });
     
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.data !== this.props.data) {
      this.setState({ contact: this.props.data },()=>{
        console.log(this.state.contact)
      });
    }
  }

  handleSubmit = () => {
    this.props.submit();
  };

  handleClick = (e) => {
    this.setState({ isContactInfoComponentVisible: true });
    this.setState({ id: Number(e.target.id) });
  };

  removeContactInfo = () => {
    this.setState({ isContactInfoComponentVisible: false });
  };

  render() {
    const { contact } = this.state;
    return (
      <div className="contactDiv">
        <div className="contactsContainer">
          {console.log(contact)}
          {contact.map((contact, i) => (
            <div key={i} className="contact" id={i} onClick={this.handleClick}>
              <p>{contact.name}</p>
              <p>{contact.email}</p>
              <p>{contact.mobile}</p>
            </div>
          ))}
        </div>

        <div className="contactDetails">
          {this.state.isContactInfoComponentVisible && (
            <ContactInfo data={this.state.id} />
          )}
        </div>

        <div className="editButton">
          <Edit index={this.state.id} submit={this.handleSubmit} />
        </div>

        <div className="deleteButton">
          <Delete
            index={this.state.id}
            submit={this.handleSubmit}
            removeContactInfo={this.removeContactInfo}
          />
        </div>
      </div>
    );
  }
}

export default Contacts;
