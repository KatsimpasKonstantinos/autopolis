import parsed_played_cards from "../../../types/parsed_played_cards";
import played_card from "../../../types/played_card";
import score_condition from "../../../types/score_condition";
import scorer from "../../../types/scorer";

let scorer_function: scorer = (played_cards: played_card[], parsed_played_cards: parsed_played_cards) => {
    return 0;
}
let patchwork_park: score_condition = {
    name: "PATCHWORK PARK",
    description: "1PT/Campsite adjacent to another Campsite on a different block type.",
    points_to_be_reached: 9,
    scorer: scorer_function
}

export { patchwork_park };