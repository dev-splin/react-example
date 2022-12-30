import React, {Component} from 'react';

class PhoneInfo extends Component {
  state = {
    editMode: false,
    name: '',
    phone: '',
  }

  handleRemove = () => {
    const { onRemove, info } = this.props;
    onRemove(info.id);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value,
    })
  }

  handleToggleEdit = () => {
    const { edit, name, phone } = this.state;
    const { info } = this.props;

    if (edit) {
      const { onUpdate } = this.props;
      onUpdate(info.id, {name, phone});
    } else {
      this.setState({
        name: info.name,
        phone: info.phone,
      });
    }
    this.setState({
      edit: !edit
    })
  }

  render() {
    const { name, phone, id} = this.props.info;
    const { edit } = this.state;

    return (
      <div>
        <div>{id}</div>
        {
          edit ?
            (
              <>
                <input
                  onChange={this.handleChange}
                  value={this.state.name}
                  name="name"
                />
                <input
                  onChange={this.handleChange}
                  value={this.state.phone}
                  name="phone"
                />
              </>
            )
            :
            (
              <>
                <div>{name}</div>
                <div>{phone}</div>
              </>
            )
        }
        <button onClick={this.handleRemove}>삭제</button>
        <button onClick={this.handleToggleEdit}>{edit ? '적용' : '수정'}</button>
      </div>
    );
  }
}

export default PhoneInfo;