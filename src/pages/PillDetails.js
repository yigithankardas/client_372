import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, CardActionArea } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import axios from 'axios';

function PillDetails(props) {
  const { ilacid } = useParams();
  const { tcno } = props.user;
  const [ilac, setIlac] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/kullandigim', { params: { ilacid, tcno } }).then((res) => {
      setIlac(res.data);
    });
  }, []);

  return (
    <Box>
      <div
        style={{
          width: '13cm',
          height: '10cm',
          position: 'relative',
          top: '1cm',
          left: '1cm',
        }}
      >
        <Paper variant="outlined" elevation={6} sx={{ maxWidth: 600 }}>
          <Card sx={{ maxWidth: 600 }}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Prospektüs
                </Typography>
                <Typography variant="body4" color="text.secondary">
                  {ilac.prospektus}
                </Typography>
                <FormGroup row>
                  <FormControlLabel disabled control={<Checkbox checked={ilac.ac_tok === 'A'} />} label="Aç" />
                  <FormControlLabel disabled control={<Checkbox checked={ilac.ac_tok === 'T'} />} label="Tok" />
                </FormGroup>

              </CardContent>
            </CardActionArea>
          </Card>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 50 }} aria-label="simple table">
              <TableBody>
                <TableRow>
                  <TableCell align="right">Mg :</TableCell>
                  <TableCell align="left">{ilac.mg}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="right">Sıklık :</TableCell>
                  <TableCell align="left">{`Günde ${ilac.siklik} kadar`}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
        <div
          style={{
            width: '20cm',
            position: 'relative',
            top: '-6cm',
            left: '15cm',
          }}
        >
          <Paper variant="outlined" elevation={6} sx={{ maxWidth: 400 }}>

            <Card sx={{ maxWidth: 400 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="220"
                  image="data:image/jpeg;base64,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"
                  alt="ilac resmi"
                />
              </CardActionArea>
            </Card>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 50 }} aria-label="simple table">
                <TableBody>
                  <TableRow>
                    <TableCell align="center">Yazilma Tarihi :</TableCell>
                    <TableCell align="left">{ilac.yaztarih ? ilac.yaztarih : '-'}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
          <Button
            variant="contained"
            color="error"
            sx={{ margin: '1cm' }}
            onClick={() => { navigate('/pills', { replace: true }); }}
          >
            Geri
          </Button>
        </div>
      </div>
    </Box>

  );
}

PillDetails.propTypes = {
  user: PropTypes.object,
};

PillDetails.defaultProps = {
  user: {},
};

export default PillDetails;
