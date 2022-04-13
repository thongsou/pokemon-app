import Popup from 'reactjs-popup'
import Imager from './imager';



function Modal(props) {
    
    return (
        <Popup 
                modal={true} 
                open={props.modal} 
                closeOnDocumentClick
                closeOnEscape
                className='popup-content'
            >
                <div className='modal'>
                    <Imager src={props.attackGif} />
                    <audio type="audio/mp3" autoPlay={true} src={props.attackAudio} />
                </div>
            </Popup>
    );

}

export default Modal;
