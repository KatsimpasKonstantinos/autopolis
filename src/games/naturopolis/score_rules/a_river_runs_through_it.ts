import parsed_played_cards from "../../../types/parsed_played_cards";
import played_card from "../../../types/played_card";
import score_condition from "../../../types/score_condition";
import scorer from "../../../types/scorer";

let scorer_function: scorer = (played_cards: played_card[], parsed_played_cards: parsed_played_cards) => {
    return 0;
}
let a_river_runs_through_it: score_condition = {
    name: "A RIVER RUNS THROUGH IT",
    description: "1PT/River that connects only to map edges. -1PT/River that connects to a block.",
    points_to_be_reached: 3,
    scorer: scorer_function
}

export { a_river_runs_through_it };