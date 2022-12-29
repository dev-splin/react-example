import React, {Component} from 'react';

class PhoneInfo extends Component {
  render() {
    const { name, phone, id} = this.props.info;

    return (
      <div>
        <div>{id}</div>
        <div>{name}</div>
        <div>{phone}</div>
      </div>
    );
  }
}

export default PhoneInfo;