import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import ComboBoxVaccines from './ComboBoxVaccines';

function VaccinesPanel(props) {
  const { tcno } = props.user;
  const navigate = useNavigate();
  const [rows, setRows] = useState([]);
  const [asiid, setAsiId] = useState('');

  useEffect(() => {
    axios.get('/api/asilar').then((res) => {
      setRows(res.data);
    });
  }, []);

  function cancel() {
    navigate('/vaccines', { replace: true });
  }

  async function save() {
    if (asiid !== '') {
      await axios.put('/asilarim', {
        tcno, asiid, YapilmaTarihi: undefined,
      });
      navigate('/vaccines', { replace: true });
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
              top: '5cm',
              left: '5cm',
            }}
          >
            <ComboBoxVaccines
              name="Aşı Seçiniz"
              values={rows}
              setSelectedItem={setAsiId}
            />
          </div>

          <div style={{ position: 'relative', top: '10cm', left: '11.5cm' }}>
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
VaccinesPanel.propTypes = {
  user: PropTypes.object,
};

VaccinesPanel.defaultProps = {
  user: {},
};

export default VaccinesPanel;
