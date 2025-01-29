import React, { useEffect, useState } from 'react';
import all_game_packs from '../games/game_packs';
import game from '../classes/game';
import Game_Grid from '../components/Game_Grid';
import './Game_Page.css';

function Game() {
    const [game_instance, set_game_instance] = useState<game | null>(null);
    const [card_played, set_card_played] = useState<boolean>(false);


    useEffect(() => {
        const selected_game_name = localStorage.getItem('selected_game_name');
        if (selected_game_name) {
            create_game_instance(selected_game_name);
            return;
        }

        const saved_game_string = localStorage.getItem('game_instance');
        if (saved_game_string) {
            recover_game_instance(saved_game_string);
        }
    }, []);

    useEffect(() => {
        if (game_instance) {
            game_instance.save_game();
        }
    }, [game_instance, card_played]);


    function create_game_instance(selected_game_name: string) {
        const selected_game_pack = all_game_packs.find((game_pack) => game_pack.name === selected_game_name);
        if (selected_game_pack) {
            set_game_instance(new game(selected_game_pack));
            localStorage.removeItem('selected_game_name');
        }
    }

    function recover_game_instance(saved_game_string: string) {
        console.log("Trying to recover game");
        const saved_game = JSON.parse(saved_game_string) as game;
        const game_pack = all_game_packs.find((game_pack) => game_pack.name === saved_game.game_pack.name);
        if (!game_pack) {
            return;
        }
        let recoverable_game = new game(game_pack);
        if (!recoverable_game.is_game_recoverable(saved_game_string)) {
            console.log("Game not recoverable");
            return;
        }
        console.log("Game recovered");
        recoverable_game.recover_game(saved_game_string);
        set_game_instance(recoverable_game);
    }

    function render_game_selected() {
        return (
            <div className='Game_Page__Game_Selected'>
                <h2>Game selected</h2>
                <div className='Game_Page__Game_Grid'>
                    <Game_Grid game_instance={game_instance} set_card_played={set_card_played} />
                </div>
            </div>
        )
    }

    function render_no_game_selected() {
        return (
            <div>
                <h2>No game selected</h2>
            </div>
        );
    }


    return (
        <div className="Game_Page">
            <h1>Game</h1>
            {game_instance ? render_game_selected() : render_no_game_selected()}
        </div>
    );
}

export default Game;