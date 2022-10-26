import {FC} from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

type Props = {
    isAuth: boolean
    img: string,
    name: string,
    descr: string,
    id: number,
    onDeleteCard: (id: number) => (e: React.MouseEvent<HTMLElement>) => void,
}

export const BlogCard: FC<Props> = ({img, name, descr, onDeleteCard, id, isAuth}) => {
    return (
    <div style={{margin: '0 40px 40px'}}>
        <Card style={{ display: 'flex', width: "100%", justifyContent: "space-between" }}>
            <div style={{ display: 'flex' }}>
            <img src={img} alt="img" className='card__img'/>
            <Box  style={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent style={{ flexGrow:"2" }}>
                    <div className='card__title'>
                        {name}
                    </div>
                    <div className='card__text'>
                        {descr}
                    </div>
                </CardContent>
            </Box>
            </div>

            {isAuth && <Button onClick={onDeleteCard(id)} size="small"><DeleteOutlinedIcon /></Button>}
        </Card>
    </div>)
}
