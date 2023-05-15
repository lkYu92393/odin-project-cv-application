import React, { Component } from 'react';
import CVgenerator from "./feature/CVgenerator/CVgenerator";
import './App.css';

class App extends Component {
  render () {
    return (
      <div id="App">
        <CVgenerator />
      </div>
    );
  }
}

export default App;
