import React from "react";
import DeleteImg from "../Assets/DeleteIcon.png";
import "./Delete.css";
import {getLocalStorageData,setLocalStorageData,deleteObject} from "../LocalStorage";

class Delete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      contacts: [],
    };
  }

  handleClick = () => {
    this.setState({ index: this.props.index }, () => {
      const { index } = this.state;
      if (getLocalStorageData()) {
        this.setState({ contacts: getLocalStorageData()}, () => {
          const{contacts}=this.state;
          let email = contacts[index].email;
          let contactList=deleteObject(email);
          setLocalStorageData(contactList);
          this.props.submit();
          this.props.removeContactInfo();
        });
      }
    });
  };

  render() {
    return (
      <div>
        <img
          className="deleteImg"
          src={DeleteImg}
          alt="DeleteIcon"
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

export default Delete;
