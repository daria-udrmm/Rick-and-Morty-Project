import { useDispatch, useSelector } from 'react-redux';
import { activeFilteredChange } from '../../actions';
import './Filters.scss';


const Filters = () => {
    const dispatch = useDispatch();
    const {filter, activeFilter} = useSelector(state => state.filters);

    const makeFilters = (filters) => {
        return Object.keys(filters).map(item => {
            return (
                <div className='filters__flex' key={Math.random()}>
                    <div className='filters__name'>{item}</div>
                    <select 
                        onChange={(e) => dispatch(activeFilteredChange(({[item]: e.target.value})))}
                        value={activeFilter[item] ? activeFilter[item] : "Select option"}>
                        <option disabled>Select option</option>
                        {filters[item].map(oneFilter => {
                            return(
                                <option className='filters__item'
                                        key={Math.random()}
                                        value={oneFilter}
                                >
                                    {oneFilter}
                                </option>
                            )
                        })
                    }</select>
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