import card from "../../types/card";
import { a_river_runs_through_it } from "./score_rules/a_river_runs_through_it";
import { bigfoot_country } from "./score_rules/bigfoot_country";
import { dream_streams } from "./score_rules/dream_streams";
import { drivin_daisies } from "./score_rules/drivin_daisies";
import { happy_campers } from "./score_rules/happy_campers";
import { impressive_range } from "./score_rules/impressive_range";
import { lake_mistakes } from "./score_rules/lake_mistakes";
import { natural_selection } from "./score_rules/natural_selection";
import { naturopolis } from "./score_rules/naturopolis";
import { patchwork_park } from "./score_rules/patchwork_park";
import { run_forest_run } from "./score_rules/run_forest_run";
import { second_nature } from "./score_rules/second_nature";
import { sniff_or_swim } from "./score_rules/sniff_or_swim";
import { straight_and_narrow } from "./score_rules/straight_and_narrow";
import { summit_up } from "./score_rules/summit_up";
import { trees_in_threes } from "./score_rules/trees_in_threes";
import { twin_peaks } from "./score_rules/twin_peaks";
import { waterways_and_means } from "./score_rules/waterways_and_means";

let cards: card[] = [
    {
        blocks: [
            {
                terrain: "forest",
                extra_objects: [{ type: "river", orientations: ["N", "S",] }, { type: "campsite" }],
            },
            {
                terrain: "meadow",
                extra_objects: [{ type: "street", orientations: ["N", "E",] }],
            },
            {
                terrain: "mountain",
                extra_objects: [{ type: "river", orientations: ["N", "S",] }],
            },
            {
                terrain: "lake",
                extra_objects: [],
            }
        ],
        score_condition: trees_in_threes
    }, {
        blocks: [
            {
                terrain: "forest",
                extra_objects: [{ type: "street", orientations: ["N", "S",] }],
            },
            {
                terrain: "lake",
                extra_objects: [],
            },
            {
                terrain: "meadow",
                extra_objects: [{ type: "street", orientations: ["N", "E",] }, { type: "campsite" }],
            },
            {
                terrain: "mountain",
                extra_objects: [{ type: "street", orientations: ["W", "E",] }],
            }
        ],
        score_condition: lake_mistakes
    }, {
        blocks: [
            {
                terrain: "lake",
                extra_objects: [],
            },
            {
                terrain: "meadow",
                extra_objects: [{ type: "street", orientations: ["N", "S",] }],
            },
            {
                terrain: "forest",
                extra_objects: [{ type: "street", orientations: ["W", "E",] }],
            },
            {
                terrain: "mountain",
                extra_objects: [{ type: "street", orientations: ["N", "W",] }, { type: "campsite" }],
            }
        ],
        score_condition: a_river_runs_through_it
    }, {
        blocks: [
            {
                terrain: "mountain",
                extra_objects: [{ type: "river", orientations: ["N", "S",] }],
            },
            {
                terrain: "lake",
                extra_objects: [],
            },
            {
                terrain: "forest",
                extra_objects: [{ type: "river", orientations: ["N", "E",] }, { type: "campsite" }],
            },
            {
                terrain: "meadow",
                extra_objects: [{ type: "river", orientations: ["W", "E",] }],
            }
        ],
        score_condition: natural_selection
    }, {
        blocks: [
            {
                terrain: "mountain",
                extra_objects: [{ type: "street", orientations: ["N", "W",] }, { type: "campsite" }],
            },
            {
                terrain: "meadow",
                extra_objects: [{ type: "river", orientations: ["N", "S",] }],
            },
            {
                terrain: "lake",
                extra_objects: [],
            },
            {
                terrain: "forest",
                extra_objects: [{ type: "river", orientations: ["N", "S",] }],
            }
        ],
        score_condition: straight_and_narrow
    }, {
        blocks: [
            {
                terrain: "meadow",
                extra_objects: [{ type: "river", orientations: ["N", "S",] }, { type: "campsite" }],
            },
            {
                terrain: "lake",
                extra_objects: [],
            },
            {
                terrain: "mountain",
                extra_objects: [{ type: "river", orientations: ["N", "S",] }],
            },
            {
                terrain: "forest",
                extra_objects: [{ type: "street", orientations: ["S", "E",] }],
            }
        ],
        score_condition: drivin_daisies
    }, {
        blocks: [
            {
                terrain: "lake",
                extra_objects: [],
            },
            {
                terrain: "mountain",
                extra_objects: [{ type: "street", orientations: ["N", "S",] }],
            },
            {
                terrain: "meadow",
                extra_objects: [{ type: "street", orientations: ["W", "E",] }],
            },
            {
                terrain: "forest",
                extra_objects: [{ type: "street", orientations: ["N", "W",] }, { type: "campsite" }],
            }
        ],
        score_condition: second_nature
    }, {
        blocks: [
            {
                terrain: "lake",
                extra_objects: [],
            },
            {
                terrain: "mountain",
                extra_objects: [{ type: "river", orientations: ["N", "E",] }],
            },
            {
                terrain: "forest",
                extra_objects: [{ type: "street", orientations: ["W", "E",] }, { type: "campsite" }],
            },
            {
                terrain: "meadow",
                extra_objects: [{ type: "street", orientations: ["W", "E",] }],
            }
        ],
        score_condition: waterways_and_means
    }, {
        blocks: [
            {
                terrain: "meadow",
                extra_objects: [{ type: "river", orientations: ["N", "S",] }],
            },
            {
                terrain: "lake",
                extra_objects: [],
            },
            {
                terrain: "mountain",
                extra_objects: [{ type: "river", orientations: ["N", "E",] }, { type: "campsite" }],
            },
            {
                terrain: "forest",
                extra_objects: [{ type: "river", orientations: ["W", "E",] }],
            }
        ],
        score_condition: patchwork_park
    }, {
        blocks: [
            {
                terrain: "meadow",
                extra_objects: [{ type: "street", orientations: ["N", "W",] }, { type: "campsite" }],
            },
            {
                terrain: "lake",
                extra_objects: [],
            },
            {
                terrain: "forest",
                extra_objects: [{ type: "river", orientations: ["W", "E",] }],
            },
            {
                terrain: "mountain",
                extra_objects: [{ type: "river", orientations: ["W", "E",] }],
            }
        ],
        score_condition: twin_peaks
    }, {
        blocks: [
            {
                terrain: "meadow",
                extra_objects: [{ type: "river", orientations: ["N", "W",] }],
            },
            {
                terrain: "forest",
                extra_objects: [{ type: "river", orientations: ["N", "S",] }, { type: "campsite" }],
            },
            {
                terrain: "lake",
                extra_objects: [],
            },
            {
                terrain: "mountain",
                extra_objects: [{ type: "river", orientations: ["N", "S",] }],
            }
        ],
        score_condition: run_forest_run
    }, {
        blocks: [
            {
                terrain: "mountain",
                extra_objects: [{ type: "street", orientations: ["N", "W",] }],
            },
            {
                terrain: "lake",
                extra_objects: [],
            },
            {
                terrain: "meadow",
                extra_objects: [{ type: "river", orientations: ["W", "E",] }],
            },
            {
                terrain: "forest",
                extra_objects: [{ type: "river", orientations: ["W", "E",] }, { type: "campsite" }],
            }
        ],
        score_condition: happy_campers
    }, {
        blocks: [
            {
                terrain: "lake",
                extra_objects: [],
            },
            {
                terrain: "forest",
                extra_objects: [{ type: "street", orientations: ["N", "E",] }],
            },
            {
                terrain: "meadow",
                extra_objects: [{ type: "river", orientations: ["W", "E",] }],
            },
            {
                terrain: "mountain",
                extra_objects: [{ type: "river", orientations: ["W", "E",] }, { type: "campsite" }],
            }
        ],
        score_condition: bigfoot_country
    }, {
        blocks: [
            {
                terrain: "forest",
                extra_objects: [{ type: "river", orientations: ["N", "W",] }],
            },
            {
                terrain: "lake",
                extra_objects: [],
            },
            {
                terrain: "mountain",
                extra_objects: [{ type: "street", orientations: ["W", "E",] }, { type: "campsite" }],
            },
            {
                terrain: "meadow",
                extra_objects: [{ type: "street", orientations: ["W", "E",] }],
            }
        ],
        score_condition: sniff_or_swim
    }, {
        blocks: [
            {
                terrain: "lake",
                extra_objects: [],
            },
            {
                terrain: "meadow",
                extra_objects: [{ type: "street", orientations: ["N", "S",] }, { type: "campsite" }],
            },
            {
                terrain: "forest",
                extra_objects: [{ type: "river", orientations: ["S", "W",] }],
            },
            {
                terrain: "mountain",
                extra_objects: [{ type: "street", orientations: ["N", "S",] }],
            }
        ],
        score_condition: impressive_range
    }, {
        blocks: [
            {
                terrain: "meadow",
                extra_objects: [{ type: "street", orientations: ["N", "S",] }],
            },
            {
                terrain: "mountain",
                extra_objects: [{ type: "river", orientations: ["N", "E",] }, { type: "campsite" }],
            },
            {
                terrain: "forest",
                extra_objects: [{ type: "street", orientations: ["N", "S",] }],
            },
            {
                terrain: "lake",
                extra_objects: [],
            }
        ],
        score_condition: dream_streams
    }, {
        blocks: [
            {
                terrain: "lake",
                extra_objects: [],
            },
            {
                terrain: "forest",
                extra_objects: [{ type: "river", orientations: ["N", "S",] }],
            },
            {
                terrain: "mountain",
                extra_objects: [{ type: "river", orientations: ["W", "E",] }],
            },
            {
                terrain: "meadow",
                extra_objects: [{ type: "river", orientations: ["N", "W",] }, { type: "campsite" }],
            }
        ],
        score_condition: summit_up
    }, {
        blocks: [
            {
                terrain: "lake",
                extra_objects: [],
            },
            {
                terrain: "meadow",
                extra_objects: [{ type: "river", orientations: ["N", "E",] }, { type: "campsite" }],
            },
            {
                terrain: "mountain",
                extra_objects: [{ type: "street", orientations: ["W", "E",] }],
            },
            {
                terrain: "forest",
                extra_objects: [{ type: "street", orientations: ["W", "E",] }],
            }
        ],
        score_condition: naturopolis
    }
];

export default cards;