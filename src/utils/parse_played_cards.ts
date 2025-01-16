import block from "../types/block";
import parsed_played_cards from "../types/parsed_played_cards";
import played_card from "../types/played_card";


function parse_played_cards(played_cards: played_card[]): parsed_played_cards {
    let parsed_played_cards: block[][] = [];
    for (let i = 0; i < played_cards.length; i++) {
        const [x, y] = played_cards[i].coordinates;
        parsed_played_cards[x][y] = played_cards[i].card.blocks[0];
        parsed_played_cards[x + 1][y] = played_cards[i].card.blocks[1];
        parsed_played_cards[x][y + 1] = played_cards[i].card.blocks[2];
        parsed_played_cards[x + 1][y + 1] = played_cards[i].card.blocks[3];
    }
    return parsed_played_cards;
}

export default parse_played_cards;