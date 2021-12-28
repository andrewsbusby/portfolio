import './App.css';
import Nav from './Components/navigation/nav';
import About from './Components/about/about';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <About />
      </header>
    </div>
  );
}

export default App;
