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
import SetUsage from '../components/SetUsage';
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
    { 'aria-label': 'Checkbox demo' } 
    };


const rows = [
  { date: '18/10/2002', name: 'KBB RANDEVU', hospitalName: 'OSMANİYE DEVLET HASTANESİ', doctorName: 'DR. YİĞİDO'},
  { date: 'zort'      , name: 'zort'       , hospitalName: 'zort'                     , doctorName: 'DR. OĞUZ'  },
  { date: 'zort2'     , name: 'zort2'      , hospitalName: 'zort2'                    , doctorName: 'zort2'     },
  { date: 'zort3'     , name: 'zort3'      , hospitalName: 'zort3'                    , doctorName: 'zort3'     },
  { date: 'zort4'     , name: 'zort4'      , hospitalName: 'zort4'                    , doctorName: 'zort4'     },
  { date: 'zort5'     , name: 'zort5'      , hospitalName: 'zort5'                    , doctorName: 'zort5'     },
  { date: 'zort6'     , name: 'zort6'      , hospitalName: 'zort6'                    , doctorName: 'zort6'     },
  { date: 'zort7'     , name: 'zort7'      , hospitalName: 'zort7'                    , doctorName: 'zort7'     },
  { date: 'zort8'     , name: 'zort8'      , hospitalName: 'zort8'                    , doctorName: 'zort8'     },
  
];


  
function Appointments() {
  return (
    <>
      <Grid item xs={9}>
        <TableContainer component={Paper}>
          <Table aria-label="appointments">
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">AŞI ADI</StyledTableCell>
                <StyledTableCell align="center">RANDEVU İSMİ</StyledTableCell>
                <StyledTableCell align="center">HASTANE İSMİ</StyledTableCell>
                <StyledTableCell align="center">DOKTOR İSMİ</StyledTableCell>
                <StyledTableCell align="right" sx={{ paddingRight: '1.5cm' }}>
                  SIKLIK
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row" align="left">
                    {row.date }
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row" align="center">
                    {row.name }
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row" align="center">
                    {row.hospitalName }
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row" align="center">
                    {row.doctorName }
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
    </>
  );
}

export default Appointments;
