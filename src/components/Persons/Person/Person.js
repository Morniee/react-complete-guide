import React, { Component } from 'react';
import styles from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Auxilary';

class Person extends Component {
  constructor(props) {
    super(props);
    console.log('[Person.js] Inside constructor', props);
  }

  componentWillMount() {
    console.log('[Person.js] Inside componentWillMount');
  }
  componentDidMount() {
    console.log('[Person.js] Inside componentDidMount');
  }

  render() {
    console.log('[Person.js] Inside render');
    return <Aux>
      <p onClick={this.props.clicked}>I'm a {this.props.name} and I'm {this.props.age} years old!</p>
      <p>{this.props.children}</p>
      <input type='text' onChange={this.props.changed} value={this.props.name} />
    </Aux>
  }
}

export default withClass(Person, styles.Person);
