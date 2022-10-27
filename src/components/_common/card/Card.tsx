import {FC} from 'react';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './card.css'
import {cardInterface} from "../../types";

type NewsCardProps = {
  headline: string,
  cardObj: cardInterface;
  id: number;
  onShowDetails: (id: number) => void
}

export const  NewsCard: FC<NewsCardProps> =  ({headline, cardObj, id, onShowDetails}) => {
  const {urlToImage, title, description, publishedAt} = cardObj;
  console.log(cardObj);
  
  const transformString = (string: string, num: number, length: number) => {
    return (string.length > num) ? `${string.slice(0, length)}...`: string;
  }
  
  return (
    <Link to={`${headline}/${id}`} style={{textDecoration: 'none', width: '100%', margin: '0 20px 40px',}}>
      <Card onClick={() => onShowDetails(id)} style={{ display: 'flex', width: "100%" }}>
        <img src={urlToImage || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcnyHcErjXASFe1Imj6U_2lmC6xN-UCNyNKuIvSB21UX3ooLyEgBXgnNWo2TBz6pE9gME&usqp=CAU"} alt="img" className='card__img'/>
        <Box  style={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent style={{ flex: '1 0 auto' }}>
            <div className='card__date'>
              {`date: ${publishedAt.slice(0,10)} time: ${publishedAt.slice(11,19)}`}
            </div>
            <div className='card__title'>
              {transformString(title, 70, 70)}
            </div>
            <div className='card__text'>
              {transformString(description, 200, 200)}
            </div>
          </CardContent>
        </Box>
      </Card>
    </Link>
  );
}
