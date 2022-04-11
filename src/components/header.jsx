import Imager from "./imager";
import pokemonbattlesimulator from '../images/pokemonbattlesimulator.png'
import '../css/header.css'
import {useNavigate} from 'react-router-dom';


function Header() {
    const navigate = useNavigate();
    return (
        <nav className="header">
            <button onClick={() => {
                navigate('/home')
            }}><Imager src={pokemonbattlesimulator} /></button>
        </nav>
    );

}

export default Header;
