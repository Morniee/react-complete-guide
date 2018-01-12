import React, {Component} from 'react';
import styles from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

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

    if(this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />
        </div>
      );
    }

    return (
      <div className={styles.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />
        {persons}
      </div>
    );
  }
}

export default App;
