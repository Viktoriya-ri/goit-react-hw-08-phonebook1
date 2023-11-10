import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectUserName } from 'redux/auth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth';
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';
import { Typography,Container} from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logOut());
  };
  const name = useSelector(selectUserName);

  return (
    <Container sx={{ display:'flex', alignItems:'center', justifyContent:'flex-end'}}>
      <Typography component='h3' variant='p'>Hello {name}!</Typography>
      <IconButton aria-label="logout" onClick={handleClick} color='inherit'>
      <LogoutIcon />
      </IconButton>
    </Container>
  );
};
