import { useEffect, useState } from "react";
import NewsCard from "../../components/_common/card";
import Loading from "../../components/_common/loading";
import NewsService from "../../services";

const Home = () => {
    const [newsArr, setNewsArr] = useState <any | null> (null);
    const getRandomInt = (min: number, max: number) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
    }
    const random1 = !!newsArr && newsArr[getRandomInt(0,10)];
    const random2 = !!newsArr && newsArr[getRandomInt(11,20)];

    const getRandomArticle = () => {
        NewsService.getResource('everything?q=general&language=en')
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
            {!newsArr && <Loading/>}
            {newsArr && (<div style={{display: "flex", justifyContent: "center", flexWrap: "wrap"}}>
                
                <NewsCard cardObj={random1} cardWidth="600"/>
                <NewsCard cardObj={random2} cardWidth="600"/>
                {newsArr.map((article: any) => <NewsCard key={article.title} cardObj={article} cardWidth="1240"/>)}
            </div>)}
        </>
    );

    
    return jsx;
}

export default Home;