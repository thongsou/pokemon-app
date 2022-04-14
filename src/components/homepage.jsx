import { useEffect, useState } from "react";
import '../css/homepage.css'
import logo from '../images/logo.png'
import pokemonbattlesimulator from '../images/pokemonbattlesimulator.png'
import Imager from "./imager";
import {useNavigate} from 'react-router-dom';
import nameback from '../images/namebackground.png';
import homeAudio from '../audio/Home.mp3'


function HomePage() {
    const [input, setInput] = useState('')
    const [fade, setFade] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        setInterval(() => setFade(true), 6000)
    }, [fade])

    return (
        <div>
            <audio type="audio/mp3" autoPlay={true} loop={true} src={homeAudio} />
            <Imager src={nameback} />
            {!fade &&
                <div>
                    <div className={'fade-out'}>
                        <Imager src={pokemonbattlesimulator} />
                    </div>
                    <div className={'fade-out1'}>
                        <Imager src={logo} />
                    </div>
                </div>
            }
            {fade &&
                <div className={'fade-in'}>
                    <h1>Please Enter Your Name</h1>
                    <input type="text" placeholder="Name" onInput={event => setInput(event.target.value)}/>
                    <button type="submit" onClick={() => {
                        navigate('/selection', {state: input, replace: true})
                    }}>Submit</button>
                </div>
            }
        </div>
        
    )
}

export default HomePage;