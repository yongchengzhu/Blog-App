import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from '../history';
import Landing from './blogs/Landing';

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Route path="/" component={Landing} />
      </Router>
    );
  }
}

export default App;