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
    const [attackPoints, setAttackPoints] = useState()
    const [enemyAttackAudio, setEnemyAttackAudo] = useState()
    const [enemyAttackGif, setEnemyAttackGif] = useState()
    const [enemyAttackPoints, setEnemyAttackPoints] = useState()
    const [modal, setModal] = useState(false)
    const [enemyModal, setEnemyModal] = useState(false)
    const [playerDeath, setPlayerDeath] = useState(false)
    const [enemyDeath, setEnemyDeath] = useState(false)

    const handleAttack = (event) => {
        if (playerTurn) {
            const count = event.target.name
            const atkAudio = playerActivePokemon.moves[count][1]
            const atkGif = playerActivePokemon.moves[count][2]
            const atkPoints = playerActivePokemon.moves[count][3]
            setAttackAudo(atkAudio)
            setAttackGif(atkGif)
            setAttackPoints(atkPoints)
            setEnemyActivePokemonHP(((enemyActivePokemonHP - atkPoints) <= 0) ? 0 : (enemyActivePokemonHP - atkPoints))
            if (((enemyActivePokemonHP - atkPoints) <= 0))
                setEnemyDeath(true)
        }
        setPlayerTurn(false)
        setModal(true)
    }


    useEffect(() => {
        if (playerDeath) {
            playerPokemons.shift()
            if (playerPokemons.length === 0) {
                alert("Sorry you lost")
            } else {
                setPlayerActivePokemon(playerPokemons[0])
                setPlayerActivePokemonHP(playerPokemons[0].hp)
            }
        } else if (enemyDeath) {
            enemyPokemons.shift()
            if (enemyPokemons.length === 0) {
                alert("Congrats")
            } else {
                setEnemyActivePokemon(enemyPokemons[0])
                setEnemyActivePokemonHP(enemyPokemons[0].hp)
            }
        }
        
    }, [playerDeath, enemyDeath, playerTurn])

    return (
        <div>
            <Popup 
                modal={true} 
                open={modal} 
                onClose={() => {
                    setModal(false)
                    if (!enemyDeath) {
                        let random = Math.floor(Math.random() * (enemyActivePokemon.moves.length-1 - 0 + 1) + 0)
                        const enemyAtkAudio = enemyActivePokemon.moves[random][1]
                        const enemyAtkGif = enemyActivePokemon.moves[random][2]
                        const enemyAtkPoints = enemyActivePokemon.moves[random][3]
                        setEnemyAttackAudo(enemyAtkAudio)
                        setEnemyAttackGif(enemyAtkGif)
                        setEnemyAttackPoints(enemyAtkPoints)
                        setPlayerActivePokemonHP(((playerActivePokemonHP - enemyAtkPoints) <= 0) ? 0 : (playerActivePokemonHP - enemyAtkPoints))
                        if ((playerActivePokemonHP - enemyAtkPoints) <= 0)
                            setPlayerDeath(true)
                        setEnemyModal(true) 
                    }
                    else 
                        setEnemyDeath(false)
                          
                }}
                closeOnDocumentClick
                closeOnEscape
                className='popup-content'
            >
                <div className='modal'>
                    {enemyDeath ? 
                        <div>
                            <h2>{playerActivePokemon.name} did {attackPoints} points of damage and knock the opponent down!</h2>
                            <h2>{props.enemy.name} summons {enemyActivePokemon.name}</h2>   
                        </div> 
                        :
                        <div>
                            <h2>{playerActivePokemon.name} did {attackPoints} points of damage to {enemyActivePokemon.name}!</h2>
                            <h2>{enemyActivePokemon.name} has {enemyActivePokemonHP} HP left</h2>   
                        </div> 
                    }
                    
                    <Imager src={attackGif} />
                    <audio type="audio/mp3" autoPlay={true} src={attackAudio} />
                </div>
            </Popup>
            <Popup 
                modal={true} 
                open={enemyModal} 
                onClose={() => {
                    setEnemyModal(false)
                    setPlayerDeath(false)
                    setPlayerTurn(true)   
                }}
                closeOnDocumentClick
                closeOnEscape
                className='popup-content'
            >
                <div className='modal'>
                    {playerDeath ? 
                        <div>
                            <h2>{enemyActivePokemon.name} did {enemyAttackPoints} points of damage and and knocked your pokemon down!</h2>
                            <h2>You summon {playerActivePokemon.name}</h2>
                        </div> 
                        :
                        <div>
                            <h2>{enemyActivePokemon.name} did {enemyAttackPoints} points of damage to {playerActivePokemon.name}!</h2>
                            <h2>{playerActivePokemon.name} has {playerActivePokemonHP} left</h2>     
                        </div> 
                    }
                    
                    <Imager src={enemyAttackGif} />
                    <audio type="audio/mp3" autoPlay={true} src={enemyAttackAudio} />
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
