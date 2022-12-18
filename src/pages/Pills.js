import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button, Grid, IconButton } from '@mui/material';
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
  const [openPanel, setOpenPanel] = useState(false);
  const [currentIlacId, setCurrentIlacId] = useState('');

  async function deletePill() {
    await axios.delete('/ilaclarim', { params: { tcno, ilacid: currentIlacId } }).then(() => {
      setRows((prevRows) => {
        const newRows = [...prevRows];
        for (let i = 0; i < newRows.length; i += 1) {
          if (newRows[i].tcno === tcno && newRows[i].ilacid === currentIlacId) {
            newRows.splice(i, 1);
            break;
          }
        }
        return newRows;
      });
      setOpenPanel(false);
    });
  }
  function handleClose() {
    setOpenPanel(false);
  }

  useEffect(() => {
    (async function getData() {
      await axios.get('/ilaclarim', { params: { tcno } }).then((res) => {
        setRows(res.data);
      });
    }());
  }, []);

  return (
    <>
      <Grid item xs={9}>
        <TableContainer component={Paper}>
          <Table aria-label="pills">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">İLAÇ İSMİ</StyledTableCell>
                <StyledTableCell align="center">MG</StyledTableCell>
                <StyledTableCell align="right">
                  <div style={{ position: 'relative', left: '2.1cm' }}>SIKLIK</div>
                </StyledTableCell>
                <StyledTableCell align="right" sx={{ paddingRight: '1.5cm' }} />
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow
                  key={row.ilacid}
                  onClick={() => {
                    navigate(`/pills/${row.ilacid}`, { replace: true });
                  }}
                  sx={{ cursor: 'pointer' }}
                >
                  <StyledTableCell component="th" scope="row" align="center">
                    {row.ilacadi}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row" align="center">
                    {row.mg}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row" align="right">
                    <div style={{ position: 'relative', left: '3.1cm' }}>
                      <SetUsage row={row} />
                    </div>
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row" align="right">
                    <Button
                      variant="contained"
                      color="error"
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentIlacId(row.ilacid);
                        setOpenPanel(true);
                      }}
                    >
                      SİL
                    </Button>
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
      <Dialog
        open={openPanel}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>UYARI</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Bu işlem geri alınamaz. Emin misiniz?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>KAPAT</Button>
          <Button onClick={deletePill}>ONAYLA</Button>
        </DialogActions>
      </Dialog>
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
