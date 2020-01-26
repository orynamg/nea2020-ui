import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Dashboard from './Dashboard';

import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
      {/* <Button variant="primary">Primary</Button> */}
      <Dashboard></Dashboard>
    </div>
  );
}

export default App;
