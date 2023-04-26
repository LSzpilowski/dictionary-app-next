
import './App.css';
import Dictionary from './Dictionary';

function App() {
  return (
    <div className="App">
      <div className='container'>
      <header className="App-header">
        <a href="/" className="btn btn-primary shadow">Hello</a>
      </header>
      <Dictionary />
      <footer className="App-footer">Coded by Lukasz Szpilowski</footer>
      </div>
    </div>
  );
}

export default App;
