import Imager from './imager';
import '../css/platform.css'
import Controls from './controls';



function Platform(props) {
    return (
        <div>
            <Controls player={props.player}/>
            <div className="left">
                <Imager src={props.player.pokemons[0].stance} />
            </div>
            <div className="right">
            <Imager src={props.enemy.pokemons[0].stance}/>
            </div>
        </div>
    );

}

export default Platform;
