import parsed_played_cards from "../../../types/parsed_played_cards";
import played_card from "../../../types/played_card";
import score_condition from "../../../types/score_condition";
import scorer from "../../../types/scorer";

let scorer_function: scorer = (played_cards: played_card[], parsed_played_cards: parsed_played_cards) => {
    return 0;
}
let waterways_and_means: score_condition = {
    name: "WATERWAYS AND MEANS",
    description: "2PTS/River with a different number of sections than any other River.",
    points_to_be_reached: 8,
    scorer: scorer_function
}

export { waterways_and_means };