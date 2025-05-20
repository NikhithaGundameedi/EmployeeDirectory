import React from "react";
import EditImg from "../Assets/EditIcon.png";
import "../Edit/Edit.css";
import Form from "../Form/Form";
import {getLocalStorageData,setLocalStorageData,updateObject} from "../LocalStorage";


class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: [],
      id: 0,
      employee: {
        name: "",
        email: "",
        mobile: "",
        landline: "",
        website: "",
        address: "",
      },
      isFormComponentVisible: false,
      isComponentVisible: true,
    };
  }

  handleContactsState = () => {
    this.props.submit();
  };

  handleCancel = () => {
    this.setState({ isFormComponentVisible: false });
  };

  handleClick = () => {
    if (getLocalStorageData()) {
      this.setState({ contact: getLocalStorageData(), id: this.props.index }, () => {
        this.getContactInfo();
      });
    }
    this.setState({ isFormComponentVisible: true });
  };

  getContactInfo() {
    const { contact, id } = this.state;
    this.setState(
      {
        employee: {
          name: contact[id]?.name,
          email: contact[id]?.email,
          mobile: contact[id]?.mobile,
          landline: contact[id]?.landline,
          website: contact[id]?.website,
          address: contact[id]?.address,
        },
      }
    );
  }

  updateInfo = (employee) => {
    const { id } = this.state;
   updateObject(employee,id);
   
  };

  render() {
    return (
      <div>
        <img
          className="editImg"
          src={EditImg}
          alt="EditIcon"
          onClick={this.handleClick}
        />
        {this.state.isFormComponentVisible && (
          <Form
            updateObject={this.updateInfo}
            employee={this.state.employee}
            cancel={this.handleCancel}
            contactsState={this.handleContactsState}
          />
        )}
      </div>
    );
  }
}

export default Edit;
