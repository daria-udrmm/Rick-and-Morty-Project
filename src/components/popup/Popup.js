import { useDispatch } from 'react-redux';
import { popupHide } from '../../actions';
import './Popup.scss';
import close from '../../assets/close.png';

const Popup = ({title, status, gender, species, planet, created, image}) => {

    const dispatch = useDispatch();

    return(
        <div className="popup">
            <div className='popup__left'>
                <div className='popup__name'>{title}</div>
                <div className='popup__image'>
                    <img src={image}></img>
                </div>
            </div>
            <div className='popup__right'>
                <div className='popup__description'>Species: {species}</div>
                <div className='popup__description'>Gender: {gender}</div>
                <div className='popup__description'>Status: {status}</div>
                <div className='popup__description'>Planet: {planet}</div>
                <div className='popup__description'>Created: {created}</div>
            </div>
            <div className='popup__close'
                 onClick={() => dispatch(popupHide())}>
                <img src={close}/>
            </div>
        </div>
    )
}


export default Popup;