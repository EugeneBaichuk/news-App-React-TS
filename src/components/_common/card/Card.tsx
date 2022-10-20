import {FC} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './card.css'

type Props = {
  cardObj: any;
}

export const  NewsCard: FC<Props> =  ({cardObj}) => {
  const {urlToImage, title, description, publishedAt} = cardObj;
  const transformString = (string: string, num: number, length: number) => {
    return (string.length > num) ? `${string.slice(0, length)}...`: string;
  }

  return (
    <Card style={{ display: 'flex', margin: '0 20px 40px', width: "95%" }}>
      <img src={urlToImage} alt="img" className='card__img'/>
      <Box style={{ display: 'flex', flexDirection: 'column' }}>
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
  );
}
