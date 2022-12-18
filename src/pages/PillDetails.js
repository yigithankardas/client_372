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
        <Paper
          variant="outlined"
          elevation={6}
          sx={{
            maxWidth: 600, maxHeight: 200, overflow: 'auto',
          }}
        >
          <Card sx={{ maxWidth: 600 }}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Prospektüs
                </Typography>
                <Typography variant="body4" color="text.secondary">
                  {ilac.prospektus}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Paper>
        <Card>
          <CardActionArea>
            <CardContent>
              <FormGroup row>
                <FormControlLabel disabled control={<Checkbox checked={ilac.ac_tok === 'A'} />} label="Aç" />
                <FormControlLabel disabled control={<Checkbox checked={ilac.ac_tok === 'T'} />} label="Tok" />
              </FormGroup>
            </CardContent>
          </CardActionArea>
        </Card>
        <TableContainer>
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
        <div
          style={{
            width: '10cm',
            position: 'relative',
            bottom: '10cm',
            left: '15cm',
          }}
        >
          <Paper variant="outlined" elevation={6} sx={{ maxWidth: 400 }}>
            <Card sx={{ maxWidth: 400 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="220"
                  image={ilac.resim}
                  alt="ilac resmi"
                />
              </CardActionArea>
            </Card>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 50 }} aria-label="simple table">
                <TableBody>
                  <TableRow>
                    <TableCell align="center">Yazilma Tarihi :</TableCell>
                    <TableCell align="left">
                      {ilac.yaztarih ? new Date(ilac.yaztarih).toLocaleDateString('tr-TR', {
                        year: 'numeric', month: 'long', day: 'numeric',
                      }) : '-'}

                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </div>
        <div>
          <Button
            variant="contained"
            color="error"
            sx={{
              position: 'relative', left: '15cm', bottom: '5cm',
            }}
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
