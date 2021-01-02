import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import 'bootstrap/dist/css/bootstrap.min.css'; // ICLUDES BOOTSTRAP
import './App.css';

// function App() {
//   return (
    
//   );
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
      </div>
    )
  }
}

export default App;
