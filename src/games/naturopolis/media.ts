import image_forest from "./images/forest_1.png";
import image_meadow from "./images/meadow_1.png";
import image_mountain from "./images/mountain_1.png";
import image_lake from "./images/lake_1.png";


const terrain_to_image_map: { [key: string]: string } = {
    'forest': image_forest,
    'meadow': image_meadow,
    'mountain': image_mountain,
    'lake': image_lake
};

export default terrain_to_image_map;