import './App.css';
import logo from './logo.png';
import Dictionary from './Dictionary';

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img 
        src={logo} 
        className="App-logo img-fluid" 
        alt="logo" />
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className='text-center'>
        <small>Coded by Alina Nguyen</small>

        </footer>
      </div>
    </div>
  );
}

export default App;
