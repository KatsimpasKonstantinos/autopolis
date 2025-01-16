import parsed_played_cards from "../../../types/parsed_played_cards";
import played_card from "../../../types/played_card";
import score_condition from "../../../types/score_condition";
import scorer from "../../../types/scorer";

let scorer_function: scorer = (played_cards: played_card[], parsed_played_cards: parsed_played_cards) => {
    return 0;
}
let impressive_range: score_condition = {
    name: "IMPRESSIVE RANGE",
    description: "2PTS/Mountain block along any 1 diagonal of your choice. Additional 1PT/Mountain Campsite on that diagonal.",
    points_to_be_reached: 15,
    scorer: scorer_function
}

export { impressive_range };