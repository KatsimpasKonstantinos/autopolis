import card from "../types/card";
import game_pack from "../types/game_pack";
import played_card from "../types/played_card";
import parse_board_state from "../utils/parse_played_cards";
import shift_board_state from "../utils/shift_board_state";

const AMOUNT_OF_CONDITIONS = 3;

class game {
    game_pack: game_pack;
    current_score: number;
    conditions: card[];
    remaining_cards: card[];
    played_cards: played_card[];
    constructor(game_pack: game_pack) {
        this.game_pack = game_pack;
        this.reset();
    }
    is_play_legal(played_card: played_card) {
        let parsed_board_state = this.parse_board_state()
        return !this.game_pack.placement_rules.some(rule => !rule(this.played_cards, parsed_board_state, played_card));
    }
    play_card(played_card: played_card) {
        if (!this.remaining_cards.includes(played_card.card)) {
            throw new Error("Card not in remaining_cards");
        }
        this.remaining_cards = this.remaining_cards.filter(card => card !== played_card.card);
        this.played_cards.push(played_card);
        this.played_cards = shift_board_state(this.played_cards);
        this.update_score();
    }
    get_target_score() {
        return this.conditions.reduce((acc, card) => acc + card.score_condition.points_to_be_reached, 0);
    }
    update_score() {
        let parsed_board_state = this.parse_board_state()
        this.current_score = this.conditions.reduce((acc, card) => acc + card.score_condition.scorer(this.played_cards, parsed_board_state), 0);
    }
    parse_board_state() {
        this.played_cards = shift_board_state(this.played_cards); // shifting coordinates cz if its negative it breaks 2D array
        let parsed_board_state = parse_board_state(this.played_cards);
        return parsed_board_state;
    }
    reset() {
        this.current_score = 0;
        this.played_cards = [];
        const shuffledCards = this.game_pack.cards.sort(() => Math.random() - 0.5);;
        this.conditions = shuffledCards.slice(0, AMOUNT_OF_CONDITIONS);
        this.remaining_cards = shuffledCards.slice(AMOUNT_OF_CONDITIONS);
    }
}

export default game;