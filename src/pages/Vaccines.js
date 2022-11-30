import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Grid } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';

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

const rows = [
  { name: 'Kuduz', date: '18/10/2002' },
  { name: 'zort', date: 'zort' },
  { name: 'zort2', date: 'zort2' },
  { name: 'zort3', date: 'zort3' },
  { name: 'zort4', date: 'zort4' },
  { name: 'zort5', date: 'zort5' },
  { name: 'zort6', date: 'zort6' },
  { name: 'zort7', date: 'zort7' },
  { name: 'zort8', date: 'zort8' },

];

function Vaccines() {
  return (
    <Grid item xs={9}>
      <TableContainer component={Paper}>
        <Table aria-label="vaccines">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">AŞI ADI</StyledTableCell>
              <StyledTableCell align="center">AŞI TARİHİ</StyledTableCell>
              <StyledTableCell align="right" sx={{ paddingRight: '1.5cm' }}>
                SIKLIK
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row" align="left">
                  {row.name }
                </StyledTableCell>
                <StyledTableCell component="th" scope="row" align="center">
                  {row.date }
                </StyledTableCell>
                <StyledTableCell component="th" scope="row" align="right" sx={{ paddingRight: '1.5cm' }}>
                  <Checkbox {...label} defaultChecked />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}

export default Vaccines;
