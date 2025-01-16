import parsed_played_cards from "../../../types/parsed_played_cards";
import played_card from "../../../types/played_card";
import score_condition from "../../../types/score_condition";
import scorer from "../../../types/scorer";

let scorer_function: scorer = (played_cards: played_card[], parsed_played_cards: parsed_played_cards) => {
    return 0;
}
let lake_mistakes: score_condition = {
    name: "LAKE MISTAKES",
    description: "1PT/Lake group connected to at least 1 Road or River. -2PTS/Lake group with no connections to Roads or Rivers.",
    points_to_be_reached: 2,
    scorer: scorer_function
}

export { lake_mistakes };