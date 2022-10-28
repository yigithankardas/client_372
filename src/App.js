import LeftNavBar from './components/LeftNavBar';
import { Grid } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Hello from './pages/Hello';
import BlankPage from './pages/BlankPage';
import LoginPage from './pages/LoginPage';
import { RequireAuth } from 'react-auth-kit';
import { useState } from 'react';

function App() {
  const [userType, setUserType] = useState(0);
  return (
    <Routes>
      <Route path="/login" element={<LoginPage setUserType={setUserType} />} />
      <Route
        path="/"
        element={
          <RequireAuth loginPath={'/login'}>
            <Grid container>
              <LeftNavBar userType={userType} />
            </Grid>
          </RequireAuth>
        }
      />
      <Route
        path="/hello"
        element={
          <RequireAuth loginPath={'/login'}>
            <Grid container>
              <LeftNavBar />
              <Hello userType={userType} />
            </Grid>
          </RequireAuth>
        }
      />
      <Route
        path="/blank"
        element={
          <RequireAuth loginPath={'/login'}>
            <Grid container>
              <LeftNavBar />
              <BlankPage />
            </Grid>
          </RequireAuth>
        }
      />
    </Routes>
  );
}

export default App;
