import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from './components/Homepage';
import Loginform from './components/loginform';
import Signupform from './components/signup';

function App() {
  return (
    <div className="App">
      <Router>
      <Route name="home" path="/" component={Homepage} exact />
      <Route name="login" path="/login" component={Loginform} exact />
      <Route name="signup" path="/signup" component={Signupform} exact />
      </Router>
    </div>
  );
}

export default App;
