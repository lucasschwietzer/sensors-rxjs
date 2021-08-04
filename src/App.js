import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <div className="content">
            <h2>Network Platform Technologies Ltd</h2>
            <Home />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
