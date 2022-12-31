import './App.css';
import PhoneForm from "./components/PhoneForm";
import {Component} from "react";
import PhoneInfoList from "./components/PhoneInfoList";

class App extends Component{
  state = {
    information: [
      {
        id: 0,
        name: '홍길동',
        phone: '010-0000-0001'
      },
      {
        id: 1,
        name: '스플린',
        phone: '010-0000-0002'
      },
      {
        id: 2,
        name: '내루미',
        phone: '010-0000-0003'
      }
    ],
    keyword: '',
  }

  handleCreate = (data) => {
    const {information} = this.state;
    this.setState({
      information: information.concat(data)
    })
  }

  handleRemove = (id) => {
    this.setState({
      information: this.state.information.filter(info => info.id !== id)
    });
  }

  handleUpdate = (id, data) => {
    console.log(id, data);
    this.setState({
      information: this.state.information.map(info => {
        if (info.id === id) {
          return {
            id,
            ...data
          }
        } else {
          return info;
        }
      })
    })
  }

  handleChange = (e) => {
    this.setState({
      keyword: e.target.value
    })
}

  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate}></PhoneForm>
        <input onChange={this.handleChange} value={this.state.keyword}/>
        <PhoneInfoList
          data={this.state.information.filter(info => info.name.indexOf(this.state.keyword) > -1)}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;
