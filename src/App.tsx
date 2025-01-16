import React from 'react';
import './App.css';
import BlockGrid from './components/BlockGrid';
import game from './classes/game';
import naturopolis from './games/naturopolis/naturopolis';

function App() {
  let test_game = new game(naturopolis);

  console.log(test_game);

  return (
    <div className="App">
      <BlockGrid rows={12} cols={16} canvasSize={1} />
    </div>
  );
}

export default App;
