import React from 'react';

const userOutput = (props) => {
  return (
    <div className="UserOutput">
      <p>Hello, {props.username}</p>
      <p>Thank u for using React.</p>
    </div>
  );
}

export default userOutput;
