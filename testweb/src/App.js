import React from 'react';
import Header from './components/header'
import Routes from './Routes'

import "./styles.css"
import { Route } from 'react-router-dom';

const App = () => (
  <div className="App">
    <Header />
    <Routes />
  </div>
);

export default App;
