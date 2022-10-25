import { useEffect, useState } from "react";
import { useDispatch} from 'react-redux';
import { setActiveCard } from "../../../slice/activeCardSlice";
import NewsCard from "../card";
import NewsService from "../../../services";
import Loading from "../loading";
import Pagination from '@mui/material/Pagination';
import './newsList.css'

type propsType = {
    headlines: string
    search?: string
}

export const NewsList: React.FC<propsType> = ({headlines, search}) => {
    const [newsArr, setNewsArr] = useState <any | null> (null);
    const dispatch = useDispatch();

    useEffect(() => {
        NewsService.getResource(`everything?q=${headlines}&pageSize=20&language=en`)
        .then(res => {
            setNewsArr(res.data.articles);
        });
    }, [headlines, search]);

    const onShowDetails = (id: number) => {
        const activeCard = newsArr.find((article: any, artId: number) => (id === artId));
        dispatch(setActiveCard(activeCard));
    }  

    return (
        <>
            {!newsArr && (<Loading/>)}
            {newsArr && (
                <div>
                <div className="card-wrapper">
                    {newsArr.map((article: any, id: number) => <NewsCard headlines={headlines} key={id} id={id} onShowDetails={onShowDetails} cardObj={article}/>)}
                </div>
                <Pagination count={10} style={{margin:"0 auto 20px", width: "fit-content"}}/>
                </div>
            )}
        </>
    );
}
