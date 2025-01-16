import parsed_played_cards from "../../../types/parsed_played_cards";
import played_card from "../../../types/played_card";
import score_condition from "../../../types/score_condition";
import scorer from "../../../types/scorer";

let scorer_function: scorer = (played_cards: played_card[], parsed_played_cards: parsed_played_cards) => {
    return 0;
}
let straight_and_narrow: score_condition = {
    name: "STRAIGHT AND NARROW",
    description: "1PT/Road section in one straightaway (a continuous stretch of roadway with no turns).",
    points_to_be_reached: 5,
    scorer: scorer_function
}

export { straight_and_narrow };