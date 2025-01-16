import scorer from "./scorer";

type score_condition = {
    name: string;
    description: string;
    points_to_be_reached: number;
    scorer: scorer;
};

export default score_condition;


