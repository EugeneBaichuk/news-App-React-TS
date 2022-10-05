import { useEffect, useState } from "react";
import NewsCard from "../../components/card";
import NewsService from "../../services";

type propsType = {
    category: string
}

export const NewsList: React.FC<propsType> = ({category}) => {
    const [newsArr, setNewsArr] = useState <any> (null);

    const getRandomArticle = () => {
        NewsService.getResource(`top-headlines?country=ru&category=${category}`)
        .then(res => {
            setNewsArr(res.data.articles);
        });
    }

    useEffect(() => {
        getRandomArticle();
        const currentInterval = setInterval(getRandomArticle, 5000);
        return () => {clearInterval(currentInterval)};
    }, []);

    const jsx = (
        <>
            {!newsArr && (<div>Loading...</div>)}
            {newsArr && (
                <div style={{display: "flex", justifyContent: "center", flexWrap: "wrap"}}>
                    {newsArr.map((article: any) => <NewsCard key={article.title} cardObj={article} cardWidth={"93%"}/>)}
                </div>
            )}
        </>
    );

    return jsx;
}
