import { useEffect, useState } from "react";
import '../css/homepage.css'
import logo from '../images/logo.png'
import pokemonbattlesimulator from '../images/pokemonbattlesimulator.png'
import Imager from "./imager";
import {Navigate, useNavigate} from 'react-router-dom';


function HomePage() {
    const [input, setInput] = useState('')
    const [fade, setFade] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        setInterval(() => setFade(true), 6000)
    }, [fade])

    return (
        <div>
            <div className={!fade ? 'fade-out' : 'hidden'}>
                <Imager src={pokemonbattlesimulator} />
            </div>
            <div className={!fade ? 'fade-out1' : 'hidden'}>
                <Imager src={logo} />
            </div>
            <div className={!fade ? 'hidden' : 'fade-in'}>
                <h1>Please Enter Your Name</h1>
                <input type="text" placeholder="Name" onInput={event => setInput(event.target.value)}/>
                <button type="submit" onClick={() => {
                    navigate('/selection', {state: input, replace: true})
                }}>Submit</button>
            </div>
        </div>
        
    )
}

export default HomePage;