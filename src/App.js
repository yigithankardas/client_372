import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { RequireAuth } from 'react-auth-kit';

import BlankPage from './pages/BlankPage';
import LoginPage from './pages/LoginPage';
import Pills from './pages/Pills';
import Vaccines from './pages/Vaccines';
import Appointments from './pages/Appointments';
import PillPanel from './components/PillPanel';
import LeftNavBar from './components/LeftNavBar';

function App() {
  const [userType, setUserType] = useState(0);
  return (
    <Routes>
      <Route path="/login" element={<LoginPage setUserType={setUserType} />} />
      <Route
        path="/"
        element={(
          <RequireAuth loginPath="/login">
            <Grid container>
              <LeftNavBar userType={userType} />
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
              <Pills userType={userType} />
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
              <PillPanel />
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
              <Vaccines userType={userType} />
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
              <Appointments userType={userType} />
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
              <Vaccines userType={userType} />
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
              <Appointments userType={userType} />
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
              <Vaccines userType={userType} />
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
              <Appointments userType={userType} />
            </Grid>
          </RequireAuth>
        )}
      />
      <Route
        path="/blank"
        element={(
          <RequireAuth loginPath="/login">
            <Grid container>
              <LeftNavBar />
              <BlankPage />
            </Grid>
          </RequireAuth>
        )}
      />
    </Routes>
  );
}

export default App;
