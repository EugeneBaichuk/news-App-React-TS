import BlogAddForm from '../../components/_common/blogAddForm';
import BlogCard from '../../components/_common/blogCard';
import {useState, FC} from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { blogListInterface, loginValsInterface, formErrorInterface } from '../../components/types';

export const Blog: FC = () => {
  const [blogList, setBlogList] = useState<Array<blogListInterface>>([
    {
      id: 1,
      name: "Americano",
      img: "https://coffeefan.info/wp-content/uploads/2018/08/kofejnyj-napitok-amerikano.jpg",
      descr: "Americano is a type of coffee drink prepared by diluting an espresso with hot water, giving it a similar strength to, but different flavor from, traditionally brewed coffee. Its strength varies with the number of shots of espresso and amount of water added. The name is also spelled with varying capitalization and use of diacritics: e.g., café americano. In Italy, caffè americano may mean either espresso with hot water or long-filtered coffee, but the latter is more precisely called caffè all'americana"
    },
    {
      id: 2,
      name: "Espresso",
      img: "https://coffeefan.info/wp-content/uploads/2018/08/kofe-espresso-v-chashke.jpg",
      descr: "Espresso is a coffee-brewing method of Italian origin, in which a small amount of nearly boiling water (about 90 °C or 190 °F) is forced under 9–10 bars (900–1,000 kPa; 130–150 psi) of pressure through finely-ground coffee beans. Espresso can be made with a wide variety of coffee beans and roast degrees. Espresso is the most common way of making coffee in southern Europe, especially in Italy, France, Spain, and Portugal. It is also popular in Switzerland, Croatia, Bosnia and Herzegovina, Bulgaria, Greece, South Africa and Australia."
    },
    {
      id: 3,
      name: "Cappuccino",
      img: "https://coffeefan.info/wp-content/uploads/2018/08/kofejnyj-napitok-kapuchino.jpg",
      descr: "Cappuccino is an espresso-based coffee drink that originated in Italy and is prepared with steamed milk foam (microfoam). Variations of the drink involve the use of cream instead of milk, using non-dairy milk substitutes and flavoring with cinnamon or chocolate powder. It is typically smaller in volume than a caffè latte, with a thicker layer of microfoam."
    },
    {
      id: 5,
      name: "Latte",
      img: "https://coffee61.ru/wa-data/public/photos/68/03/368/368.970.jpg",
      descr: "Caffè latte, often shortened to just latte in English, is a coffee beverage of Italian origin made with espresso and steamed milk. Variants include the chocolate-flavored mocha or replacing the coffee with another beverage base such as masala chai (spiced Indian tea), mate, matcha, turmeric, or rooibos; alternatives to milk, such as soy milk or almond milk, are also used."
    },
    {
      id: 7,
      name: "Raf coffee",
      img: "https://ambassador-manufaktura.ru/upload/resize_cache/iblock/ee2/1156_292_040cd750bba9870f18aada2478b24840a/ee232262d03474deb9abcbe6b3f677b5.jpg",
      descr: "Raf or raf coffee is a popular coffee drink in Russia and the countries of the former USSR, which appeared in the late 1990s. Prepared by adding cream and vanilla sugar to a single shot of espresso and then foaming the mix with a steam heater. The main differences from latte are the use of vanilla sugar and cream instead of milk and the fact that the whole mix is foamed together instead of just milk. Syrup is often used instead of vanilla sugar."
    },
    {
      id: 8,
      name: "Irish coffee",
      img: "https://coffeefan.info/wp-content/uploads/2018/09/tradicionnyj-irlandskij-kofe.jpg",
      descr: "Irish coffee (Irish: caife Gaelach) is a caffeinated alcoholic drink consisting of Irish whiskey, hot coffee, and sugar, stirred, and topped with cream (sometimes cream liqueur) The coffee is drunk through the cream. Irish whiskey and at least one level teaspoon of sugar are poured over black coffee and stirred in until fully dissolved. Thick cream is carefully poured over the back of a spoon initially held just above the surface of the coffee and gradually raised a little until the entire layer is floated"
    },
    {
      id: 9,
      name: "Flat white",
      img: "https://ic.pics.livejournal.com/2lumpsofsugar/5964104/849073/849073_800.jpg",
      descr: "A flat white is a coffee drink consisting of espresso with microfoam (steamed milk with small, fine bubbles and a glossy or velvety consistency). It is comparable to a latte, but smaller in volume and with less microfoam, therefore having a higher proportion of coffee to milk, and milk that is more velvety in consistency – allowing the espresso to dominate the flavour, while being supported by the milk."
    }
  ]);
  let localBlogList = JSON.parse(localStorage.getItem("blog")!);
  localBlogList || (localBlogList = localStorage.setItem("blog", JSON.stringify(blogList)));

  const onDeleteCard = (id: number) => (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    const filteredState = localBlogList.filter((item: blogListInterface) => (item.id !== id));
    setBlogList(filteredState);
    localStorage.setItem("blog", JSON.stringify(filteredState))
}
  const [open, setOpen] = useState<boolean>(false);
  const [loginVals, setLoginVals] = useState<loginValsInterface>({
    name: "",
    email: ""
  })
  const {isAuth} = JSON.parse(localStorage.getItem("blogAuth")!) || false;

  const {name,email} = loginVals;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [formError, setFormError] = useState<formErrorInterface>({
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

  const onSetLoginVals = (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
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
    <DialogTitle>LOG IN BLOG EDIT MODE</DialogTitle>
        <DialogContent>
        <DialogContentText>
            To log in blog edit mode, please enter your name and email address here.
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
      {localBlogList.map((item: blogListInterface) => <BlogCard isAuth={isAuth} key={item.id} onDeleteCard={onDeleteCard} {...item}/>)}
      <BlogAddForm isAuth={isAuth} setBlogList={setBlogList}/>
    </>
  )
}
