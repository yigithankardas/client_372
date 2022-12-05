import { Button, Grid } from '@mui/material';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

function SetUsage(props) {
  const {
    kullanmasayisi, siklik, tcno, ilacid,
  } = props.row;
  const [count, setCount] = useState(kullanmasayisi);

  async function increment() {
    if (count < siklik) {
      await axios.put('/ilaclarim', { tcno, kullanmasayisi: count + 1, ilacid });
      setCount(count + 1);
    }
  }

  async function decrement() {
    if (count > 0) {
      await axios.put('/ilaclarim', { tcno, kullanmasayisi: count - 1, ilacid });
      setCount(count - 1);
    }
  }

  return (
    <Grid item>
      <Button variant="outlined" onClick={() => { increment(); }}>
        +
      </Button>
      <Button variant="outlined" onClick={() => { decrement(); }}>
        -
      </Button>
      <div
        style={{ paddingRight: '1cm', fontSize: '0.7cm' }}
      >
        {`${count} / ${siklik}`}

      </div>
    </Grid>
  );
}

SetUsage.propTypes = {
  row: PropTypes.object,
};

SetUsage.defaultProps = {
  row: {},
};

export default SetUsage;
