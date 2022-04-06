class Player {
    constructor(name, potions, pokemons, myTurn, activePokemon) {
        this.name = name;
        this.potions = potions;
        this.pokemons = pokemons;
        this.myTurn = myTurn;
        this.activePokemon = pokemons[0];
    }
}

export default Player;


