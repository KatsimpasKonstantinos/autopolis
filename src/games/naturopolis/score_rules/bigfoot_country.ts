import parsed_played_cards from "../../../types/parsed_played_cards";
import played_card from "../../../types/played_card";
import score_condition from "../../../types/score_condition";
import scorer from "../../../types/scorer";

let scorer_function: scorer = (played_cards: played_card[], parsed_played_cards: parsed_played_cards) => {
    return 0;
}
let bigfoot_country: score_condition = {
    name: "BIGFOOT COUNTRY",
    description: "2PTS/Forest block taht does not have a Campsite and is not on a map edge.",
    points_to_be_reached: 13,
    scorer: scorer_function
}

export { bigfoot_country };