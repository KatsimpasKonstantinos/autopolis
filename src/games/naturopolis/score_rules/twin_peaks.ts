import parsed_played_cards from "../../../types/parsed_played_cards";
import played_card from "../../../types/played_card";
import score_condition from "../../../types/score_condition";
import scorer from "../../../types/scorer";

let scorer_function: scorer = (played_cards: played_card[], parsed_played_cards: parsed_played_cards) => {
    return 0;
}
let twin_peaks: score_condition = {
    name: "TWIN PEAKS",
    description: "2PTS/Mountain group with exactly 2 blocks, where either both block have Campsites or both do not.",
    points_to_be_reached: 10,
    scorer: scorer_function
}

export { twin_peaks };