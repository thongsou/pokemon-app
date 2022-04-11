import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CharRightStance from '../images/charizard_right.gif';
import AeroRightStance from '../images/aerodactyl_right.webp';
import BlastRightStance from '../images/blastoise_right.gif';
import GengarRightStance from '../images/gengar_right.webp';
import LucarioRightStance from '../images/lucario_right.webp';
import PikaRightStance from '../images/pikachu_right.gif';
import Player from "../classes/player";
import Imager from "./imager";
import Pokemon from "../classes/pokemon";
import ScratchAudio from '../audio/Scratch.mp3'
import RoarAudio from '../audio/Roar.mp3';
import TailWhipAudio from '../audio/TailWhip.mp3';
import CharRightScratch from '../images/charizard_right_scratch.gif'
import CharRightTailWhip from '../images/charizard_right_tail_whip.gif'
import CharRightRoar from '../images/charizard_right_roar.gif'
import CharLeftScratch from '../images/charizard_left_scratch.gif'
import CharLeftTailWhip from '../images/charizard_left_tail_whip.gif'
import CharLeftRoar from '../images/charizard_left_roar.gif'
import CharLeftStance from '../images/charizard_left.gif'
import BiteAudio from '../audio/Bite.mp3'
import AerodactylRightBite from '../images/aerodactyl_right_bite.webp'
import AerodactylRightRoar from '../images/aerodactyl_right_roar.webp'
import AerodactylRightStance from '../images/aerodactyl_right.webp'
import AerodactylLeftBite from '../images/aerodactyl_left_bite.webp'
import AerodactylLeftRoar from '../images/aerodactyl_left_roar.webp'
import AerodactylLeftStance from '../images/aerodactyl_left.webp'
import StompAudio from '../audio/Stomp.mp3'
import WaterGunAudio from '../audio/WaterGun.mp3';
import BlastRightStomp from '../images/blastoise_right_stomp.gif'
import BlastRightWatergun from '../images/blastoise_right_watergun.webp'
import BlastRightRoar from '../images/blastoise_right_roar.webp'
import BlastLeftStomp from '../images/blastoise_left_stomp.gif'
import BlastLeftWatergun from '../images/blastoise_left_watergun.webp'
import BlastLeftRoar from '../images/blastoise_left_roar.webp'
import BlastLeftStance from '../images/blastoise_left.gif'
import GengarRightScratch from '../images/gengar_right_scratch.webp'
import GengarRightRoar from '../images/gengar_right_roar.webp'
import GengarLeftScratch from '../images/gengar_left_scratch.webp'
import GengarLeftRoar from '../images/gengar_left_roar.webp'
import GengarLeftStance from '../images/gengar_left.webp'
import PunchAudio from '../audio/Punch.mp3'
import JabAudio from '../audio/Punch.mp3';
import ShadowBallAudio from '../audio/ShadowBall.mp3';
import LucarioRightPunch from '../images/lucario_right_punch.webp'
import LucarioRightShadowBall from '../images/lucario_right_shadowball.webp'
import LucarioRightJab from '../images/lucario_right_jab.webp'
import LucarioLeftPunch from '../images/lucario_left_punch.webp'
import LucarioLeftShadowBall from '../images/lucario_left_shadowball.webp'
import LucarioLeftJab from '../images/lucario_left_jab.webp'
import LucarioLeftStance from '../images/lucario_left.webp'
import TackleAudio from '../audio/Bite.mp3'
import ThunderAudio from '../audio/Thunder.mp3';
import PikaRightTackle from '../images/pikachu_right_tackle.gif'
import PikaRightTailWhip from '../images/pikachu_right_tailwhip.webp'
import PikaRightThunder from '../images/pikachu_right_thunder.webp'
import PikaLeftTackle from '../images/pikachu_left_tackle.gif'
import PikaLeftTailWhip from '../images/pikachu_left_tailwhip.webp'
import PikaLeftThunder from '../images/pikachu_left_thunder.webp'
import PikaLeftStance from '../images/pikachu_left.gif'
import {useNavigate} from 'react-router-dom';
import Header from "./header";


function SelectionPage() {
    const navigate = useNavigate();
    const {state} = useLocation();
    const [myPicks, setMyPicks] = useState([])
    let myPokemons = []
    let enemyPokemons = []
    let totalPokemons = ["Charizard", "Aerodactyl", "Blastoise", "Gengar", "Lucario", "Pikachu"]

    useEffect(() => {
        if (myPicks.length === 3) {
            for (let i = 0; i < myPicks.length; i++) {
                let pokemon = myPicks[i];
                let index = totalPokemons.indexOf(pokemon)
                if (index !== -1) {
                    totalPokemons.splice(index, 1)
                }
                switch (pokemon) {
                    case "Charizard":
                        myPokemons = [...myPokemons, new Pokemon("Charizard", 500, CharLeftStance, [
                            ['Scratch', ScratchAudio, CharLeftScratch, 75],
                            ['Roar', RoarAudio, CharLeftRoar, 100],
                            ['Tail Whip', TailWhipAudio, CharLeftTailWhip, 120]
                        ])];
                        break;
                    case "Aerodactyl":
                        myPokemons = [...myPokemons, new Pokemon("Aerodactyl", 300, AerodactylLeftStance, [
                            ['Bite', BiteAudio, AerodactylLeftBite, 100],
                            ['Roar', RoarAudio, AerodactylLeftRoar, 90],
                        ])];
                        break;
                    case "Blastoise":
                        myPokemons = [...myPokemons, new Pokemon("Blastoise", 400, BlastLeftStance, [
                            ['Stomp', StompAudio, BlastLeftStomp, 90],
                            ['Roar', RoarAudio, BlastLeftRoar, 100],
                            ['Water Gun', WaterGunAudio, BlastLeftWatergun, 150]
                        ])];
                        break;
                    case "Gengar":
                        myPokemons = [...myPokemons, new Pokemon("Gengar", 300, GengarLeftStance, [
                            ['Scratch', ScratchAudio, GengarLeftScratch, 120],
                            ['Roar', RoarAudio, GengarLeftRoar, 100],
                        ])];
                        break;
                    case "Lucario":
                        myPokemons = [...myPokemons, new Pokemon("Lucario", 350, LucarioLeftStance, [
                            ['Punch', PunchAudio, LucarioLeftPunch, 110],
                            ['Jab', JabAudio, LucarioLeftJab, 110],
                            ['Shadow Ball', ShadowBallAudio, LucarioLeftShadowBall, 140]
                        ])];
                        break;
                    case "Pikachu":
                        myPokemons = [...myPokemons, new Pokemon("Pikachu", 350, PikaLeftStance, [
                            ['Tackle', TackleAudio, PikaLeftTackle, 100],
                            ['Thunder', ThunderAudio, PikaLeftThunder, 120],
                            ['Tail Whip', TailWhipAudio, PikaLeftTailWhip, 90]
                        ])];
                        break;
                }
            }

            for (let i = 0; i < totalPokemons.length; i++) {
                let pokemon = totalPokemons[i];
                switch (pokemon) {
                    case "Charizard":
                        enemyPokemons = [...enemyPokemons, new Pokemon("Charizard", 500, CharRightStance, [
                            ['Scratch', ScratchAudio, CharRightScratch, 75],
                            ['Roar', RoarAudio, CharRightRoar, 100],
                            ['Tail Whip', TailWhipAudio, CharRightTailWhip, 120]
                        ])];
                        break;
                    case "Aerodactyl":
                        enemyPokemons = [...enemyPokemons, new Pokemon("Aerodactyl", 300, AerodactylRightStance, [
                            ['Bite', BiteAudio, AerodactylRightBite, 100],
                            ['Roar', RoarAudio, AerodactylRightRoar, 90],
                        ])];
                        break;
                    case "Blastoise":
                        enemyPokemons = [...enemyPokemons, new Pokemon("Blastoise", 400, BlastRightStance, [
                            ['Stomp', StompAudio, BlastRightStomp, 90],
                            ['Roar', RoarAudio, BlastRightRoar, 100],
                            ['Water Gun', WaterGunAudio, BlastRightWatergun, 150]
                        ])];
                        break;
                    case "Gengar":
                        enemyPokemons = [...enemyPokemons, new Pokemon("Gengar", 300, GengarRightStance, [
                            ['Scratch', ScratchAudio, GengarRightScratch, 120],
                            ['Roar', RoarAudio, GengarRightRoar, 100],
                        ])];
                        break;
                    case "Lucario":
                        enemyPokemons = [...enemyPokemons, new Pokemon("Lucario", 350, LucarioRightStance, [
                            ['Punch', PunchAudio, LucarioRightPunch, 110],
                            ['Jab', JabAudio, LucarioRightJab, 110],
                            ['Shadow Ball', ShadowBallAudio, LucarioRightShadowBall, 140]
                        ])];
                        break;
                    case "Pikachu":
                        enemyPokemons = [...enemyPokemons, new Pokemon("Pikachu", 350, PikaRightStance, [
                            ['Tackle', TackleAudio, PikaRightTackle, 100],
                            ['Thunder', ThunderAudio, PikaRightThunder, 120],
                            ['Tail Whip', TailWhipAudio, PikaRightTailWhip, 90]
                        ])];
                        break;
                }
            }
            const player = new Player({state}, myPokemons, true)
            console.log(player)
            const enemy = new Player("Red", enemyPokemons, false)
            console.log(enemy)

            navigate('/battle', {state: {player, enemy}, replace: true})
        }
    }, [myPicks])




    return (
        <div>
            <Header />
            <div>Welcome {state}</div>
            <p>Please pick 3 Pokemons [No Duplicates]</p>
            <table>
                <tr>
                    <td>
                        <button value="Charizard" onClick={(e) => {
                             if (!myPicks.includes(e.target.value)) setMyPicks(myPicks => [...myPicks, e.target.value])
                        }}>Charizard</button>
                        <Imager src={CharRightStance} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <button value="Aerodactyl" onClick={(e) => {
                             if (!myPicks.includes(e.target.value)) setMyPicks(myPicks => [...myPicks, e.target.value])
                        }}>Aerodactyl</button>
                        <Imager src={AeroRightStance} />
                    </td></tr>
                <tr>
                    <td>
                        <button value="Blastoise" onClick={(e) => {
                             if (!myPicks.includes(e.target.value)) setMyPicks(myPicks => [...myPicks, e.target.value])
                        }}>Blastoise</button>
                        <Imager src={BlastRightStance} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <button value="Gengar" onClick={(e) => {
                             if (!myPicks.includes(e.target.value)) setMyPicks(myPicks => [...myPicks, e.target.value])
                        }}>Gengar</button>
                        <Imager src={GengarRightStance} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <button value="Lucario" onClick={(e) => {
                             if (!myPicks.includes(e.target.value)) setMyPicks(myPicks => [...myPicks, e.target.value])
                        }}>Lucario</button>
                        <Imager src={LucarioRightStance} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <button value="Pikachu" onClick={(e) => {
                             if (!myPicks.includes(e.target.value)) setMyPicks(myPicks => [...myPicks, e.target.value])
                        }}>Pikachu</button>
                        <Imager src={PikaRightStance} />
                    </td>
                </tr>
            </table>
        </div>
    );

}

export default SelectionPage;