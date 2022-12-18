import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import { Typography } from '@mui/material';
import { ReactComponent as Moon } from '../images/moon.svg';
import Panel1 from '../images/panel1.png';
import Panel5 from '../images/panel5.png';
import Panel2 from '../images/panel2.png';
import Panel3 from '../images/panel3.png';
import Panel4 from '../images/panel4.png';

function Profile(props) {
  const {
    ad, soyad, dogumt, yas, boy, kilo, cinsiyet, adres, doktor_mu,
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
          <Typography sx={{
            fontSize: '1cm', display: 'flex', justifyContent: 'center', color: 'white', position: 'relative', bottom: '1.5cm',
          }}
          >
            {`${ad} ${soyad}`}
          </Typography>
        </Paper>
      </Box>
      <div style={{ display: 'flex', position: 'relative', left: '3cm' }}>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
              width: 300,
              height: 300,
            },
          }}
        >
          <Paper elevation={3}>
            <img src={Panel1} alt="Panel1" width="300" height="300" />
            <Typography sx={{
              fontSize: '0.8cm',
              display: 'flex',
              justifyContent: 'center',
              color: 'white',
              position: 'relative',
              bottom: '8cm',
            }}
            >
              YAŞ
            </Typography>
            <Typography sx={{
              fontSize: '1cm',
              display: 'flex',
              justifyContent: 'center',
              color: 'white',
              position: 'relative',
              bottom: '8cm',
            }}
            >
              {`${yas}`}
            </Typography>
            <Typography sx={{
              fontSize: '0.5cm',
              display: 'flex',
              justifyContent: 'center',
              color: 'white',
              position: 'relative',
              bottom: '5cm',
            }}
            >
              DOĞUM TARİHİ
            </Typography>
            <Typography sx={{
              fontSize: '1cm',
              display: 'flex',
              justifyContent: 'center',
              color: 'white',
              position: 'relative',
              bottom: '5cm',
            }}
            >
              {`${new Date(dogumt).toLocaleDateString('tr-TR', {
                year: 'numeric', month: 'long', day: 'numeric',
              })}`}
            </Typography>
          </Paper>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
              width: 300,
              height: 300,
            },
          }}
        >
          <Paper elevation={3}>
            <img src={Panel2} alt="Panel2" width="300" height="300" />
            <Typography sx={{
              fontSize: '0.8cm',
              display: 'flex',
              justifyContent: 'center',
              color: 'white',
              position: 'relative',
              bottom: '8cm',
            }}
            >
              KİLO
            </Typography>
            <Typography sx={{
              fontSize: '1cm',
              display: 'flex',
              justifyContent: 'center',
              color: 'white',
              position: 'relative',
              bottom: '8.3cm',
            }}
            >
              {`${kilo} kg`}
            </Typography>
            <Typography sx={{
              fontSize: '0.8cm',
              display: 'flex',
              justifyContent: 'center',
              color: 'white',
              position: 'relative',
              bottom: '5.5cm',
            }}
            >
              BOY
            </Typography>
            <Typography sx={{
              fontSize: '1cm',
              display: 'flex',
              justifyContent: 'center',
              color: 'white',
              position: 'relative',
              bottom: '5.7cm',
            }}
            >
              {`${boy} cm`}
            </Typography>
          </Paper>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
              width: 300,
              height: 300,
            },
          }}
        >
          <Paper elevation={3}>
            <img src={Panel3} alt="Panel3" width="300" height="300" />
            <Typography sx={{
              fontSize: '0.7cm',
              display: 'flex',
              justifyContent: 'center',
              color: 'white',
              position: 'relative',
              bottom: '8cm',
              textAlign: 'center',
            }}
            >
              VÜCUT KİTLE İNDEKSİ
            </Typography>
            <Typography sx={{
              fontSize: '1cm',
              display: 'flex',
              justifyContent: 'center',
              color: 'white',
              position: 'relative',
              bottom: '8cm',
              textAlign: 'center',
            }}
            >
              {`${kilo / (boy * boy)}`.slice(0, 5)}
            </Typography>
            <Typography sx={{
              fontSize: '0.7cm',
              display: 'flex',
              justifyContent: 'center',
              color: 'white',
              position: 'relative',
              bottom: '5.5cm',
              textAlign: 'center',
            }}
            >
              ÖNERİLEN SU MİKTARI
            </Typography>
            <Typography sx={{
              fontSize: '1cm',
              display: 'flex',
              justifyContent: 'center',
              color: 'white',
              position: 'relative',
              bottom: '5.5cm',
            }}
            >
              {`${(kilo * 0.03).toString().slice(0, 3)} LT`}
            </Typography>
          </Paper>
        </Box>
      </div>

      <div style={{ display: 'flex', position: 'relative', left: doktor_mu ? '3cm' : '7.2cm' }}>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
              width: 300,
              height: 300,
            },
          }}
        >
          <Paper elevation={3}>
            <img src={Panel4} alt="Panel4" width="300" height="300" />
            <Typography sx={{
              fontSize: '0.8cm',
              display: 'flex',
              justifyContent: 'center',
              color: 'white',
              position: 'relative',
              bottom: '7.7cm',
            }}
            >
              CİNSİYET
            </Typography>
            <Typography sx={{
              fontSize: '1cm',
              display: 'flex',
              justifyContent: 'center',
              color: 'white',
              position: 'relative',
              bottom: '7.7cm',
            }}
            >
              {`${cinsiyet === 'M' ? 'Erkek' : 'Kadın'}`}
            </Typography>
          </Paper>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
              width: 300,
              height: 300,
            },
          }}
        >
          <Paper elevation={3}>
            <img src={Panel5} alt="Panel5" width="300" height="300" />
            <Typography sx={{
              fontSize: '0.8cm',
              display: 'flex',
              justifyContent: 'center',
              color: 'white',
              position: 'relative',
              bottom: '8cm',
            }}
            >
              ADRES
            </Typography>
            <Typography sx={{
              fontSize: '0.6cm',
              display: 'flex',
              justifyContent: 'center',
              color: 'white',
              position: 'relative',
              bottom: '6.5cm',
              textAlign: 'center',
            }}
            >
              {`${adres === '' ? 'YOK' : adres}`}
            </Typography>
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
