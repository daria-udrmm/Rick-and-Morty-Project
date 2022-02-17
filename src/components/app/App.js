import {useEffect} from 'react';
import { fetchHeroes, activeFilterDelete} from '../../actions';
import { useDispatch } from 'react-redux';
import './App.scss';
import 'normalize.css';
import {useHttp} from '../../request/request.js'
import Filters from '../filters/Filters';
import Search from '../search/Search';
import PostsList from '../postsList/PostsList';


const App = () => {

    const dispatch = useDispatch();
    const {request} = useHttp();

    useEffect(() => {
        dispatch(fetchHeroes(request));
    }, [])

    return (
        <main className="app">
            <div className="container">
                <Filters/>
                <Search/>
                <div
                    className='filter__delete'
                    onClick={() => dispatch(activeFilterDelete())}>
                    Clear filters
                </div>
                <PostsList/>
            </div>
        </main>
    )
}

export default App;