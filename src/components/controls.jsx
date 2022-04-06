import './controls.css';

function Controls(props) {
    console.log(props.player)
    return (
        <div className="container">
           {props.player.pokemons[0].moves.map((move) => {
               return <td><button>{move[0]}</button></td>
           })}
        </div>
    );

}

export default Controls;
