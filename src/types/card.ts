import block from "../types/block";
import score_condition from "./score_condition";

type card = {
    blocks: block[]; // blocks are arranged in top-left, top-right, bottom-left, bottom-right order
    score_condition: score_condition;
};

export default card;
