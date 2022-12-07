import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PropTypes from 'prop-types';

function ComboBoxVaccines(props) {
  const [item, setItem] = useState({});

  const handleChange = (event) => {
    console.log(event.target);
    setItem(event.target.value);
    props.setSelectedItem(event.target.value.asiid);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{props.name}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={item}
          label={props.name}
          onChange={handleChange}
        >
          {props.values.map((value) => (<MenuItem value={value}>{`${value.asiadi}`}</MenuItem>))}
        </Select>
      </FormControl>
    </Box>
  );
}

ComboBoxVaccines.propTypes = {
  name: PropTypes.string,
  values: PropTypes.array,
  setSelectedItem: PropTypes.func,
};

ComboBoxVaccines.defaultProps = {
  name: '',
  values: [],
  setSelectedItem: () => {},
};

export default ComboBoxVaccines;
