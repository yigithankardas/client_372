import LeftNavBar from './components/LeftNavBar';
import { Grid } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Hello from './pages/Hello';
import BlankPage from './pages/BlankPage';

function App() {
  return (
    <>
      <Grid container>
        <LeftNavBar />
        <Routes>
          <Route path="/hello" element={<Hello />} />
          <Route path="/blank" element={<BlankPage />} />
        </Routes>
      </Grid>
    </>
  );
}

export default App;
