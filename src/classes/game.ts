import card from "../types/card";
import game_pack from "../types/game_pack";
import played_card from "../types/played_card";
import parse_played_cards from "../utils/parse_played_cards";
import shift_played_cards from "../utils/shift_played_cards";

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
        let parsed_played_cards = this.parse_played_cards()
        return !this.game_pack.placement_rules.some(rule => !rule(this.played_cards, parsed_played_cards, played_card));
    }
    get_broken_rules(played_card: played_card) {
        const parsed_played_cards = this.parse_played_cards();
        return this.game_pack.placement_rules
            .filter(rule => !rule(this.played_cards, parsed_played_cards, played_card)) // find failing rules
            .map(rule => rule.name || 'Unnamed Rule'); // get their names
    }
    play_card(played_card: played_card) {
        if (!this.remaining_cards.includes(played_card.card)) {
            throw new Error("Card not in remaining_cards");
        }
        if (!this.is_play_legal(played_card)) {
            console.log("Illegal play is: ", this.get_broken_rules(played_card));
            return;
        }
        this.remaining_cards = this.remaining_cards.filter(card => card !== played_card.card);
        this.played_cards.push(played_card);
        this.played_cards = shift_played_cards(this.played_cards);
        this.update_score();
    }
    get_target_score() {
        return this.conditions.reduce((acc, card) => acc + card.score_condition.points_to_be_reached, 0);
    }
    update_score() {
        let parsed_played_cards = this.parse_played_cards()
        this.current_score = this.conditions.reduce((acc, card) => acc + card.score_condition.scorer(this.played_cards, parsed_played_cards), 0);
    }
    parse_played_cards() {
        this.played_cards = shift_played_cards(this.played_cards); // shifting coordinates cz if its negative it breaks 2D array
        let parsed_played_cards = parse_played_cards(this.played_cards);
        return parsed_played_cards;
    }
    reset() {
        this.current_score = 0;
        this.played_cards = [];
        const shuffledCards = this.game_pack.cards.sort(() => Math.random() - 0.5);
        this.conditions = shuffledCards.slice(0, AMOUNT_OF_CONDITIONS);
        this.remaining_cards = shuffledCards.slice(AMOUNT_OF_CONDITIONS);
        this.played_cards[0] = { card: this.remaining_cards.pop(), coordinates: [0, 0], rotated: false }; //TODO change to naturopolis Hanlder
        this.update_score();
    }
    save_game() {
        localStorage.setItem('game_instance', JSON.stringify(this));
    }
    recover_game(saved_game_instance: string) {
        const recovered_game: game = JSON.parse(saved_game_instance);
        const all_cards = this.game_pack.cards;

        const find_card = (card: any) => all_cards.find(c => JSON.stringify(c) === JSON.stringify(card));

        this.conditions = recovered_game.conditions.map(find_card).filter(Boolean);
        this.remaining_cards = recovered_game.remaining_cards.map(find_card).filter(Boolean);
        this.played_cards = recovered_game.played_cards
            .map(({ card, coordinates, rotated }) => {
                const found_card = find_card(card);
                return found_card ? { card: found_card, coordinates, rotated } : null;
            })
            .filter(Boolean);

        this.update_score();
    }

    is_game_recoverable(saved_game_instance: string) {
        let recovered_game: game = JSON.parse(saved_game_instance);
        let compare_game: game = JSON.parse(JSON.stringify(this));

        const deepEqualCards = (card: card, arr: any[]) => arr.some((c: card) => JSON.stringify(c) === JSON.stringify(card));

        const is_game_pack_equal = recovered_game.game_pack.name === compare_game.game_pack.name;
        const is_card_amount_equal = recovered_game.remaining_cards.length + recovered_game.conditions.length +
            recovered_game.played_cards.length === compare_game.game_pack.cards.length;
        const is_cards_equal = compare_game.game_pack.cards.every(card =>
            deepEqualCards(card, recovered_game.conditions) ||
            deepEqualCards(card, recovered_game.remaining_cards) ||
            recovered_game.played_cards.some(played_card => JSON.stringify(played_card.card) === JSON.stringify(card))
        );

        console.log(`Game pack equal: ${is_game_pack_equal}, Card amount equal: ${is_card_amount_equal}, Cards equal: ${is_cards_equal}`);

        return is_game_pack_equal && is_card_amount_equal && is_cards_equal;
    }

}

export default game;