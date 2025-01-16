import parsed_played_cards from "../../../types/parsed_played_cards";
import placement_rule from "../../../types/placement_rule";
import played_card from "../../../types/played_card";

let placement_rule_connected: placement_rule = (played_cards: played_card[], parsed_played_cards: parsed_played_cards, played_card: played_card) => {
    let [x1, y1] = played_card.coordinates;
    for (let x2 = 0; x2 < parsed_played_cards.length; x2++) {
        for (let y2 = 0; y2 < parsed_played_cards[x2].length; y2++) {
            if (Math.abs(x1 - x2) <= 2 && Math.abs(y1 - y2) <= 2) { // select 5x5 square
                if (!(Math.abs(x1 - x2) === 2 && Math.abs(y1 - y2) === 2)) { // exclude corners
                    return true;
                }
            }
        }
    }
    return false;
}

export default placement_rule_connected;