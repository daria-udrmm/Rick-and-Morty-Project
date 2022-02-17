import './PostItem.scss'
import { heroesSetLike } from '../../actions';
import { useDispatch } from 'react-redux';
import 'normalize.css';


const PostItem = ({id, gender, status, name, title, species, image, link, color}) => {
    const dispatch = useDispatch();

    return(
        <div className="social__post"
            style={{backgroundColor: color}}>
            <div
                className='social__title'>
                    {title}
            </div>
            <div
                className='social__content'>
                    Species: {species}
            </div>
            <div>Status: {status}</div>
            <div>Gender: {gender}</div>
            <img
                className='social__image' 
                src={image}>
            </img>
        </div>
    )
}

export default PostItem;