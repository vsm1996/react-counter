import React, { Component } from "react";
import "./App.css";
import Counter from "./components/Counter";

class App extends Component {
  state = {
    counterList: []
  };

  addHandler = e => {
    e.preventDefault();
    this.setState({
      counterList: this.state.counterList.concat(
        <Counter key={this.state.counterList.length} />
      )
    });
  };

  render() {
    return (
      <div className="App">
        <button className="btn-main" onClick={this.addHandler}>
          {" "}
          Add counter{" "}
        </button>
        {this.state.counterList}
      </div>
    );
  }
}

export default App;
