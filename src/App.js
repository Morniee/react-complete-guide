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
    ],
    showPersons: false
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

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {
          name: event.target.value,
          age: "26"
        }, {
          name: "Niels",
          age: "26"
        }
      ]
    })
  }

  togglePersonsHandler = () => {
      this.setState({
        showPersons: !this.state.showPersons
      })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1> Hi, I'm a React App</h1>
        <p> This is really working</p>
        <button
          onClick={this.togglePersonsHandler}
          style={style}>Switch name</button>
        {
          this.state.showPersons ?
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
              click={this.switchNameHandler.bind(this, "Sam")}
              changed={this.nameChangedHandler}>My hobbies are programming.</Person>
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              //call anonymous function which then returns a function call. Now u can pass data easily.
              //binding is more efficient.
              click={() => { this.switchNameHandler("Jim")}}>My hobbies are football.</Person>
          </div> : null
        }
      </div>
    );
  }
}

export default App;
