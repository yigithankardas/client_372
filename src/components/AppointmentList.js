import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import Checkbox from '@mui/material/Checkbox';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';

const label = {
  inputProps:
      { 'aria-label': 'Checkbox demo' },
};

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

function AppointmentList(props) {
  const {
    ad, tarih, randevuadi, hastanead, doktorad, gitti_mi,
  } = props.row;
  const { tcno } = props;
  const [isChecked, setIsChecked] = useState(gitti_mi === '1');

  async function handleChange(event) {
    let index;
    setIsChecked(event.target.checked);
    await axios.put('/randevularim', { gitti_mi: event.target.checked ? '1' : '0', tarih, kullanicitc: tcno }).then(() => {
      props.setRows((prevRows) => {
        const newRows = [...prevRows];
        for (let i = 0; i < newRows.length; i += 1) {
          if (newRows[i].ad === ad && newRows[i].tarih === tarih && newRows[i].randevuadi === randevuadi && newRows[i].hastanead === hastanead && newRows[i].doktorad === doktorad) {
            newRows.splice(i, 1);
            index = i;
            break;
          }
        }
        newRows.splice(index, 0, {
          ad, tarih, randevuadi, hastanead, doktorad, gitti_mi: event.target.checked ? '1' : '0',
        });
        return newRows;
      });
    });
  }

  return (
    <StyledTableRow key={ad}>
      <StyledTableCell component="th" scope="row" align="left">
        {tarih}
      </StyledTableCell>
      <StyledTableCell component="th" scope="row" align="center">
        {randevuadi}
      </StyledTableCell>
      <StyledTableCell component="th" scope="row" align="center">
        {hastanead}
      </StyledTableCell>
      <StyledTableCell component="th" scope="row" align="center">
        {`Dr. ${doktorad}`}
      </StyledTableCell>
      <StyledTableCell component="th" scope="row" align="right" sx={{ paddingRight: '1.5cm' }}>
        <Checkbox {...label} checked={isChecked} onChange={handleChange} />
      </StyledTableCell>
    </StyledTableRow>
  );
}

AppointmentList.propTypes = {
  row: PropTypes.object,
  rows: PropTypes.array,
  setRows: PropTypes.func,
  tcno: PropTypes.string,
};

AppointmentList.defaultProps = {
  row: {},
  rows: [],
  setRows: () => {},
  tcno: '',
};

export default AppointmentList;
