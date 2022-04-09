import './controls.css';
import Popup from 'reactjs-popup'
import Imager from './imager';
import { useState } from 'react';

function Controls(props) {
    const [playerTurn, setPlayerTurn] = useState(true)
    const [attackAudio, setAttackAudo] = useState()
    const [attackGif, setAttackGif] = useState()
    const [modal, setModal] = useState(false)

    const handleAttack = (event) => {
        if (playerTurn) {
            const attackAudio = event.target.id
            const attackGif = event.target.name
            setAttackAudo(attackAudio)
            setAttackGif(attackGif)
        }
        setPlayerTurn(false)
        setModal(true)
    }


    return (
        <div className="container">
            <Popup 
                modal={true} 
                open={modal} 
                closeOnDocumentClick
                className='popup-content'
            >
                <div className='modal'>
                    <Imager src={attackGif} />
                    <audio type="audio/mp3" autoPlay={true} src={attackAudio} />
                </div>
            </Popup>
           {props.player.pokemons[0].moves.map((move) => {
               return <td><button id={move[1]} name={move[2]} onClick={handleAttack}>{move[0]}</button></td>
           })}
        </div>
    );

}

export default Controls;
