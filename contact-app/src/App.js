import './App.css';
import PhoneForm from "./components/PhoneForm";
import {Component} from "react";

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
        {JSON.stringify(this.state.information)}
      </div>
    );
  }
}

export default App;
