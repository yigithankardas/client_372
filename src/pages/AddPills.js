import React from 'react';
import PropTypes from 'prop-types';

function AddPills(props) {
  return (
    <div>AddPills</div>
  );
}

AddPills.propTypes = {
  user: PropTypes.object,
};

AddPills.defaultProps = {
  user: {},
};

export default AddPills;
