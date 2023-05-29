import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import LabelIcon from '@mui/icons-material/Label';
import './temporarydrawer.css';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom"


export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="categoriesmobtitle">
        <h4>CATEGORIAS</h4>
      </div>
      <Divider />
      <div className="categoriesmoblist">  
        <Link to="/category/shirts" className='categorymob'>. REMERAS</Link>
        <Link to="/category/hoodies" className='categorymob'>. BUZOS</Link>
        <Link to="/category/pants" className='categorymob'>. PANTALONES</Link>
        <Link to="/category/shorts" className='categorymob'>. SHORTS</Link>
      </div>
 

    </Box>
  );

  return (
    <div className="menutoggle">
      {['left'
      ].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuIcon style={{ color: '#3c3c3c' }}></MenuIcon>
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
