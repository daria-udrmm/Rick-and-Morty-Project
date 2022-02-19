import {useEffect} from 'react';
import { fetchHeroes } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import 'normalize.css';
import {useHttp} from '../../request/request.js'
import Filters from '../filters/Filters';
import Search from '../search/Search';
import PostsList from '../postsList/PostsList';
import Popup from '../popup/Popup';
import DeleteFilters from '../deleteFilters/DeleteFilters';


const App = () => {

    const dispatch = useDispatch();
    const {request} = useHttp();

    const {activePopup, popupInfo} = useSelector(state => state.popup);

    useEffect(() => {
        dispatch(fetchHeroes(request));
    }, []);

    return (
        <main className="app">
            <div className="container">
                <Filters/>
                <Search/>
                <DeleteFilters/>
                <PostsList/>
                {activePopup ? <Popup {...popupInfo}/> : null}
            </div>
        </main>
    )
}

export default App;