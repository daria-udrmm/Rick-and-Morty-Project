import './PostItem.scss'
import { useDispatch } from 'react-redux';
import 'normalize.css';
import { popupOpen } from '../../actions';


const PostItem = ({gender, planet, status, title, species, image, color, created}) => {
    
    const dispatch = useDispatch();

    const personObj = { gender, status, title, species, image, created, planet };

    return(
        <div className="social__post"
            onClick={() => dispatch(popupOpen(personObj))}
            style={{backgroundColor: color}}>
            <div
                className='social__title'>
                    {title}
            </div>
            <img
                className='social__image' 
                src={image}>
            </img>
        </div>
    )
}

export default PostItem;