import Dictionary from "./Dictionary";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary defaultKeyword="flowers" />
        </main>
        <footer className="App-footer"><small>This project was coded by Hulda Palsdottir and is open-sourced on <a href="https://github.com/huldapals/dictionaryreact" target="_blank" rel="noreferrer">Github</a></small></footer>
     </div>
    </div>
  );
}



