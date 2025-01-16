import parsed_played_cards from "../../../types/parsed_played_cards";
import played_card from "../../../types/played_card";
import score_condition from "../../../types/score_condition";
import scorer from "../../../types/scorer";

let scorer_function: scorer = (played_cards: played_card[], parsed_played_cards: parsed_played_cards) => {
    return 0;
}
let dream_streams: score_condition = {
    name: "DREAM STREAMS",
    description: "3PTS/straight River section directly between 2 adjacent Lake blocks but connected to neither of them.",
    points_to_be_reached: 16,
    scorer: scorer_function
}

export { dream_streams };