import '../css/controls.css';


function Controls(props) {
    let count = 0;
    return (
        <div className="container">
           {props.player.pokemons[0].moves.map((move) => {
               return <td><button name={count++} onClick={props.handleAttack}>{move[0]}</button></td>
           })}
        </div>
    );

}

export default Controls;
