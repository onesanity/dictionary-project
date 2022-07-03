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
        <Dictionary defaultKeyword="stillness" />
      </main>
      <footer className='text-center'>
        <small>This project was coded by {" "}
          Alina Nguyen and is{" "}
        <a 
          href="https://github.com/onesanity/dictionary-project" 
          target="_blank"
          rel="noopener noreferrer">
          open sourced on Git Hub</a> and {" "}
          <a 
          href="https://illustrious-heliotrope-51d49f.netlify.app/" 
          target="_blank"
          rel="noopener noreferrer">
          hosted on Netlify</a>.
</small>

        </footer>
      </div>
    </div>
  );
}

export default App;
