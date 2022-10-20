import { CustomLink } from '../../components/_common/customLink/CustomLink';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function Login() {
    const handleLogin = () => {
        localStorage.setItem("auth", JSON.stringify({ isAuth: true }));
    };

return (
    <div>
        <Dialog open>
        <DialogTitle>LOG IN</DialogTitle>
        <DialogContent>
        <DialogContentText>
            To log in this website, please enter your name and email address here.
        </DialogContentText>
        <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="email"
            fullWidth
            variant="standard"
        />
        <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
        />
        </DialogContent>
        <DialogActions>
        <CustomLink to="/">
            <Button onClick={handleLogin}>Log in</Button>
        </CustomLink>
        </DialogActions>
    </Dialog>
    </div>
);
}
