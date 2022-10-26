import BlogAddForm from '../../components/_common/blogAddForm';
import BlogCard from '../../components/_common/blogCard';
import {useState} from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export const Blog = () => {
  const [blogList, setBlogList] = useState([
    {
      id: 1,
      name: "Американо (Americano)",
      img: "https://coffeefan.info/wp-content/uploads/2018/08/kofejnyj-napitok-amerikano.jpg",
      descr: "эспрессо, разбавленный кипятком в пропорции 1:2 или 1:3. Иногда кипяток подают отдельно."
    },
    {
      id: 2,
      name: "Эспрессо (Espresso)",
      img: "https://coffeefan.info/wp-content/uploads/2018/08/kofe-espresso-v-chashke.jpg",
      active: false,
      animation: "",
      price: 60,
      storeQuantity: 450,
      descr: "крепкий чёрный кофе с золотистой пенкой. Одна порция – 30–35 мл."
    },
    {
      id: 3,
      name: "Капучино (Cappuccino)",
      img: "https://coffeefan.info/wp-content/uploads/2018/08/kofejnyj-napitok-kapuchino.jpg",
      active: false,
      animation: "",
      price: 100,
      storeQuantity: 324,
      descr: "эспрессо с молоком, взбитым в пену, и, по желанию, с карамельным сиропом"
    },
    {
      id: 5,
      name: "Латте (latte)",
      img: "https://coffee61.ru/wa-data/public/photos/68/03/368/368.970.jpg",
      active: false,
      animation: "",
      price: 150,
      storeQuantity: 110,
      descr: " эспрессо с молоком (молоко вливают в кофе), густой молочной пеной сверху и, по желанию, фруктовым сиропом."
    },
    {
      id: 7,
      name: "Раф кофе (Raf coffee)",
      img: "https://ambassador-manufaktura.ru/upload/resize_cache/iblock/ee2/1156_292_040cd750bba9870f18aada2478b24840a/ee232262d03474deb9abcbe6b3f677b5.jpg",
      active: false,
      animation: "",
      price: 150,
      storeQuantity: 95,
      descr: "коктейль (по сути, пена) из эспрессо со сливками и ванильным сахаром, взбитого в капучинаторе."
    },
    {
      id: 8,
      name: "Ирландский кофе (Irish coffee)",
      img: "https://coffeefan.info/wp-content/uploads/2018/09/tradicionnyj-irlandskij-kofe.jpg",
      active: false,
      animation: "",
      price: 250,
      storeQuantity: 70,
      descr: "горячий кофе с ирландским виски, сахаром и пеной из взбитых сливок"
    },
    {
      id: 9,
      name: "Флэт уайт (Flat white)",
      img: "https://ic.pics.livejournal.com/2lumpsofsugar/5964104/849073/849073_800.jpg",
      active: false,
      animation: "",
      price: 170,
      storeQuantity: 250,
      descr: "двойная порция эспрессо, куда добавляют немного горячего молока с пеной."
    }
  ]);
  let localBlogList = JSON.parse(localStorage.getItem("blog")!);
  localBlogList || (localBlogList = localStorage.setItem("blog", JSON.stringify(blogList)));

  const onDeleteCard = (id: number) => (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    const filteredState = localBlogList.filter((item: any) => (item.id !== id));
    setBlogList(filteredState);
    localStorage.setItem("blog", JSON.stringify(filteredState))
}
const [open, setOpen] = useState(false);
const [loginVals, setLoginVals] = useState({
  name: "",
  email: ""
})
const {isAuth} = JSON.parse(localStorage.getItem("blogAuth")!);

const {name,email} = loginVals;

const handleClickOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};

const [formError, setFormError] = useState({
  name: false,
  email: false
});


const handleLogin = () => {
  localStorage.setItem("blogAuth", JSON.stringify({ isAuth: true }));
  handleClose();
};

const onDisabled = () => {
  setFormError({
      name: !name,
      email: !email
  });
}

const onSetLoginVals = (key: string) => (e: any) => {
  setLoginVals(state => ({...state, [key]: e.target.value }))
  setFormError(state => ({...state, [key]: false}));
}

const onBlogLogout = () => {
  localStorage.setItem("blogAuth", JSON.stringify(''))
  setLoginVals({
      name: "",
      email: ""
  });
}


  return (
    <>
    <div>
    {!isAuth && (<Button variant="outlined" onClick={handleClickOpen} style={{margin: "0 40px 20px 0", float: "right"}}>EDIT BLOG</Button>)}
    {!!isAuth && (<Button variant="outlined" onClick={onBlogLogout} style={{margin: "0 40px 20px 0", float: "right"}}>LOG OUT</Button>)}
    <Dialog open={open} onClose={handleClose}>
    <DialogTitle>LOG IN</DialogTitle>
        <DialogContent>
        <DialogContentText>
            To log in this website, please enter your name and email address here.
        </DialogContentText>
        <TextField
            error={formError.name}
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            value={name}
            onChange={onSetLoginVals('name')}
            fullWidth
            variant="standard"
        />
        <TextField
        error={formError.email}
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            value={email}
            onChange={onSetLoginVals('email')}
            fullWidth
            variant="standard"
        />
        </DialogContent>
        <DialogActions>
            {(name && email) ? <Button onClick={handleLogin}>Log in</Button>: <Button onClick={onDisabled}>Log in</Button>}
        </DialogActions>
      </Dialog>
    </div>
      {localBlogList.map((item: any) => <BlogCard isAuth={isAuth} key={item.id} onDeleteCard={onDeleteCard} {...item}/>)}
      <BlogAddForm isAuth={isAuth} setBlogList={setBlogList}/>
    </>
  )
}
