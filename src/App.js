import React, { Component } from 'react';
//
//import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
//import Welcome from './components/Welcome'
import Hello from './components/Hello';
import Welcome from './components/Welcome';
import ProgressBar from './components/ProgressBar';
import StrengthCriteria from './components/StrengthCriteria';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>Hi fhsgxvb</h1>
       <Greet />
       <Welcome />
       <Hello />
       <ProgressBar />
       <StrengthCriteria />
       
      </div>
    );
  }
}
export default App;
