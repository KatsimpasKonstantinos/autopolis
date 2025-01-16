import parsed_played_cards from "../../../types/parsed_played_cards";
import played_card from "../../../types/played_card";
import score_condition from "../../../types/score_condition";
import scorer from "../../../types/scorer";

let scorer_function: scorer = (played_cards: played_card[], parsed_played_cards: parsed_played_cards) => {
    return 0;
}
let happy_campers: score_condition = {
    name: "HAPPY CAMPERS",
    description: "2PTS/Campsite along 1 River or Road of your choice.",
    points_to_be_reached: 12,
    scorer: scorer_function
}

export { happy_campers };