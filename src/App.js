import logo from './logo.svg';
import './App.css';
import MainBody from "./components/Main.js"
import NavBar from "./components/Navbar.js"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <MainBody />
      </header>
    </div>
  );
}

export default App;
