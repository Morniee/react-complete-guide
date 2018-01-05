import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Person name="Kevin" age="24">My hobbies are programming.</Person>
      </div>
    );
  }
}

export default App;
