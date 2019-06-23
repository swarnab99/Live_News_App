import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import About from './components/pages/About'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>
    </BrowserRouter>
  );
}

export default App;
