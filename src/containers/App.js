import React, {Component} from 'react';
import styles from './App.css';
import Person from '../components/Persons/Person/Person'

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

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }
  togglePersonsHandler = () => {
      this.setState({
        showPersons: !this.state.showPersons
      })
  }

  render() {
    let persons = null;
    let buttonClass = '';

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              name={person.name}
              age={person.age}
              clicked={() => this.deletePersonHandler(index)}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );

      buttonClass = styles.Red;
    }

    const assignedClasses = [];

    if(this.state.persons.length <= 2) {
      assignedClasses.push(styles.red);
    }

    if(this.state.persons.length <= 1) {
      assignedClasses.push(styles.bold);
    }

    return (
      <div className={styles.App}>
        <h1> Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}> This is really working</p>
        <button
          onClick={this.togglePersonsHandler}
          className={buttonClass}>Toggle Persons</button>

        {persons}
      </div>
    );
  }
}

export default App;
