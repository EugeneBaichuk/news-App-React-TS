import {FC} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

type Props = {
  cardObj: any;
  cardWidth: string;
}

export const  NewsCard: FC<Props> =  ({cardObj, cardWidth}) => {
  const {urlToImage, title, description} = cardObj;

  const transformString = (string: string, num: number) => {
    return (string.length > num) ? `${string.slice(0, 70)}...`: string;
  }

  return (
    <Card sx={{ display: 'flex', margin: '0 20px 40px', width: cardWidth }}>
      <CardMedia
        component="img"
        sx={{ width: 200 }}
        image={urlToImage}
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5" style={{textAlign: 'left'}}>
          {transformString(title, 70)}
            
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div" style={{textAlign: 'left'}}>
          {transformString(description, 100)}
          </Typography>
        </CardContent>
      </Box>

    </Card>
  );
}
