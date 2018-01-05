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

  switchNameHandler = (newName) => {
    // DON'T DO THIS => this.state.persons[0] = "Sergej"
    //
    // will override the persons in the state.
    this.setState({
      persons: [
        {
          name: newName,
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
      <Person
        name={this.state.persons[0].name}
        age={this.state.persons[0].age}
        click={this.switchNameHandler.bind(this, "Sam")}>My hobbies are programming.</Person>
      <Person
        name={this.state.persons[1].name}
        age={this.state.persons[1].age}
        //call anonymous function which then returns a function call. Now u can pass data easily.
        //binding is more efficient.
        click={() => { this.switchNameHandler("Jim")}}>My hobbies are football.</Person>
      <button onClick={this.switchNameHandler.bind(this, "Sergej")}>Switch name</button>
    </div>);
  }
}

export default App;
