import Pokemon from "../classes/pokemon"
import ScratchAudio from '../audio/Scratch.mp3'
import TackleAudio from '../audio/Tackle.mp3'
import CharScratch from '../images/charizard_right_scratch.gif'
import CharStance from '../images/charizard_right.gif'
import EeveeTackle from '../images/eevee_right_tackle.gif'
import EeveeStance from '../images/eevee_right.gif'
import Player from "../classes/player"
import Battleground from './battleground'

function Controller() {
    const charizard = new Pokemon("Charizard", 500, CharStance, [['Scratch', ScratchAudio, CharScratch]])
    const eevee = new Pokemon("Eevee", 300, EeveeStance, [['Tackle', TackleAudio, EeveeTackle]])
    const player = new Player("Tony", 5, [charizard], true)
    const enemy = new Player("John", 5, [eevee], false)

    return (
        <Battleground player={player} enemy={enemy} />
    );

}

export default Controller;
