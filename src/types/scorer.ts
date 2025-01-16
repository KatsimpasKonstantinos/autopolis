import played_card from "./played_card";
import parsed_played_cards from "./parsed_played_cards";

type scorer = (played_cards: played_card[], parsed_played_cards: parsed_played_cards) => number;

export default scorer;