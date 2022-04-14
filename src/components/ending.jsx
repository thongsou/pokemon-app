import Header from "./header";
import {useNavigate} from 'react-router-dom';
import endback from '../images/endingbackground.png'
import { useLocation } from "react-router-dom";


function Ending() {
    const navigate = useNavigate();
    const {state} = useLocation();
    return (
        <div style={{
            backgroundImage: `url(${endback})`,
            backgroundSize: "cover",
            width: "100%",
            height: "100%",
            position: "absolute"
        }}>
            <Header />
            <h1>{state ? "Congrats! You won!" : "Sorry you loss, maybe next time."}</h1>
            <button onClick={() =>
                navigate('/home')
            }>Click me to navigate back to the homepage.</button>
        </div>
        
    );

}

export default Ending;
