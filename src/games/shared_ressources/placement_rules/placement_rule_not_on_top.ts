import parsed_played_cards from "../../../types/parsed_played_cards";
import placement_rule from "../../../types/placement_rule";
import played_card from "../../../types/played_card";

let placement_rule_not_on_top: placement_rule = (played_cards: played_card[], parsed_played_cards: parsed_played_cards, played_card: played_card) => {
    const [x, y] = played_card.coordinates;
    for (let i = 0; i < played_cards.length; i++) {
        const [existing_x, existing_y] = played_cards[i].coordinates;
        if (existing_x === x && existing_y === y) { // check if card is placed at same location
            let new_card_placed = false;
            for (let j = i; j < played_cards.length; j++) {
                const [new_x, new_y] = played_cards[j].coordinates;
                if ((Math.abs(new_x - x) <= 1 && Math.abs(new_y - y) <= 1)) new_card_placed = true; // check if another card is placed on top
            }
            if (!new_card_placed) return false;
        }
    }
    return true;
}

export default placement_rule_not_on_top;