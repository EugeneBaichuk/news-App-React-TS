import { useEffect, useState } from "react";
import NewsCard from "../card";
import NewsService from "../../../services";
import Loading from "../loading";
import './newsList.css'

type propsType = {
    headlines: string
    search?: string
}

export const NewsList: React.FC<propsType> = ({headlines, search}) => {
    const [newsArr, setNewsArr] = useState <any | null> (null);

    useEffect(() => {
        NewsService.getResource(headlines)
        .then(res => {
            setNewsArr(res.data.articles);
        });
    }, [headlines, search]);

    return (
        <>
            {!newsArr && (<Loading/>)}
            {newsArr && (
                <div className="card-wrapper">
                    {newsArr.map((article: any) => <NewsCard key={article.title} cardObj={article}/>)}
                </div>
            )}
        </>
    );
}
