import parsed_played_cards from "../../../types/parsed_played_cards";
import played_card from "../../../types/played_card";
import score_condition from "../../../types/score_condition";
import scorer from "../../../types/scorer";

let scorer_function: scorer = (played_cards: played_card[], parsed_played_cards: parsed_played_cards) => {
    return 0;
}
let natural_selection: score_condition = {
    name: "NATURAL SELECTION",
    description: "Score points based on the number of blocks in the longest row or column with 0 Roads.",
    points_to_be_reached: 4,
    scorer: scorer_function
}

export { natural_selection };