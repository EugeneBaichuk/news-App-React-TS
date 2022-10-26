import {useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function LoginFormDialog() {

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
    <div>
    {!isAuth && (<Button variant="outlined" onClick={handleClickOpen}>EDIT BLOG</Button>)}
    {!!isAuth && (<Button variant="outlined" onClick={onBlogLogout}>LOG OUT</Button>)}
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
  );
}