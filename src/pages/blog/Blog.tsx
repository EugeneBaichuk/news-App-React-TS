import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export const Blog = () => {
  const obj = {
    title: "Americano",
    text: "Yyyyppeee, drink-drink",
    img: "https://www.craftcoffeeguru.com/wp-content/uploads/2019/02/americano12.jpg",
    id: 1
  }

  return (
    <div style={{margin: '0 40px 40px'}}>
      <Card style={{ display: 'flex', width: "100%" }}>
        <img src={obj.img} alt="img" className='card__img'/>
        <Box  style={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent style={{ flex: '1 0 auto' }}>
            <div className='card__title'>
              {obj.title}
            </div>
            <div className='card__text'>
              {obj.text}
            </div>
          </CardContent>
        </Box>
      </Card>
    </div>
  )
}
