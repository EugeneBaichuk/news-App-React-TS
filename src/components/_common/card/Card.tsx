import {FC} from 'react';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './card.css'

type Props = {
  headlines: string,
  cardObj: any;
  id: number;
  onShowDetails: (id: number) => void
}

export const  NewsCard: FC<Props> =  ({cardObj, id, onShowDetails}) => {
  const {urlToImage, title, description, publishedAt} = cardObj;
  const transformString = (string: string, num: number, length: number) => {
    return (string.length > num) ? `${string.slice(0, length)}...`: string;
  }
  
  return (
    <Link to={`${id}`} style={{textDecoration: 'none', width: '100%', margin: '0 20px 40px',}}>
      <Card onClick={() => onShowDetails(id)} style={{ display: 'flex', width: "100%" }}>
        <img src={urlToImage || "https://whey.kz/267px-kirkland_signature_logo-svg/"} alt="img" className='card__img'/>
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
