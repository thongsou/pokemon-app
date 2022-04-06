

function PlaySound(props) {
    return (
        <audio controls type="audio/mp3" autoPlay={true} loop={props.loop} src={props.src} />
    );

}

export default PlaySound;
