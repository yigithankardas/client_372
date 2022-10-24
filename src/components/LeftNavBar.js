import { Drawer } from '@mui/material';
import React from 'react';

function LeftNavBar() {
  return (
    <Drawer anchor="left" open={true}>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <button>5</button>
    </Drawer>
  );
}

export default LeftNavBar;
