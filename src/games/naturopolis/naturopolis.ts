import game_pack from "../../types/game_pack";
import placement_rule_connected from "../shared_ressources/placement_rules/placement_rule_connected";
import cards from "./cards";
import placement_rule_roads_and_rivers from "../shared_ressources/placement_rules/placement_rule_roads_and_rivers";
import terrain_to_image_map from "./media";

let naturopolis: game_pack = {
    name: "Naturopolis",
    terrain: [
        "forest",
        "lake",
        "meadow",
        "mountain"
    ],
    media: terrain_to_image_map,
    cards: cards,
    placement_rules: [placement_rule_roads_and_rivers, placement_rule_connected]
};

export default naturopolis;