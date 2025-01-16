import parsed_played_cards from "../../../types/parsed_played_cards";
import played_card from "../../../types/played_card";
import score_condition from "../../../types/score_condition";
import scorer from "../../../types/scorer";

let scorer_function: scorer = (played_cards: played_card[], parsed_played_cards: parsed_played_cards) => {
    return 0;
}
let drivin_daisies: score_condition = {
    name: "DRIVIN' DAISIES",
    description: "2PTS/Meadow block on your longest Road. -1PT/Meadow block not on that Road.",
    points_to_be_reached: 6,
    scorer: scorer_function
}

export { drivin_daisies };