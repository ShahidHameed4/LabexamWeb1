import logo from './logo.svg';

import Signup from './pages/signup.jsx';
import Login from './pages/login.jsx';
import Quiz from './pages/Quiz.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>


      </header>
    <Signup />
    <Login />
    <Quiz />
    </div>
  );
}

export default App;
