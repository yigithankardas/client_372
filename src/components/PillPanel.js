import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import ComboBox from './ComboBox';

function PillPanel() {
  const navigate = useNavigate();
  function cancel() {
    navigate('/pills', { replace: true });
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
              values={['parol', 'zattiri', 'zort', 'zort2']}
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
            <ComboBox name="Sıklık Seç" values={[1, 2, 3, 4]} />
          </div>
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

export default PillPanel;
