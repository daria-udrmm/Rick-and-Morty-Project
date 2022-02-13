import {useEffect} from 'react';
import { fetchHeroes, activeFilterDelete} from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import 'normalize.css';
import {useHttp} from '../../request/request.js'
import PostItem from '../postItem/PostItem';
import { createSelector } from 'reselect';
import Filters from '../filters/Filters';


const App = () => {

    const dispatch = useDispatch();
    const {request} = useHttp();

    useEffect(() => {
        dispatch(fetchHeroes(request));
    }, [])

/*     const filteredPost = createSelector(
        (state) => state.heroes.heroes,
        (state) => state.filters.activeFilter,
        (heroes, filters) => {
            // filters.map(item => Object.keys(item).map(one => (heroes = heroes.filter(arrHeroes => (arrHeroes[one] == item[one])))));
            Object.keys(filters).map(item => (heroes = heroes.filter(oneHero => (oneHero[item] == filters[item]))));
            let arrFinal = heroes;
            return arrFinal;
        }
    ); */
    // let filteredMain = useSelector(filteredPost);

    // let filteredMain = useSelector(state => {
    //     heroes: state.heroes.heroes,
    //     activeFilter: state.Filters.activeFilter,
    // });


    const someFiltered = useSelector(state => {
        let newHeroes = state.heroes.heroes;
        Object.keys(state.filters.activeFilter).map(item => {
            newHeroes = newHeroes.filter(oneHero => oneHero[item] == state.filters.activeFilter[item])
        });
        return newHeroes;
    })


    
    return (
        <main className="app">
            <div className="container">
                <Filters/>
                <div
                    className='filter__delete'
                    onClick={() => dispatch(activeFilterDelete())}
                >Убрать фильтры</div>
                <div className="social__box">
                    {someFiltered.map(item => <PostItem {...item} key={item.id}/>)}
                </div>
            </div>
        </main>
    )
}

export default App;