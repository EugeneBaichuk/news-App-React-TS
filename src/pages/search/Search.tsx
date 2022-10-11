import NewsList from "../../components/_common/newsList";
import { useContext, useEffect } from "react";
import { Context } from "../../App";
import { useNavigate } from 'react-router-dom';
import {SearchT} from '../../App'

// interface SearchT {
//     search: Array<string | any>
//     searchVal: Array<string | any>
//     setCurrentSearchVal: () => void;
// }

export const Search = () => {
    const [searchVal] = useContext<SearchT>(Context).searchVal;
    console.log(Context);
    const navigate = useNavigate();
    const rout = searchVal ? '/search': '/';
    useEffect(() => {
        navigate(rout);
    }, []);
    const [search] = useContext(Context).search;
    return <NewsList search={search} headlines={`everything?q=${search}&language=en&sortBy=popularity`}/>
}