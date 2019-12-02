import React from 'react';
import './MadLibsLogo.png';
import './App.css';
import {Home} from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

export class App extends React.Component {


  render () {
      return<>
         <Router>
            <Switch>
                <Route path="/home" component={Home}/>       
            </Switch>
          </Router>
      </>;
  }
}

export default App;



