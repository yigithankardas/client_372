import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import ComboBox from './ComboBox';

function VaccinesPanel() {
  const navigate = useNavigate();
  function cancel() {
    navigate('/vaccines', { replace: true });
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
              left: '10cm',
            }}
          >
            <ComboBox
              name="Aşı Seçiniz"
              values={['corona', 'zattiri', 'zort', 'zort2']}
            />
          </div>
          <div
            style={{
              width: '5cm',
              position: 'relative',
              top: '3.5cm',
              left: '18cm',
            }}
          />
          <div style={{ position: 'relative', top: '10cm', left: '11.5cm' }}>
            <Button variant="contained" color="success" sx={{ margin: '1cm' }}>
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

export default VaccinesPanel;
