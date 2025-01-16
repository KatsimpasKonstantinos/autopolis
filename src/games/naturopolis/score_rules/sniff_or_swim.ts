import parsed_played_cards from "../../../types/parsed_played_cards";
import played_card from "../../../types/played_card";
import score_condition from "../../../types/score_condition";
import scorer from "../../../types/scorer";

let scorer_function: scorer = (played_cards: played_card[], parsed_played_cards: parsed_played_cards) => {
    return 0;
}
let sniff_or_swim: score_condition = {
    name: "SNIFF OR SWIM",
    description: "Choose one: 1. 2PTS/block in your largest Meadow group. -2PTS/Lake block adjacent to that group. 2. 2PTS/block in your largest Lake group. -2PTS/Meadow block adjacent to that group.",
    points_to_be_reached: 14,
    scorer: scorer_function
}

export { sniff_or_swim };