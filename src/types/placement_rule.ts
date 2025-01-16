import played_card from "./played_card";
import parsed_played_cards from "./parsed_played_cards";

type placement_rule = (played_cards: played_card[], parsed_played_cards: parsed_played_cards, played_card: played_card) => boolean;

export default placement_rule;