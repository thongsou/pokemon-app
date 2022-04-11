import Imager from './imager';
import '../css/platform.css'
import Controls from './controls';
import { useEffect, useState } from 'react';
import Popup from 'reactjs-popup'



function Platform(props) {
    let playerPokemons = props.player.pokemons
    let enemyPokemons = props.enemy.pokemons
    const [playerActivePokemon, setPlayerActivePokemon] = useState(props.player.pokemons[0])
    const [enemyActivePokemon, setEnemyActivePokemon] = useState(props.enemy.pokemons[0])
    const [playerActivePokemonHP, setPlayerActivePokemonHP] = useState(props.player.pokemons[0].hp)
    const [enemyActivePokemonHP, setEnemyActivePokemonHP] = useState(props.enemy.pokemons[0].hp)
    const [playerTurn, setPlayerTurn] = useState(true)
    const [attackAudio, setAttackAudo] = useState()
    const [attackGif, setAttackGif] = useState()
    const [enemyAttackAudio, setEnemyAttackAudo] = useState()
    const [enemyAttackGif, setEnemyAttackGif] = useState()
    const [modal, setModal] = useState(false)

    const handleAttack = (event) => {
        if (playerTurn) {
            const count = event.target.name
            const attackAudio = playerActivePokemon.moves[count][1]
            const attackGif = playerActivePokemon.moves[count][2]
            const attackPoints = playerActivePokemon.moves[count][3]
            setAttackAudo(attackAudio)
            setAttackGif(attackGif)
            setEnemyActivePokemonHP(enemyActivePokemonHP - attackPoints)
        }
        setPlayerTurn(false)
        setModal(true)

        let random = Math.floor(Math.random() * (enemyActivePokemon.moves.length-1 - 0 + 1) + 0)
            const enemyAttackAudio = enemyActivePokemon.moves[random][1]
            const enemyAttackGif = enemyActivePokemon.moves[random][2]
            const enemyAttackPoints = enemyActivePokemon.moves[random][3]
            setEnemyAttackAudo(enemyAttackAudio)
            setEnemyAttackGif(enemyAttackGif)
            setPlayerActivePokemonHP(playerActivePokemonHP - enemyAttackPoints)
            setModal(true)
            setPlayerTurn(true)
        

    }


    useEffect(() => {
        if (playerActivePokemonHP <= 0) {
            playerPokemons.shift()
            if (playerPokemons.length === 0) {
                alert("Sorry you lost")
            } else {
                setPlayerActivePokemon(playerPokemons[0])
                setPlayerActivePokemonHP(playerPokemons[0].hp)
            }
        } else if (enemyActivePokemonHP <= 0) {
            enemyPokemons.shift()
            if (enemyPokemons.length === 0) {
                alert("Congrats")
            } else {
                setEnemyActivePokemon(enemyPokemons[0])
                setEnemyActivePokemonHP(enemyPokemons[0].hp)
            }
        } else if (!playerTurn) {
            let random = Math.floor(Math.random() * (enemyActivePokemon.moves.length-1 - 0 + 1) + 0)
            const enemyAttackAudio = enemyActivePokemon.moves[random][1]
            const enemyAttackGif = enemyActivePokemon.moves[random][2]
            const enemyAttackPoints = enemyActivePokemon.moves[random][3]
            setEnemyAttackAudo(enemyAttackAudio)
            setEnemyAttackGif(enemyAttackGif)
            setPlayerActivePokemonHP(playerActivePokemonHP - enemyAttackPoints)
            setModal(true)
            setPlayerTurn(true)

        }
    }, [playerActivePokemon.hp, enemyActivePokemon.hp, playerTurn, modal])

    return (
        <div>
            <Popup 
                modal={true} 
                open={modal} 
                onClose={() => {
                    setModal(false)
                    console.log(modal)
                    
                    }}
                closeOnDocumentClick
                className='popup-content'
            >
                <div className='modal'>
                    <Imager src={playerTurn ? attackGif : enemyAttackGif} />
                    <audio type="audio/mp3" autoPlay={true} src={playerTurn ? attackAudio : enemyAttackAudio} />
                </div>
            </Popup>
            <Controls player={props.player} handleAttack={handleAttack}/>
            <div className="left">
                <h1>{props.player.name.state}</h1>
                <h2>{playerActivePokemon.name}'s HP is {playerActivePokemonHP}</h2>
                <div className='imageLeft'><Imager src={playerActivePokemon.stance} /></div>
                
            </div>
            <div className="right">
                <h1>{props.enemy.name}</h1>
                <h2>{enemyActivePokemon.name}'s HP is {enemyActivePokemonHP}</h2>
                <div className='imageRight'><Imager src={enemyActivePokemon.stance}/></div>
            </div>
        </div>
    );

}

export default Platform;
