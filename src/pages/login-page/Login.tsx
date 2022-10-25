import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setLoginVals } from "../../slice/loginSlice"

import { CustomLink } from '../../components/_common/customLink/CustomLink';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { showLoginData } from '../../slice/loginSlice';

export default function Login() {
    const [formError, setFormError] = useState({
        name: false,
        email: false
    });
    const {name, email} = useSelector(showLoginData)
    const dispatch = useDispatch();
    
    const handleLogin = () => {
        localStorage.setItem("auth", JSON.stringify({ isAuth: true , name, email }));
    };

    const onDisabled = () => {
        setFormError({
            name: !name,
            email: !email
        });
    }

    const onSetLoginVals = (param: string) => (e: any) => {
        dispatch(setLoginVals({val: e.target.value, param}))
        setFormError(state => ({...state, [param]: false}));
    }

return (
    <div>
        <Dialog open>
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
            {(name && email) ? <CustomLink to="/"><Button onClick={handleLogin}>Log in</Button></CustomLink>: <Button onClick={onDisabled}>Log in</Button>}
        </DialogActions>
    </Dialog>
    </div>
);
}
