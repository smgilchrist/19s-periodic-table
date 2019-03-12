import React, { Component } from 'react';
import './App.css';

import PeriodicTable from './components/PeriodicTable/PeriodicTable';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PeriodicTable />
      </div>
    );
  }
}

export default App;
