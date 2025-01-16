import game_pack from "../../types/game_pack";
import placement_rule_connected from "../shared_ressources/placement_rules/placement_rule_connected";
import placement_rule_not_on_top from "../shared_ressources/placement_rules/placement_rule_not_on_top";
import cards from "./cards";
import placement_rule_roads_and_rivers from "../shared_ressources/placement_rules/placement_rule_roads_and_rivers";

let naturopolis: game_pack = {
    name: "Naturopolis",
    terrain: [
        "forest",
        "lake",
        "meadow",
        "mountain"
    ],
    cards: cards,
    placement_rules: [placement_rule_roads_and_rivers, placement_rule_connected, placement_rule_not_on_top]
};

export default naturopolis;