class Player {
    constructor(name, pokemons, myTurn, activePokemon) {
        this.name = name;
        this.pokemons = pokemons;
        this.myTurn = myTurn;
        this.activePokemon = pokemons[0];
    }
}

export default Player;


