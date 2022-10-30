import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Grid, IconButton } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

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

const rows = [
  { name: 'Parol' },
  { name: 'zort' },
  { name: 'zort2' },
  { name: 'zort3' },
  { name: 'zort3' },
  { name: 'zort3' },
  { name: 'zort3' },
  { name: 'zort3' },
  { name: 'zort3' },
  { name: 'zort3' },
  { name: 'zort3' },
  { name: 'zort3' },
  { name: 'zort3' },
  { name: 'zort3' },
  { name: 'zort3' },
  { name: 'zort3' },
  { name: 'zort3' },
  { name: 'zort3' },
  { name: 'zort3' },
  { name: 'zort3' },
  { name: 'zort3' },
  { name: 'zort3' },
  { name: 'zort3' },
];

function Pills() {
  return (
    <>
      <Grid item xs={9}>
        <TableContainer component={Paper}>
          <Table aria-label="pills">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">İLAÇ İSMİ</StyledTableCell>
                <StyledTableCell align="right">SIKLIK</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row" align="center">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row" align="right">
                    {row.name}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <div style={{ width: '2cm', height: 'auto' }}>
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

export default Pills;
