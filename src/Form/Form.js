import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Form.css";
import {getLocalStorageData,setLocalStorageData} from "../LocalStorage";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: {
        name: "",
        email: "",
        mobile: "",
        landline: "",
        website: "",
        address: "",
      },
      isComponentVisible: false,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.employee.name !== this.props.employee.name) {
      this.setState({
        employee: {
          name: this.props.employee.name,
          email: this.props.employee.email,
          mobile: this.props.employee.mobile,
          landline: this.props.employee.landline,
          website: this.props.employee.website,
          address: this.props.employee.address,
        },
      });
    }
  }

  handleChange = (e) => {
    const { id, value } = e.target;
    this.setState((prevState) => ({
      employee: {
        ...prevState.employee,
        [id]: value,
      },
    }));
  };

  handleSubmit = (e) => {
    const { employee } = this.state;
    e.preventDefault();
    if (this.props.employee.name !== "") {
      this.props.updateObject(employee);
      this.props.contactsState();
    } else {
      let array = [];
      if (getLocalStorageData()) { 
        
        let contactsList = getLocalStorageData();
        if (!Array.isArray(contactsList)) {
          contactsList = []; 
        }
        contactsList.push(employee)
        setLocalStorageData(contactsList)
      } else {
        setLocalStorageData( array.push(employee));
      }
      this.props.contactsState();
    }
  };

  handleCancel = (e) => {
    e.preventDefault();
    this.props.cancel();
  };

  render() {
    return (
      <div className="form-container ">
        <form className="container shadow p-3 mb-5 bg-body-tertiary">
          <div className="form-group ">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={this.state.employee.name}
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={this.state.employee.email}
              onChange={this.handleChange}
            ></input>
          </div>

          <div className="form-group col-md-12">
            <label>Mobile</label>
            <input
              type="tel"
              className="form-control"
              id="mobile"
              value={this.state.employee.mobile}
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="form-group col-md-12">
            <label>Landline</label>
            <input
              type="number"
              className="form-control"
              id="landline"
              value={this.state.employee.landline}
              onChange={this.handleChange}
            ></input>
          </div>

          <div className="form-group">
            <label>Website</label>
            <input
              type="text"
              className="form-control"
              id="website"
              value={this.state.employee.website}
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              value={this.state.employee.address}
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="buttons">
            <div className="button">
              <button
                type="submit"
                className="btn btn-success"
                onClick={this.handleSubmit}
              >
                Submit
              </button>
            </div>

            <div className="button">
              <button
                type="submit"
                className="btn btn-success"
                onClick={this.handleCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
