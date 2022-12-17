import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import { ReactComponent as Moon } from '../images/moon.svg';
import { ReactComponent as Panel1 } from '../images/panel1.svg';

function Profile(props) {
  const {
    tcno, ad, soyad, dogumt, yas, boy, kilo, cinsiyet, adres,
  } = props.user;

  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 500,
            height: 50,
          },
        }}
      >
        <Paper elevation={3} sx={{ position: 'relative', left: '9cm' }}>
          <Moon />
          <div style={{
            fontSize: '1cm', display: 'flex', justifyContent: 'center', color: 'white', position: 'relative', bottom: '1.35cm',
          }}
          >
            {`${ad} ${soyad}`}
          </div>
        </Paper>
      </Box>
      <br />
      <br />
      <div style={{ display: 'flex' }}>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
              width: 350,
              height: 350,
            },
          }}
        >
          <Paper elevation={3}>
            <Panel1 />
            <div style={{
              fontSize: '1cm',
              display: 'flex',
              justifyContent: 'center',
              color: 'white',
              position: 'relative',
              bottom: '9cm',
            }}
            >
              YAŞ
            </div>
            <div style={{
              fontSize: '1cm',
              display: 'flex',
              justifyContent: 'center',
              color: 'white',
              position: 'relative',
              bottom: '9cm',
            }}
            >
              {`${yas}`}
            </div>
            <div style={{
              fontSize: '0.5cm',
              display: 'flex',
              justifyContent: 'center',
              color: 'white',
              position: 'relative',
              bottom: '4.5cm',
            }}
            >
              DOĞUM TARİHİ
            </div>
            <div style={{
              fontSize: '1cm',
              display: 'flex',
              justifyContent: 'center',
              color: 'white',
              position: 'relative',
              bottom: '4.5cm',
            }}
            >
              {`${new Date(dogumt).toLocaleDateString('tr-TR', {
                year: 'numeric', month: 'long', day: 'numeric',
              })}`}
            </div>
          </Paper>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
              width: 350,
              height: 350,
            },
          }}
        >
          <Paper elevation={3}>
            <Panel1 />
            <div style={{
              fontSize: '1cm',
              display: 'flex',
              justifyContent: 'center',
              color: 'white',
              position: 'relative',
              bottom: '9cm',
            }}
            >
              KİLO
            </div>
            <div style={{
              fontSize: '1cm',
              display: 'flex',
              justifyContent: 'center',
              color: 'white',
              position: 'relative',
              bottom: '9cm',
            }}
            >
              {`${kilo} kg`}
            </div>
            <div style={{
              fontSize: '1cm',
              display: 'flex',
              justifyContent: 'center',
              color: 'white',
              position: 'relative',
              bottom: '5.5cm',
            }}
            >
              BOY
            </div>
            <div style={{
              fontSize: '1cm',
              display: 'flex',
              justifyContent: 'center',
              color: 'white',
              position: 'relative',
              bottom: '5.5cm',
            }}
            >
              {`${boy} cm`}
            </div>
          </Paper>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
              width: 350,
              height: 350,
            },
          }}
        >
          <Paper elevation={3}>
            <Panel1 />
            <div style={{
              fontSize: '0.8cm',
              display: 'flex',
              justifyContent: 'center',
              color: 'white',
              position: 'relative',
              bottom: '9cm',
            }}
            >
              VÜCUT KİTLE İNDEKSİ
            </div>
            <div style={{
              fontSize: '0.8cm',
              display: 'flex',
              justifyContent: 'center',
              color: 'white',
              position: 'relative',
              bottom: '9cm',
            }}
            >
              İNDEKSİ
            </div>
            <div style={{
              fontSize: '0.8cm',
              display: 'flex',
              justifyContent: 'center',
              color: 'white',
              position: 'relative',
              bottom: '4.5cm',
            }}
            >
              ÖNERİLEN SU MİKTARI
            </div>
            <div style={{
              fontSize: '1cm',
              display: 'flex',
              justifyContent: 'center',
              color: 'white',
              position: 'relative',
              bottom: '4.5cm',
            }}
            >
              {`${boy} cm`}
            </div>
          </Paper>
        </Box>
      </div>

      <div style={{ display: 'flex' }}>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
              width: 350,
              height: 350,
            },
          }}
        >
          <Paper elevation={3}>
            <Panel1 />
            <div style={{
              fontSize: '1cm',
              display: 'flex',
              justifyContent: 'center',
              color: 'white',
              position: 'relative',
              bottom: '9cm',
            }}
            >
              CİNSİYET
            </div>
            <div style={{
              fontSize: '1cm',
              display: 'flex',
              justifyContent: 'center',
              color: 'white',
              position: 'relative',
              bottom: '9cm',
            }}
            >
              {`${cinsiyet === 'M' ? 'Erkek' : 'Kadın'}`}
            </div>
          </Paper>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
              width: 350,
              height: 350,
            },
          }}
        >
          <Paper elevation={3}>
            <Panel1 />
            <div style={{
              fontSize: '1cm',
              display: 'flex',
              justifyContent: 'center',
              color: 'white',
              position: 'relative',
              bottom: '9cm',
            }}
            >
              ADRES
            </div>
            <div style={{
              fontSize: '1cm',
              display: 'flex',
              justifyContent: 'center',
              color: 'white',
              position: 'relative',
              bottom: '6cm',
            }}
            >
              {`${adres === '' ? '-' : adres}`}
            </div>
          </Paper>
        </Box>
      </div>
    </div>
  );
}

Profile.propTypes = {
  user: PropTypes.object,
};

Profile.defaultProps = {
  user: {},
};

export default Profile;
