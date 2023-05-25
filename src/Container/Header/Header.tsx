import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import './Header.scss'
import { Container } from '@mui/material';
import Logo from 'components/Logo/Logo';
import Menu from 'components/Menu/Menu';
import { groupEnd } from 'console';
import { green } from '@mui/material/colors';


type Props = {}

const Header = (props: Props) => {
  return (
    <AppBar position="static" 
    className='fon' 
    style={{ backgroundColor: green }} 
    // sx={{ backgroundColor: green }} 
    >
      <Container className='fon'>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
            <MenuIcon />
          </IconButton>
          <Logo />
          <Menu/>
        </Toolbar>
        </Container>
      </AppBar>



  )
}
export default Header