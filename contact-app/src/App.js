import './App.css';
import PhoneForm from "./components/PhoneForm";
import {Component} from "react";
import PhoneInfoList from "./components/PhoneInfoList";

class App extends Component{
  state = {
    information: [],
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

  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate}></PhoneForm>
        <PhoneInfoList data={this.state.information} onRemove={this.handleRemove} onUpdate={this.handleUpdate}/>
      </div>
    );
  }
}

export default App;
