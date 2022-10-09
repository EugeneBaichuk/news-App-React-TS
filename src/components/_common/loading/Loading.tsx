import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export default function Loading() {
  return (
    <div>
      <Backdrop
        sx={{ color: '#e2e2e2', margin: "0 0 0 200px" }}
        open
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}