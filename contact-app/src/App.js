import './App.css';
import PhoneForm from "./components/PhoneForm";
import {Component} from "react";
import PhoneInfoList from "./components/PhoneInfoList";

class App extends Component{
  state = {
    information: [],
  }

  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat(data)
    })
  }

  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate}></PhoneForm>
        <PhoneInfoList data={this.state.information}/>
      </div>
    );
  }
}

export default App;
