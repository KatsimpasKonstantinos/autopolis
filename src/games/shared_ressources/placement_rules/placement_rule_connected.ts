import parsed_played_cards from "../../../types/parsed_played_cards";
import placement_rule from "../../../types/placement_rule";
import played_card from "../../../types/played_card";

let placement_rule_connected: placement_rule = (
    played_cards: played_card[],
    parsed_played_cards: parsed_played_cards,
    played_card: played_card
) => {
    let [x1, y1] = played_card.coordinates;

    // check if a card is placed in the 4x4 square around
    for (let x2 = x1 - 1; x2 <= x1 + 2; x2++) {
        for (let y2 = y1 - 1; y2 <= y1 + 2; y2++) {
            // skip out-of-bounds cells
            if (x2 < 0 || y2 < 0 || x2 >= parsed_played_cards.length || y2 >= parsed_played_cards[x2]?.length) {
                continue;
            }
            // exclude the four corners of the 4x4 square
            if (
                (x1 - x2 === 1 && y1 - y2 === 1) || // top-left corner
                (x1 - x2 === -2 && y1 - y2 === 1) || // top-right corner
                (x1 - x2 === 1 && y1 - y2 === -2) || // bottom-left corner
                (x1 - x2 === -2 && y1 - y2 === -2)    // bottom-right corner
            ) {
                continue;
            }

            // check if a card exists in this position
            if (parsed_played_cards[x2][y2]) {
                return true;
            }
        }
    }
    return false;
};

export default placement_rule_connected;
