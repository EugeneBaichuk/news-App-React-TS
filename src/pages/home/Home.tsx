import { useEffect, useState } from "react";
import RandomCard from "../../components/card";
import NewsService from "../../services";

const Home = () => {
    const [newsArr, setNewsArr] = useState <any> (null);

    const getRandomInt = (min: number, max: number) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
    }

    const random1 = !!newsArr && newsArr[getRandomInt(0,10)];
    const random2 = !!newsArr && newsArr[getRandomInt(11,20)];

    const getRandomArticle = () => {
        NewsService.getResource()
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
            {newsArr && (<div style={{display: "flex", justifyContent: "center", flexWrap: "wrap"}}>
                <RandomCard cardObj={random1} cardWidth={600}/>
                <RandomCard cardObj={random2} cardWidth={600}/>
                {newsArr.map((article: any) => <RandomCard key={article.title} cardObj={article} cardWidth={1240}/>)}
            </div>)}
        </>
    );

    
    return jsx;
}

export default Home;