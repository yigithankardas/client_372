import { Grid } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
function Hello(props) {
  return (
    <Grid item xs={8}>
      Hello {props.userType}
    </Grid>
  );
}

Hello.propTypes = {
  userType: PropTypes.number,
};

export default Hello;
