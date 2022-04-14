import '../css/controls.css';


function Controls(props) {
    let count = 0;
    return (
        <div className="container">
           {props.player.pokemons.current[0].moves.map((move) => {
               return <tr><button name={count++} className="buttons" onClick={props.handleAttack}>{move[0]}</button></tr>
           })}
        </div>
    );

}

export default Controls;
