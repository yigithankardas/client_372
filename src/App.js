import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { RequireAuth } from 'react-auth-kit';

import LoginPage from './pages/LoginPage';
import Pills from './pages/Pills';
import Vaccines from './pages/Vaccines';
import Appointments from './pages/Appointments';
import PillPanel from './components/PillPanel';
import LeftNavBar from './components/LeftNavBar';

function App() {
  const [user, setUser] = useState({});
  return (
    <Routes>
      <Route path="/login" element={<LoginPage setUser={setUser} />} />
      <Route
        path="/"
        element={(
          <RequireAuth loginPath="/login">
            <Grid container>
              <LeftNavBar user={user} />
            </Grid>
          </RequireAuth>
        )}
      />
      <Route
        path="/pills"
        element={(
          <RequireAuth loginPath="/login">
            <Grid container>
              <LeftNavBar />
              <Pills user={user} />
            </Grid>
          </RequireAuth>
        )}
      />
      <Route
        path="/pills/add"
        element={(
          <RequireAuth loginPath="/login">
            <Grid container>
              <LeftNavBar />
              <PillPanel user={user} />
            </Grid>
          </RequireAuth>
        )}
      />
      <Route
        path="/vaccines"
        element={(
          <RequireAuth loginPath="/login">
            <Grid container>
              <LeftNavBar />
              <Vaccines user={user} />
            </Grid>
          </RequireAuth>
        )}
      />
      <Route
        path="/appointments"
        element={(
          <RequireAuth loginPath="/login">
            <Grid container>
              <LeftNavBar />
              <Appointments user={user} />
            </Grid>
          </RequireAuth>
        )}
      />
    </Routes>
  );
}

export default App;
