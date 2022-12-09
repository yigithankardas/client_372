import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@mui/material';

function PillDetails(props) {
  const { ilacid } = useParams();
  const navigate = useNavigate();
  return (
    <>
      <div>PillDetails</div>
      <Button
        variant="contained"
        color="error"
        sx={{ margin: '1cm' }}
        onClick={() => { navigate('/pills', { replace: true }); }}
      >
        Geri
      </Button>
    </>
  );
}

PillDetails.propTypes = {
  user: PropTypes.object,
};

PillDetails.defaultProps = {
  user: {},
};

export default PillDetails;
