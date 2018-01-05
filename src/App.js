import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {
        name: "Kevin",
        age: "24"
      }, {
        name: "Niels",
        age: "26"
      }
    ]
  }

  switchNameHandler = () => {
    // DON'T DO THIS => this.state.persons[0] = "Sergej"
    //
    // will override the persons in the state.
    this.setState({
      persons: [
        {
          name: "Sergej",
          age: "26"
        }, {
          name: "Niels",
          age: "26"
        }
      ]
    })
  }

  render() {
    return (<div className="App">
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My hobbies are programming.</Person>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies are football.</Person>
      <button onClick={this.switchNameHandler}>Switch name</button>
    </div>);
  }
}

export default App;
