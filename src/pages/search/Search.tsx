import NewsList from "../../components/_common/newsList";
import { useEffect, FC } from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { showSearchData } from "../../slice/searchSlice";

export const Search: FC = () => {
    const {search, searchValue} = useSelector(showSearchData);
    const navigate = useNavigate();
    const rout = searchValue ? '/search': '/';
    useEffect(() => {
        navigate(rout);
    }, []);
    return <NewsList search={search} headlines={search}/>
}