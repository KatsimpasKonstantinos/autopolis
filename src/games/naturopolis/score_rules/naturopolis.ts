import parsed_played_cards from "../../../types/parsed_played_cards";
import played_card from "../../../types/played_card";
import score_condition from "../../../types/score_condition";
import scorer from "../../../types/scorer";

let scorer_function: scorer = (played_cards: played_card[], parsed_played_cards: parsed_played_cards) => {
    return 0;
}
let naturopolis: score_condition = {
    name: "NATUROPOLIS",
    description: "Count all of the Campsites in the longest row and in the longest column, Score twice that many points.",
    points_to_be_reached: 18,
    scorer: scorer_function
}

export { naturopolis };