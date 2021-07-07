import shecodelogo from "./shecodelogo.png";
import Dictionary from "./Dictionary";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>DICTIONARY</h1>
          <img src={shecodelogo} className="App-logo img-fluid" alt="logo"/>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer"><small><a href="https://github.com/huldapals/dictionaryreact" target="_blank" rel="noreferrer">Coded</a> by Hulda Palsdottir</small></footer>
     </div>
    </div>
  );
}

