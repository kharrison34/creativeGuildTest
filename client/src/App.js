import React from 'react';
import './App.css';
// import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'


import FetchData from './components/FetchData'

function App() {
  return (
    <div className="App">
     <FetchData></FetchData>
    </div>
  );
}

export default App;
