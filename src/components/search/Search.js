import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activeFilteredChange } from '../../actions';
import './Search.scss';


const Search = () => {

    const dispatch = useDispatch();

    const [text, setText] = useState('');

    const {activeFilter} = useSelector(state => state.filters);

    const changeForm = (e) => {
        e.preventDefault();
        dispatch(activeFilteredChange(({title: text})));
    }

    useEffect(() => {
        setText('');
    }, [activeFilter])

    return (
        <div className="search__form">
            <form onSubmit={(e) => changeForm(e)}>
                <input placeholder="Enter character name"
                       className="search__field"
                       value={text}
                       onChange={(e) => setText(e.target.value)}
                />
                <button
                    className='search__button'
                >Search</button>
            </form>
        </div>
    )
}

export default Search;