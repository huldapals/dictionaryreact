import shecodelogo from "./shecodelogo.png";
import Dictionary from "./Dictionary";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={shecodelogo} className="App-logo img-fluid" alt="logo"/>
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer"><small>This project was coded by Hulda Palsdottir and is open-sourced on <a href="https://github.com/huldapals/dictionaryreact" target="_blank" rel="noreferrer">Github</a></small></footer>
     </div>
    </div>
  );
}



