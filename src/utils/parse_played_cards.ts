import block from "../types/block";
import parsed_played_cards from "../types/parsed_played_cards";
import played_card from "../types/played_card";
import { FREE_SPACE } from "./shift_played_cards";

function parse_played_cards(played_cards: played_card[]): parsed_played_cards {
    let parsed_played_cards: block[][] = [];

    let max_x = Math.max(...played_cards.map(card => card.coordinates[0]));
    let max_y = Math.max(...played_cards.map(card => card.coordinates[1]));

    for (let x = 0; x <= max_x + FREE_SPACE + 2; x++) {
        parsed_played_cards[x] = [];
        for (let y = 0; y <= max_y + FREE_SPACE + 2; y++) {
            parsed_played_cards[x][y] = null;
        }
    }

    for (let i = 0; i < played_cards.length; i++) {
        const [x, y] = played_cards[i].coordinates;

        if (played_cards[i].rotated) {
            parsed_played_cards[x][y] = played_cards[i].card.blocks[3];
            parsed_played_cards[x + 1][y] = played_cards[i].card.blocks[2];
            parsed_played_cards[x][y + 1] = played_cards[i].card.blocks[1];
            parsed_played_cards[x + 1][y + 1] = played_cards[i].card.blocks[0];
        } else {
            parsed_played_cards[x][y] = played_cards[i].card.blocks[0];
            parsed_played_cards[x + 1][y] = played_cards[i].card.blocks[1];
            parsed_played_cards[x][y + 1] = played_cards[i].card.blocks[2];
            parsed_played_cards[x + 1][y + 1] = played_cards[i].card.blocks[3];
        }


    }

    return parsed_played_cards;
}

export default parse_played_cards;
