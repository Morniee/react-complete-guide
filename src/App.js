import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {
        id: "1",
        name: "Kevin",
        age: "24"
      }, {
        id: "2",
        name: "Niels",
        age: "26"
      }
    ],
    showPersons: false
  }

  deletePersonHandler = (index) => {
    const persons = this.state.persons;
    persons.splice(index, 1);
    this.setState({persons: persons});
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
          {this.state.persons.map((person, index) => {
            return <Person
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              key={person.id} />
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
