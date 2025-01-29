
import React, { useEffect } from 'react';
import game from '../classes/game';
import './Game_Grid.css';
import default_background from './default_background.png';
import block from '../types/block';
import { FREE_SPACE } from '../utils/shift_played_cards';

function Game_Grid({ game_instance, set_card_played }: { game_instance: game, set_card_played: React.Dispatch<React.SetStateAction<boolean>> }) {
    const [mouse_over, set_mouse_over] = React.useState<number[]>([]);
    const [is_hover_rotated, set_hover_rotated] = React.useState<boolean>(false);

    useEffect(() => {
        console.log("rerendered");
    }, [mouse_over, is_hover_rotated]);

    useEffect(() => {
        function handle_keydown(event: KeyboardEvent) {
            if (event.key === 'r' || event.key === 'R') {
                set_hover_rotated((prev: boolean) => !prev);
            }
        }

        function handle_wheel(event: WheelEvent) {
            set_hover_rotated((prev: boolean) => !prev);
        }

        window.addEventListener('keydown', handle_keydown);
        window.addEventListener('wheel', handle_wheel);
        return () => {
            window.removeEventListener('keydown', handle_keydown);
            window.removeEventListener('wheel', handle_wheel);
        };
    }, []);

    const game_grid = game_instance.parse_played_cards();
    let max_x = Math.max(...game_instance.played_cards.map(card => card.coordinates[0]));
    let max_y = Math.max(...game_instance.played_cards.map(card => card.coordinates[1]));
    if (max_x < 0) max_x = 0;
    if (max_y < 0) max_y = 0;
    let columns_amount = max_x + FREE_SPACE + 2;
    let rows_amount = max_y + FREE_SPACE + 2;


    function render_grid() {
        let out = [];
        for (let y = 0; y < rows_amount; y++) {
            out.push(render_row(y));
        }
        document.documentElement.style.setProperty('--grid-row-count', rows_amount.toString());
        document.documentElement.style.setProperty('--grid-column-count', columns_amount.toString());
        return out;
    }

    function render_row(y: number) {
        let out = [];
        for (let x = 0; x < columns_amount; x++) {
            out.push(render_correct_background(x, y));
        }
        return out;
    }
    function render_correct_background(x: number, y: number) {
        const hoverBlocks = is_hover_rotated
            ? [3, 2, 1, 0]
            : [0, 1, 2, 3];

        const hoverConditions = [
            { condition: mouse_over[0] === x && mouse_over[1] === y, blockIndex: hoverBlocks[0] },
            { condition: mouse_over[0] === x - 1 && mouse_over[1] === y, blockIndex: hoverBlocks[1] },
            { condition: mouse_over[0] === x && mouse_over[1] === y - 1, blockIndex: hoverBlocks[2] },
            { condition: mouse_over[0] === x - 1 && mouse_over[1] === y - 1, blockIndex: hoverBlocks[3] },
        ];

        for (const { condition, blockIndex } of hoverConditions) {
            if (condition) {
                return render_hover_block(x, y, blockIndex);
            }
        }

        if (!game_grid[x] || !game_grid[x][y]) {
            return render_default_background(x, y);
        }
        return render_block(x, y);
    }

    function render_hover_block(x: number, y: number, i: number) {
        return render_image(x, y, game_instance.game_pack.media[game_instance.remaining_cards[0].blocks[i].terrain]);
    }

    function render_default_background(x: number, y: number) {
        return render_image(x, y, default_background);
    }

    function render_block(x: number, y: number) {
        return render_image(x, y, game_instance.game_pack.media[game_grid[x][y].terrain]);
    }

    function render_image(x: number, y: number, src: string) {
        return (
            <img
                src={src}
                alt={`card at ${x}, ${y}`}
                className="grid-item"
                style={{
                    gridColumnStart: x + 1,
                    gridRowStart: y + 1,
                }}
                onClick={() => handle_click(x, y)}
                onMouseEnter={() => handle_hover(x, y)}
            />
        );
    }

    function handle_click(x: number, y: number) {
        console.log("clicked " + x + " " + + y);
        game_instance.play_card({ card: game_instance.remaining_cards[0], coordinates: [x, y], rotated: is_hover_rotated });
        set_card_played((prev: boolean) => !prev);  // This should work
    }

    function handle_hover(x: number, y: number) {
        console.log("hovered " + x + " " + y);
        set_mouse_over([x, y]);
    }

    function handle_exit_hover() {
        set_mouse_over([]);
    }



    return (
        <div className="grid" onMouseLeave={handle_exit_hover}>
            {render_grid()}
        </div>
    );
}

export default Game_Grid;