import NewsList from "../../components/_common/newsList";
import { useContext, useEffect } from "react";
import { Context } from "../../App";
import { useNavigate } from 'react-router-dom';

export const Search = () => {
    const [searchVal] = useContext(Context).searchVal;
    const navigate = useNavigate();

    useEffect(() => {
        const rout = searchVal ? '/search': '/';
        navigate(rout);
    }, []);

    const [search] = useContext(Context).search;
    return <NewsList search={search} headlines={`everything?q=${search}&language=en&sortBy=popularity`}/>
}