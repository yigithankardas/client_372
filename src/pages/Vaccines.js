import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Grid, IconButton } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useEffect, useState } from 'react';
import VaccinesList from '../components/VaccinesList';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

function Vaccines(props) {
  const navigate = useNavigate();
  const { tcno } = props.user;
  const [rows, setRows] = useState([]);

  useEffect(() => {
    axios.get('/asilarim', { params: { tcno } }).then((res) => {
      const { data } = res;
      // const newData = sortVaccinesByColor(data);
      setRows(data);
    });
  }, []);

  return (
    <>
      <Grid item xs={9}>
        <TableContainer component={Paper}>
          <Table aria-label="vaccines">
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">AŞI ADI</StyledTableCell>
                <StyledTableCell align="center">YAPILACAĞI TARİHİ</StyledTableCell>
                <StyledTableCell align="center">YAPILMASI GEREKEN YAŞ</StyledTableCell>
                <StyledTableCell align="right" sx={{ paddingRight: '1.5cm' }}>
                  YAPILDI MI
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <VaccinesList asiadi={row.asiadi} yapilmayasi={row.yapilmayasi} yapilacagitarih={row.yapilacagitarih} setRows={setRows} tcno={tcno} asiid={row.asiid} yaptirdi_mi={row.yaptirdi_mi} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <div
        style={{ width: '2cm', height: 'auto' }}
        onClick={() => {
          navigate('/vaccines/add', { replace: true });
        }}
      >
        <IconButton
          color="primary"
          size="large"
          sx={{
            position: 'fixed',
            top: '16cm',
          }}
        >
          <AddCircleIcon fontSize="large" />
        </IconButton>
      </div>
    </>
  );
}
Vaccines.propTypes = {
  user: PropTypes.object,
};

Vaccines.defaultProps = {
  user: {},
};
export default Vaccines;
