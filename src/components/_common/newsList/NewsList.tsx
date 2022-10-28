import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setActiveCard } from "../../../slice/activeCardSlice";
import { getData, showData } from "../../../slice/getDataSlice";
//import { Link, useLocation, useParams } from "react-router-dom";
import NewsCard from "../card";
import NewsService from "../../../services";
import Loading from "../loading";
import { NewsListProps, cardInterface } from "../../types";
// import Pagination from '@mui/material/Pagination';
// import PaginationItem from '@mui/material/PaginationItem';
import './newsList.css'

export const NewsList: React.FC<NewsListProps> = ({headlines, search}) => {
    const dispatch = useDispatch();
    const newsArr = useSelector(showData);
    const loaded = newsArr[0]

    // const location = useLocation();
    // const query = new URLSearchParams(location.search);
    // const page = parseInt(query.get('page') || '1', 10);

    useEffect(() => {
        NewsService.getResource(`everything?q=${headlines}&pageSize=20&language=en`)
        .then(res => {
            dispatch(getData(res.data.articles))
        });
    }, [headlines, search]);

    const onShowDetails = (id: number) => {
        const activeCard = newsArr.find((article: cardInterface, artId: number) => (id === artId));
        dispatch(setActiveCard(activeCard));
    }  

    return (
        <>
            {!loaded && (<Loading/>)}
            {loaded && (
                <div>
                <div className="card-wrapper">
                    {newsArr.map((article: cardInterface, id: number) => <NewsCard headline={headlines} key={id} id={id} onShowDetails={onShowDetails} cardObj={article}/>)}
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
