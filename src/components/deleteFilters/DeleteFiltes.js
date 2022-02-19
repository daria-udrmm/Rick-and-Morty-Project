import { activeFilterDelete} from '../../actions';
import { useDispatch } from 'react-redux';

const DeleteFilters = () => {

    const dispatch = useDispatch();

    return(
        <div
            className='filter__delete'
            onClick={() => dispatch(activeFilterDelete())}>
            Clear filters
        </div>
    )
}

export default DeleteFilters;