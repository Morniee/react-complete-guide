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

    let persons = null;
    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person
              name={person.name}
              age={person.age} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1> Hi, I'm a React App</h1>
        <p> This is really working</p>
        <button
          onClick={this.togglePersonsHandler}
          style={style}>Toggle Persons</button>

        {persons}
      </div>
    );
  }
}

export default App;
