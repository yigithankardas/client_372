import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import MedicationIcon from '@mui/icons-material/Medication';
import { useNavigate } from 'react-router-dom';
import { useSignOut } from 'react-auth-kit';

function LeftNavBar() {
  const navigate = useNavigate();
  const signOut = useSignOut();
  const drawerWidth = 260;
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          background: '#101F33',
          color: 'rgba(255, 255, 255, 0.7)',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <Divider />
      <List>
        <ListItem
          key="İLAÇLARIM"
          disablePadding
          onClick={() => navigate('/pills', { replace: true })}
        >
          <ListItemButton>
            <ListItemIcon sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              <MedicationIcon />
            </ListItemIcon>
            <ListItemText primary="İLAÇLARIM" />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem
          key="AŞILARIM"
          disablePadding
          onClick={() => navigate('/blank', { replace: true })}
        >
          <ListItemButton>
            <ListItemIcon sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              <VaccinesIcon />
            </ListItemIcon>
            <ListItemText primary="AŞILARIM" />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem key="RANDEVULARIM" disablePadding>
          <ListItemButton>
            <ListItemIcon sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              <AccessTimeIcon />
            </ListItemIcon>
            <ListItemText primary="RANDEVULARIM" />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem key="PROFİLİM" disablePadding>
          <ListItemButton>
            <ListItemIcon sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="PROFİLİM" />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem
          key="ÇIKIŞ"
          disablePadding
          onClick={() => {
            signOut();
            navigate('/login', { replace: true });
          }}
        >
          <ListItemButton>
            <ListItemIcon sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="ÇIKIŞ" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </Drawer>
  );
}

export default LeftNavBar;
