import {useSelector} from "react-redux";
import {useState, useEffect} from "react";
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useNavigate, useParams} from 'react-router-dom';
import { showActiveCard } from "../../slice/activeCardSlice";
import Loading from "../../components/_common/loading";
import NewsService from "../../services"

export default function ActiveCard() {
    const [newsArr, setNewsArr] = useState <any | null> (null);
    const {headline, id = 100} = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        NewsService.getResource(`everything?q=${headline}&pageSize=20&language=en`)
        .then(res => {
            setNewsArr(res.data.articles);
        });
    },[]);

    const activeCard = !!newsArr && newsArr.find((article: any, artId: number) => ((+id) === artId));
    return (
        <>
        {!newsArr && (<Loading/>)}
        {!!newsArr && (<article style={{ margin: "0 50px 70px 25px"}}>
            <Button onClick={() => navigate(-1)} style={{margin: "0 0 5px"}} size="large"><ArrowBackIcon/> BACK</Button>
            <img style={{display: "block", width:"70%", height: "300px", objectFit: "cover"}}  src={activeCard.urlToImage || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcnyHcErjXASFe1Imj6U_2lmC6xN-UCNyNKuIvSB21UX3ooLyEgBXgnNWo2TBz6pE9gME&usqp=CAU"} alt="img" />
            <div className='card__date'>
            {`date: ${activeCard.publishedAt.slice(0,10)} time: ${activeCard.publishedAt.slice(11,19)}`}
            </div>
            <div className='card__title'>
                {activeCard.title}
            </div>
            <div className='card__text' style={{margin: "10px 0"}}>
                {activeCard.description} 
            </div>
            <div className='card__text'>
                <span>Full text of the article is available at the official source:</span> <a href={activeCard.url} target="_blank">Link to the source</a> <br/> 
            </div>
        </article>)}
        </>
    );
}