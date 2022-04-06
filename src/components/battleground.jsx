import Controls from './controls';
import Platform from './platform';
import PlaySound from './playsound';
import {useState} from 'react';
import battle from '../audio/Battle.mp3'

function Battleground(props) {

    
    return (
        <div>
            <PlaySound src={battle} loop={true}/>
            <Controls player={props.player}/>
            <Platform player={props.player} enemy={props.enemy} />
        </div>
    );

}

export default Battleground;
