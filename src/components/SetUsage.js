import { Button, Grid } from '@mui/material';
import React, { useState } from 'react';

function SetUsage() {
  const [count, setCount] = useState(0);

  function increment() {
    if (count < 3) setCount(count + 1);
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
        {`${count} / 3`}

      </div>
    </Grid>
  );
}

export default SetUsage;
