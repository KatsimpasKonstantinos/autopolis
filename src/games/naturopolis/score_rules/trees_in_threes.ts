import parsed_played_cards from "../../../types/parsed_played_cards";
import played_card from "../../../types/played_card";
import score_condition from "../../../types/score_condition";
import scorer from "../../../types/scorer";

let scorer_function: scorer = (played_cards: played_card[], parsed_played_cards: parsed_played_cards) => {
    return 0;
}
let trees_in_threes: score_condition = {
    name: "TREES IN THREES",
    description: "1PT/Forest group with exactly 3 blocks. -1PT/Forest block that is not in a group of 3.",
    points_to_be_reached: 1,
    scorer: scorer_function
}

export { trees_in_threes };