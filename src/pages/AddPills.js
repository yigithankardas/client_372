import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import ComboBoxCount from './ComboBoxCount';
import ComboBoxPatient from './ComboBoxPatient';
import ComboBoxPill from './ComboBoxPill';

function AddPills(props) {
  const { tcno } = props.user;
  const navigate = useNavigate();
  const [rows, setRows] = useState([]);
  const [ilacid, setIlacId] = useState('');
  const [siklik, setSiklik] = useState(1);
  const [kullanicitc, setPatient] = useState('');
  const [rows2, setRows2] = useState([]);

  useEffect(() => {
    async function getData() {
      if (kullanicitc !== '') {
        await axios.get('/api/ilaclar').then(async (res) => {
          const allPills = res.data;
          await axios.get('/ilaclarim', { params: { tcno: kullanicitc } }).then((res2) => {
            const userPills = res2.data;
            const resultArray = [];
            for (let i = 0; i < allPills.length; i += 1) {
              const curr = allPills[i];
              let found = false;
              for (let j = 0; j < userPills.length; j += 1) {
                if (curr.ilacid === userPills[j].ilacid) {
                  found = true;
                  break;
                }
              }
              if (!found) {
                resultArray.push(curr);
              }
            }
            setRows(resultArray);
          });
        });
      }
    }
    getData();
  }, [kullanicitc]);

  useEffect(() => {
    async function getUsers() {
      await axios.get('/api/kullanicilar').then((res) => {
        setRows2(res.data);
      });
    }
    getUsers();
  }, []);

  function cancel() {
    navigate('/profile', { replace: true });
  }
  async function save() {
    if (ilacid !== '' && kullanicitc !== '') {
      await axios.put('/ilaclarim', {
        tcno: kullanicitc, ilacid, siklik,
      });
      await axios.put('/yazar', {
        doktortc: tcno, ilacid, yaztarih: new Date(), kullanicitc,
      });
      navigate('/profile', { replace: true });
    }
  }

  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 2,
            width: 1220,
            height: 650,
            backgroundColor: 'rgba(200, 200, 200, 0.5)',
          },
        }}
      >
        <Paper variant="outlined" elevation={6}>
          <div
            style={{
              width: '10cm',
              position: 'relative',
              top: '5.9cm',
              left: '11cm',
            }}
          >
            <ComboBoxPill
              name="İlaç Seç"
              values={rows}
              setSelectedItem={setIlacId}
            />
          </div>
          <div
            style={{
              width: '5cm',
              position: 'relative',
              top: '4.4cm',
              left: '22cm',
            }}
          >
            <ComboBoxCount
              name="Sıklık Seç"
              values={[1, 2, 3, 4]}
              setSelectedSiklik={setSiklik}
            />
          </div>
          <div
            style={{
              width: '8cm',
              position: 'relative',
              top: '3cm',
              left: '2cm',
            }}
          >
            <ComboBoxPatient
              name="Hasta Seç"
              values={rows2}
              setSelectedPatient={setPatient}
            />
          </div>
          <div style={{
            position: 'relative', top: '10cm', left: '11.5cm', width: '10cm',
          }}
          >
            <Button
              variant="contained"
              color="success"
              sx={{ margin: '1cm' }}
              onClick={() => { save(); }}
            >
              Kaydet
            </Button>
            <Button
              variant="contained"
              color="error"
              sx={{ margin: '1cm' }}
              onClick={() => { cancel(); }}
            >
              İptal
            </Button>
          </div>
        </Paper>
      </Box>
    </div>
  );
}

AddPills.propTypes = {
  user: PropTypes.object,
};

AddPills.defaultProps = {
  user: {},
};

export default AddPills;
