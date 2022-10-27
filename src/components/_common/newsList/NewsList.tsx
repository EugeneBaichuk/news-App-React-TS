import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { setActiveCard } from "../../../slice/activeCardSlice";
//import { Link, useLocation, useParams } from "react-router-dom";
import NewsCard from "../card";
import NewsService from "../../../services";
import Loading from "../loading";
// import Pagination from '@mui/material/Pagination';
// import PaginationItem from '@mui/material/PaginationItem';
import './newsList.css'

type propsType = {
    headlines: string
    search?: string
}

export const NewsList: React.FC<propsType> = ({headlines, search}) => {
    const [newsArr, setNewsArr] = useState <any | null> (null);
    
    const dispatch = useDispatch();
    // const location = useLocation();
    // const query = new URLSearchParams(location.search);
    // const page = parseInt(query.get('page') || '1', 10);
    

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
                    {newsArr.map((article: any, id: number) => <NewsCard headline={headlines} key={id} id={id} onShowDetails={onShowDetails} cardObj={article}/>)}
                </div>
                    {/* <Pagination
                        style={{margin:"0 auto 20px", width: "fit-content"}}
                        page={page}
                        count={10}
                        renderItem={(item) => (
                            <PaginationItem
                            component={Link}
                            to={`${item.page}`}
                            {...item}
                        />
                        )}
                    /> */}
                </div>
            )}
        </>
    );
}
