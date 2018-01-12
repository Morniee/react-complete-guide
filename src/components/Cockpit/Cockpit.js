import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Auxilary';

const cockpit = (props) => {
  const assignedClasses = [];
  let buttonClass = classes.Button;

  if(props.showPerson) {
    buttonClass = [classes.Button, classes.Red];
  }

  if(props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }

  if(props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return(
      <Aux>
        <h1> Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}> This is really working</p>
        <button
          onClick={props.clicked}
          className={buttonClass}>Toggle Persons</button>
      </Aux>

      //React 16.2+
      // <>
      //   <h1> Hi, I'm a React App</h1>
      //   <p className={assignedClasses.join(' ')}> This is really working</p>
      //   <button
      //     onClick={props.clicked}
      //     className={buttonClass}>Toggle Persons</button>
      // </>
  );
}

export default cockpit;
