import Platform from './platform';
import battle from '../audio/Battle.mp3'
import { useLocation } from "react-router-dom";


function Battleground(props) {
    const {state} = useLocation();
    console.log(state)
    return (
        <div>
            <audio controls type="audio/mp3" autoPlay={true} loop={true} src={battle} />
            <Platform player={state.player} enemy={state.enemy} />
        </div>
    );

}

export default Battleground;
