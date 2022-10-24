import { Outlet } from 'react-router';
import LeftNavBar from './components/LeftNavBar';
import { Grid } from '@mui/material';

function App() {
  return (
    <Grid container>
      <LeftNavBar></LeftNavBar>
      <Outlet />
    </Grid>
  );
}

export default App;
