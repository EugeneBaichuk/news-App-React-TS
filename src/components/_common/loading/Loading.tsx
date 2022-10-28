import Backdrop from '@mui/material/Backdrop';
import {FC} from "react";
import CircularProgress from '@mui/material/CircularProgress';

export const Loading: FC = () => {
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

export default Loading;