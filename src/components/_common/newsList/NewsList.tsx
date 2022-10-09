import { useEffect, useState } from "react";
import NewsCard from "../card";
import NewsService from "../../../services";
import Loading from "../loading";

type propsType = {
    headlines: string
    search?: string
}

export const NewsList: React.FC<propsType> = ({headlines, search}) => {
    const [newsArr, setNewsArr] = useState <any> (null);

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
                <div style={{display: "flex", justifyContent: "center", flexWrap: "wrap"}}>
                    {newsArr.map((article: any) => <NewsCard key={article.title} cardObj={article} cardWidth={"93%"}/>)}
                </div>
            )}
        </>
    );
}
