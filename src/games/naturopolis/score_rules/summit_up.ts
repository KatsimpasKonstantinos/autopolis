import parsed_played_cards from "../../../types/parsed_played_cards";
import played_card from "../../../types/played_card";
import score_condition from "../../../types/score_condition";
import scorer from "../../../types/scorer";

let scorer_function: scorer = (played_cards: played_card[], parsed_played_cards: parsed_played_cards) => {
    return 0;
}
let summit_up: score_condition = {
    name: "SUMMIT UP",
    description: "2PTS/Mountain group with 2 or more blocks. Additional 2PTS if taht group is in a different shape or orientation than any other Mountaing group.",
    points_to_be_reached: 17,
    scorer: scorer_function
}

export { summit_up };