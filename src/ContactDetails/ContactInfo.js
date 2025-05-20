import React from "react";
import {getLocalStorageData,setLocalStorageData} from "../LocalStorage";



class ContactInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      id: 0,
    };
  }
  componentDidMount() {
    this.setState({ contacts:getLocalStorageData(), id: this.props.data },()=>{
      console.log(this.state.contacts)
      console.log(this.state.id)
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.data !== this.props.data) {
      console.log(this.props.data)
      this.setState({ contacts:getLocalStorageData(), id: this.props.data },()=>{
        console.log(this.state.contacts)
      })
  }
}


  render() {
    let contacts=getLocalStorageData()
    console.log(this.props.data)
    return (
      <div>
        <h4>ContactInfo</h4>
        <br></br>
        <div>
          <p>
            <span>Name:&nbsp;&nbsp;</span>
            {contacts[this.props.data]?.name}
          </p>
          <p>
            <span>Email:&nbsp;&nbsp;</span>
            {contacts[this.props.data]?.email}
          </p>
          <p>
            <span>Mobile:&nbsp;&nbsp;</span>
            {contacts[this.props.data]?.mobile}
          </p>
          <p>
            <span>Landline:&nbsp;&nbsp;</span>
            {contacts[this.props.data]?.landline}
          </p>
          <p>
            <span>Website:&nbsp;&nbsp;</span>
            {contacts[this.props.data]?.website}
          </p>
          <p>
            <span>Address:&nbsp;&nbsp;</span>
            {contacts[this.props.data]?.address}
          </p>
        </div>
      </div>
    );
  }
}

export default ContactInfo;
