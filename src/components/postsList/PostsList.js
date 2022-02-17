import { useSelector } from 'react-redux';
import 'normalize.css';
import PostItem from '../postItem/PostItem';

const PostsList = () => {

    const someFiltered = useSelector(state => {
        let newHeroes = state.heroes.heroes;
        Object.keys(state.filters.activeFilter).map(item => {
            newHeroes = newHeroes.filter(oneHero => {
                if (item == 'title'){
                    if (oneHero[item].includes(state.filters.activeFilter[item])) {
                        return oneHero;
                    }
                } else {
                    return oneHero[item] == state.filters.activeFilter[item]
                }
            })
        });
        return newHeroes;
    })

    return (
        <section className="social__posts">
            {someFiltered.length ? 
                    <div className="social__box">
                        {someFiltered.map(item => <PostItem {...item} key={item.id}/>)}
                    </div>
                    :
                    <div className='filter__no'>No such characters</div>
                }
        </section>
    )
}

export default PostsList;