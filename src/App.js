import './App.css';
import Nav from './Components/navigation/nav';
import About from './Components/about/about';
import Projects from './Components/projects/projects';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <About />
        <Projects />
      </header>
    </div>
  );
}

export default App;
