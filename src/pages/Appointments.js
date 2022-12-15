import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';
import { Grid, IconButton } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PropTypes from 'prop-types';
import axios from 'axios';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import AppointmentList from '../components/AppointmentList';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

function Appointments(props) {
  const navigate = useNavigate();
  const { tcno } = props.user;
  const [rows, setRows] = useState([]);

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
                <StyledTableCell align="left">RANDEVU İSMİ</StyledTableCell>
                <StyledTableCell align="center">HASTANE İSMİ</StyledTableCell>
                <StyledTableCell align="center">DOKTOR İSMİ</StyledTableCell>
                <StyledTableCell align="center">TARİH</StyledTableCell>
                <StyledTableCell align="center">SAAT</StyledTableCell>
                <StyledTableCell align="right">GİDİLDİ Mİ</StyledTableCell>
                <StyledTableCell align="right" sx={{ paddingRight: '1.5cm' }} />
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <AppointmentList row={row} tcno={tcno} rows={rows} setRows={setRows} />
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
