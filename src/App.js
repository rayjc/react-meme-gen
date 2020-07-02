import React from 'react';
import { useSelector } from "react-redux";
import './App.css';
import MemeForm from './MemeForm';
import Meme from './Meme';
import MemeWrapper from './MemeWrapper';

function App() {
  const memes = useSelector(store => store.memes);

  return (
    <div className="App">
      <header className="App-header">
        <MemeForm />
      </header>
      {memes.map(m =>
        <MemeWrapper key={m.name}>
          <Meme {...m} />
        </MemeWrapper>
      )}
    </div>
  );
}

export default App;
