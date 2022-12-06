import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';
import { Grid, IconButton } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Checkbox from '@mui/material/Checkbox';
import PropTypes from 'prop-types';
import axios from 'axios';

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

const label = {
  inputProps:
    { 'aria-label': 'Checkbox demo' },
};

function Appointments(props) {
  const navigate = useNavigate();
  const { tcno } = props.user;
  const [rows, setRows] = useState([]);
  console.log(rows);

  useEffect(() => {
    (async function getData() {
      await axios.get('/randevularim', { params: { tcno } }).then((res) => {
        setRows(res.data);
      });
    }());
  }, []);

  return (
    <>
      <Grid item xs={9}>
        <TableContainer component={Paper}>
          <Table aria-label="appointments">
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">TARİH</StyledTableCell>
                <StyledTableCell align="center">RANDEVU İSMİ</StyledTableCell>
                <StyledTableCell align="center">HASTANE İSMİ</StyledTableCell>
                <StyledTableCell align="center">DOKTOR İSMİ</StyledTableCell>
                <StyledTableCell align="right" sx={{ paddingRight: '1.5cm' }}>
                  GİDİLDİ Mİ
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row" align="left">
                    {row.tarih}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row" align="center">
                    {row.randevuadi}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row" align="center">
                    {row.hastanead}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row" align="center">
                    {`Dr. ${row.doktorad}`}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row" align="right" sx={{ paddingRight: '1.5cm' }}>
                    <Checkbox {...label} checked={row.gitti_mi === '1'} />
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <div
        style={{ width: '2cm', height: 'auto' }}
        onClick={() => {
          navigate('/appointments/add', { replace: true });
        }}
      >
        <IconButton
          color="success"
          size="large"
          sx={{
            outlineStyle: 'dashed',
            position: 'fixed',
            top: '16cm',
            witdh: '1cm',
          }}
        >
          <AddCircleIcon fontSize="large" />
        </IconButton>
      </div>
    </>

  );
}

Appointments.propTypes = {
  user: PropTypes.object,
};

Appointments.defaultProps = {
  user: {},
};

export default Appointments;
