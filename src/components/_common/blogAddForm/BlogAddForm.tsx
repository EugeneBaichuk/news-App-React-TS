import {FC, useState} from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import {blogListInterface, BlogAddFormProps} from "../../types"

export const BlogAddForm: FC<BlogAddFormProps> = ({ setBlogList, isAuth }) => {
    const defaultCardVal = {
        id: 100,
        name: "",
        img: 'https://i.pinimg.com/736x/99/c7/f8/99c7f8a1584e2d98434eaa9fdc8a7a84.jpg',
        descr: ""
    }
    const defaultErrorInputs = {
        name:  false,
        img: false, 
        descr: false       
    }

    const [addCardForm, setAddCardForm] = useState(false);
    const [addCardVals, setAddCardVals] = useState({...defaultCardVal});
    const [errorInputs, setErrorInputs] = useState({...defaultErrorInputs});
    const {name, img, descr } = addCardVals;

    const onSetNewCardVal = (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setAddCardVals(cardVals => ({
            ...cardVals,
            [key]: e.target.value,

        }));
        setErrorInputs(state => ({...state, [key]: false}));
    }

    const onCancel = () => {
        setAddCardForm(false);
        setAddCardVals({...defaultCardVal});
        setErrorInputs({...defaultErrorInputs});
    }

    const onCheckError = () => {
        setErrorInputs({
            name:  !name,
            img: !img, 
            descr: !descr
        });
    }

    const onAddCard = () => {
        const localBlogList = JSON.parse(localStorage.getItem("blog")!);
        setAddCardForm(false);
        let id = 100;
        const countId = () => {
            const checkId = localBlogList.find((item: blogListInterface )=> item.id === id);
            if (!checkId) {
                return id
            } else {
                id +=1;
                countId();
            }
        }
        setBlogList([...localBlogList, {...addCardVals, id: countId()}]);
        localStorage.setItem("blog",JSON.stringify([...localBlogList, {...addCardVals, id: countId()}]));
        console.log(countId());
        setAddCardVals({...defaultCardVal});
    }
    

    return (
        <>
        {isAuth && !addCardForm && (
            <div style={{margin: '0 40px 40px'}}>
                <Card style={{ display: 'flex', width: "100%", justifyContent: "center"}}>
                    <div style={{padding: "50px 0"}}>
                        <Button onClick={()=> {setAddCardForm(true)}} size="small">Добавить карточку</Button>
                    </div>
                </Card>
            </div>
        )}
        {isAuth && !!addCardForm && <div style={{margin: '0 40px 40px'}}>
            <Card style={{ display: 'flex', width: "100%" }}>
                <img src={addCardVals.img} alt="img" className='card__img' />
                <Box  style={{ display: 'flex', flexDirection: 'column', width: "60%"}}>
                    <CardContent style={{ flex: '1 0 auto' }}>
                    <div>
                        <TextField 
                            onChange={onSetNewCardVal('img')}
                            value={addCardVals.img}
                            error={errorInputs.img}
                            id="standard-basic"
                            label="Image"
                            variant="standard"
                            fullWidth
                        />
                    </div>
                    <div>
                        <TextField 
                            onChange={onSetNewCardVal('name')}
                            value={addCardVals.name}
                            error={errorInputs.name}
                            id="standard-basic"
                            label="Header"
                            variant="standard"
                            fullWidth
                        />
                    </div>
                    <div>
                        <TextField 
                            onChange={onSetNewCardVal('descr')}
                            value={addCardVals.descr}
                            error={errorInputs.descr}
                            id="standard-basic"
                            label="Text"
                            variant="standard"
                            multiline
                            fullWidth
                        />
                    </div>
                    <div>
                        {(name && descr && img) ? 
                        <Button onClick={onAddCard} size="small">Добавить</Button>:
                        <Button onClick={onCheckError} size="small">Добавить</Button>
                        }
                        <Button onClick={onCancel} size="small">Отмена</Button>
                    </div>
                    </CardContent>
                </Box>
            </Card>
        </div>}
        </>
    )
}
