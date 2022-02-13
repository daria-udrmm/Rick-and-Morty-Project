import { useDispatch, useSelector } from 'react-redux';
import { activeFilteredChange } from '../../actions';
import './Filters.scss'

const Filters = () => {
    const dispatch = useDispatch();
    const {filter} = useSelector(state => state.filters);
    
    const makeFilters = (filters) => {
        return Object.keys(filters).map(item => {
            return (
                <div className='filters__flex' key={Math.random()}>
                    <div>{item}</div>
                    <div>{filters[item].map(oneFilter => {
                            return(
                                <div className='filters__item'
                                    key={Math.random()}
                                    onClick={() => dispatch(activeFilteredChange(({[item]: oneFilter})))}
                                >
                                    <div>{oneFilter}</div>
                                </div>
                            )
                        })
                    }</div>
                </div>
            )
        })
    }


    return(
        <div className='filters'>
            {makeFilters(filter)}
        </div>
    )
}

export default Filters;