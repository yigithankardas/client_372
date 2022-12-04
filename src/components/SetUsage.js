import { Button, Grid } from '@mui/material';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

function SetUsage(props) {
  const { siklik, kullanmasayisi } = props;
  const [count, setCount] = useState(kullanmasayisi);

  function increment() {
    if (count < siklik) setCount(count + 1);
  }

  function decrement() {
    if (count > 0) setCount(count - 1);
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
  siklik: PropTypes.number,
  kullanmasayisi: PropTypes.number,
};

SetUsage.defaultProps = {
  siklik: 0,
  kullanmasayisi: 0,
};

export default SetUsage;
