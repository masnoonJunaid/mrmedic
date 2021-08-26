import React from 'react';
import  {Route,Switch} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Home from './components/Home'

class App extends React.Component {
  render(){
    return (
      <div className="App">
      <div className="Navbar">
        <Navbar/>
      </div>
      <div className="home">
        <div className="side-style">
          <Sidebar />
        </div>
        <div className="home-style">
          <Switch>
            <Route path="/" component={Home}/>
          </Switch>
        </div>
      </div>
      </div>
    );

  }
}

export default App;
