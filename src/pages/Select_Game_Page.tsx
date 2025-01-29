import React from 'react';
import naturopolis from '../games/naturopolis/naturopolis';
import { Link } from 'react-router-dom';
import './Select_Game_Page.css';
import game_pack from '../types/game_pack';
import all_game_packs from '../games/game_packs';

function Select_Game_Page() {

    function render_game_packs() {
        return all_game_packs.map((game_pack) => {
            return (
                <div className='Select_Game_Page__Game_Pack' key={game_pack.name}>
                    <h2>{game_pack.name}</h2>
                    <Link to="/game" onClick={() => handle_game_pack_click(game_pack)}>Play</Link>
                </div>
            );
        });
    }

    function handle_game_pack_click(game_pack: game_pack) {
        localStorage.setItem('selected_game_name', game_pack.name);
    }


    return (
        <div>
            <h1>Select Game Page</h1>
            {render_game_packs()}
        </div>
    );
}

export default Select_Game_Page;