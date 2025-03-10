import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useSignIn } from 'react-auth-kit';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const theme = createTheme();

function LoginPage(props) {
  const navigate = useNavigate();
  const signIn = useSignIn();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const loginObject = {
      TCNo: data.get('username'),
      Sifre: data.get('password'),
    };
    axios.post('/login', loginObject).then((res) => {
      if (res.status === 200) {
        if (
          signIn({
            token: res.data.token,
            expiresIn: 3600,
            tokenType: 'Bearer',
          })
        ) {
          const userObject = res.data;
          userObject.yas = new Date().getFullYear() - parseInt(userObject.dogumt.slice(0, userObject.dogumt.indexOf('-')), 10);
          props.setUser(userObject);
          if (userObject.doktor_mu) { navigate('/profile', { replace: true }); } else { navigate('/pills', { replace: true }); }
        }
      }
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="TC"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Şifre"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              GİRİŞ YAP
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

LoginPage.propTypes = {
  setUser: PropTypes.func,
};

LoginPage.defaultProps = {
  setUser: () => {},
};

export default LoginPage;
