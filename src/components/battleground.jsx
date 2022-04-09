import Controls from './controls';
import Platform from './platform';
import battle from '../audio/Battle.mp3'

function Battleground(props) {

    
    return (
        <div>
            <audio controls type="audio/mp3" autoPlay={true} loop={true} src={battle} />
            <Controls player={props.player}/>
            <Platform player={props.player} enemy={props.enemy} />
        </div>
    );

}

export default Battleground;
