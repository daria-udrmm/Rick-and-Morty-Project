import './PostItem.scss'
import { heroesSetLike } from '../../actions';
import { useDispatch } from 'react-redux';


const PostItem = ({id, gender, status, name, title, species, image, link, color}) => {
    const dispatch = useDispatch();

    return(
        <div className="social__post"
            style={{backgroundColor: color}}
            onClick={() => {dispatch(heroesSetLike(id))}}>
            <div
                className='social__title'
                >{title}</div>
            <div
                className='social__content'
                >{species}</div>
            <div>{status}</div>
            <div>{gender}</div>
            <img
                className='social__image' 
                src={image}></img>
            <div>{name}</div>
            <a href={link}>{title}</a>
        </div>
    )
}

export default PostItem;