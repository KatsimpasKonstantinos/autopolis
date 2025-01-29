import React, { useState } from 'react';
import './App.css';
import game from './classes/game';
import naturopolis from './games/naturopolis/naturopolis';
import Game from './pages/Game_Page';
import Landing_Page from './pages/Landing_Page';
import Select_Game_Page from './pages/Select_Game_Page';
import { Route, Routes } from 'react-router-dom';

function App() {

  function render_content() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Landing_Page />} />
          <Route path="/select_game" element={<Select_Game_Page />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </>
    );
  }

  return (
    <div className="App">
      {render_content()}
    </div>
  );
}

export default App;
