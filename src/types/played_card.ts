import card from "./card";

type played_card = {
    card: card;
    coordinates: [number, number];
    rotated: boolean;
}

export default played_card;