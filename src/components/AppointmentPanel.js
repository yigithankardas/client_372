import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import PropTypes from 'prop-types';
import ComboBox3 from './ComboBox3';
import ComboBox4 from './ComboBox4';
import BasicDatePicker from './BasicDatePicker';

function AppointmentPanel(props) {
  const { tcno } = props.user;
  const navigate = useNavigate();
  const [randevuIsmi, setRandevuIsmi] = useState('');
  const [tarih, setTarih] = useState({});
  const [hastaneler, setHastaneler] = useState([]);
  const [hastane, setHastane] = useState('');
  const [doktorlar, setDoktorlar] = useState([]);
  const [doktorTc, setDoktorTc] = useState('');

  function cancel() {
    navigate('/appointments', { replace: true });
  }
  async function save() {
    await axios.put('/randevularim', {
      kullanicitc: tcno, doktortc: doktorTc, randevuismi: randevuIsmi, tarih,
    }).then(() => { navigate('/appointments', { replace: true }); });
  }
  function handleChangeRandevu(event) {
    setRandevuIsmi(event.target.value);
  }

  useEffect(() => {
    (async () => await axios.get('/api/hastaneler'))().then((data) => {
      setHastaneler(data.data);
    });
  }, []);

  useEffect(() => {
    async function getdoktor(hastaneid) {
      return await axios.get('/api/doktorlar', { params: { hastaneid } });
    }
    if (hastaneler.length !== 0) {
      const { hastaneid } = hastaneler.find((item) => (item.hastanead === hastane ? item : null));
      getdoktor(hastaneid).then((data) => {
        setDoktorlar(data.data);
      });
    }
  }, [hastane]);

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
        <Paper variant="outlined" elevation={0}>
          <TextField
            id="filled-basic"
            label="Randevu İsmi"
            variant="filled"
            sx={{
              width: '10cm',
              position: 'relative',
              top: '1cm',
              left: '9cm',
            }}
            onChange={handleChangeRandevu}
          />
          <div
            style={{
              width: '10cm',
              position: 'relative',
              top: '5cm',
              left: '1cm',
            }}
          >
            <ComboBox3
              name="Hastane Seç"
              values={hastaneler}
              setHastane={setHastane}
            />
          </div>
          <div
            style={{
              width: '7cm',
              position: 'relative',
              top: '3.5cm',
              left: '13cm',
            }}
          >
            <ComboBox4 name="Doktor Seç" values={doktorlar} setDoktorTc={setDoktorTc} />
          </div>
          <div
            style={{
              width: '7cm',
              position: 'relative',
              top: '2cm',
              left: '22cm',
            }}
          >
            <BasicDatePicker tarih={tarih} setTarih={setTarih} />
          </div>
          <div style={{ position: 'relative', top: '8cm', left: '11.5cm' }}>
            <Button variant="contained" color="success" sx={{ margin: '1cm' }} onClick={() => { save(); }}>
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

AppointmentPanel.propTypes = {
  user: PropTypes.object,
};

AppointmentPanel.defaultProps = {
  user: {},
};

export default AppointmentPanel;
