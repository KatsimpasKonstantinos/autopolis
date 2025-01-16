import parsed_played_cards from "../../../types/parsed_played_cards";
import played_card from "../../../types/played_card";
import score_condition from "../../../types/score_condition";
import scorer from "../../../types/scorer";

let scorer_function: scorer = (played_cards: played_card[], parsed_played_cards: parsed_played_cards) => {
    return 0;
}
let second_nature: score_condition = {
    name: "SECOND NATURE",
    description: "1PT/Meadow block in your second largest Meadow group (whichmust be smaller than your largest Meadow group). Additional 1PT/Campsite in that group.",
    points_to_be_reached: 7,
    scorer: scorer_function
}

export { second_nature };