import parsed_played_cards from "../../../types/parsed_played_cards";
import played_card from "../../../types/played_card";
import score_condition from "../../../types/score_condition";
import scorer from "../../../types/scorer";

let scorer_function: scorer = (played_cards: played_card[], parsed_played_cards: parsed_played_cards) => {
    return 0;
}
let run_forest_run: score_condition = {
    name: "RUN FOREST RUN",
    description: "1PT/River section in 1 River that begins and end within Forest blocks (it may pass through other Forest blocks).",
    points_to_be_reached: 11,
    scorer: scorer_function
}

export { run_forest_run };