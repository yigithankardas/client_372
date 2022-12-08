import * as React from 'react';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import PropTypes from 'prop-types';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function VaccinesList(props) {
  const { asiadi, yapilmatarihi } = props;
  const [checked, setChecked] = useState(false);

  const formatDate = (formatdate) => {
    const formatedDate = new Date(formatdate);
    const options = {
      year: 'numeric', month: 'long', day: 'numeric',
    };
    return formatedDate.toLocaleDateString('tr-TR', options);
  };

  const handleChange = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <StyledTableRow key={asiadi} style={checked ? { backgroundColor: 'green' } : { backgroundColor: 'red' }}>

      <StyledTableCell component="th" scope="row" align="left">
        {asiadi}
      </StyledTableCell>
      <StyledTableCell component="th" scope="row" align="center">
        {formatDate(yapilmatarihi)}
      </StyledTableCell>
      <StyledTableCell component="th" scope="row" align="right" sx={{ paddingRight: '1.5cm' }}>
        <Checkbox checked={checked} onChange={handleChange} />
      </StyledTableCell>
    </StyledTableRow>
  );
}
// mouse click olayları 55 satır

VaccinesList.propTypes = {
  yapilmatarihi: PropTypes.instanceOf(Date),
  asiadi: PropTypes.object,
};

VaccinesList.defaultProps = {
  yapilmatarihi: '00-00-0000',
  asiadi: '',
};

export default VaccinesList;
