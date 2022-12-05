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
import SetUsage from '../components/SetUsage';

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

function Pills(props) {
  const navigate = useNavigate();
  const { tcno } = props.user;
  const [rows, setRows] = useState([]);

  useEffect(() => {
    axios.get('/ilaclarim', { params: { tcno } }).then((res) => {
      setRows(res.data);
    });
  }, []);

  if (rows === []) { return <div>Bekliyoruz</div>; }
  return (
    <>
      <Grid item xs={9}>
        <TableContainer component={Paper}>
          <Table aria-label="pills">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">İLAÇ İSMİ</StyledTableCell>
                <StyledTableCell align="right" sx={{ paddingRight: '1.5cm' }}>
                  SIKLIK
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.ilacadi}>
                  <StyledTableCell component="th" scope="row" align="center">
                    {row.ilacadi}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row" align="right">
                    <SetUsage row={row} />
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
          navigate('/pills/add', { replace: true });
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

Pills.propTypes = {
  user: PropTypes.object,
};

Pills.defaultProps = {
  user: {},
};

export default Pills;
