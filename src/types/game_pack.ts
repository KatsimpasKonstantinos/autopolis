import card from "./card";
import placement_rule from "./placement_rule";
import terrain from "./terrain";

type game_pack = {
    name: string;
    terrain: terrain[];
    cards: card[];
    placement_rules: placement_rule[];
};

export default game_pack;
