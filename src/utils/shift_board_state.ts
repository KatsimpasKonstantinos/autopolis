import played_card from "../types/played_card";

const FREE_SPACE = 3;

function shift_board_state(played_cards: played_card[]): played_card[] {
    let min_x = FREE_SPACE;
    let min_y = FREE_SPACE;

    let smallest_x = Math.min(...played_cards.map(card => card.coordinates[0]));
    let smallest_y = Math.min(...played_cards.map(card => card.coordinates[1]));

    let diff_x = min_x - smallest_x;
    let diff_y = min_y - smallest_y;

    //shift every position
    for (let i = 0; i < played_cards.length; i++) {
        played_cards[i].coordinates[0] += diff_x;
        played_cards[i].coordinates[1] += diff_y;
    }

    return played_cards;
}

export default shift_board_state;
