import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from './components/Homepage';

function App() {
  return (
    <div className="App">
      <Router>
      <Route name="Log In" path="/" component={Homepage} exact />
      </Router>
    </div>
  );
}

export default App;
