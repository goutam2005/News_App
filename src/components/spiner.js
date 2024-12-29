import React, { Component } from 'react';
const Spinner = () => {
  
    return (
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
        <img style={{ width: '75px', height: '50px' }} src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"  alt="Loading spinner" />
      </div>
    );
  
}

export default Spinner


