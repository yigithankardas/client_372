import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import ComboBox from './ComboBox';
import ComboBox2 from './ComboBox2';

function PillPanel(props) {
  const { tcno } = props.user;
  const navigate = useNavigate();
  const [rows, setRows] = useState([]);
  const [ilacid, setIlacId] = useState('');
  const [siklik, setSiklik] = useState(1);

  useEffect(() => {
    axios.get('/api/ilaclar').then((res) => {
      setRows(res.data);
    });
  }, []);
  function cancel() {
    navigate('/pills', { replace: true });
  }
  async function save() {
    if (ilacid !== '') {
      await axios.put('/ilaclarim', {
        tcno, kullanmasayisi: 0, ilacid, siklik,
      });
      navigate('/pills', { replace: true });
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
            <ComboBox
              name="İlaç Seç"
              values={rows}
              setSelectedItem={setIlacId}
            />
          </div>
          <div
            style={{
              width: '5cm',
              position: 'relative',
              top: '3.5cm',
              left: '18cm',
            }}
          >
            <ComboBox2
              name="Sıklık Seç"
              values={[1, 2, 3, 4]}
              setSelectedSiklik={setSiklik}
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

PillPanel.propTypes = {
  user: PropTypes.object,
};

PillPanel.defaultProps = {
  user: {},
};

export default PillPanel;
