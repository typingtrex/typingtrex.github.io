import logo from './logo.svg';
import './App.css';
import AboutMe from './components/AboutMe';
import { Home } from './components/Home';
// alert("it's working!!!");
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Hello</h3>
        <p id="personal-description">Nice to meet you</p>
      </header>
      <Home />
    </div>
  );
}

export default App;
