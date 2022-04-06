import Imager from './imager';
import './platform.css'


function Platform(props) {
    console.log(props)
    return (
        <div>
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
