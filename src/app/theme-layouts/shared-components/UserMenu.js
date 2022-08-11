import Button from '@mui/material/Button';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from 'app/store/userSlice';

function UserMenu(props) {
  const user = useSelector(selectUser);

  const [setUserMenu] = useState(null);

  const userMenuClick = (event) => {
    setUserMenu(event.currentTarget);
  };

  return (
    <>
      <Button
        className="whitespace-nowrap"
        variant="contained"
        color="primary"
        onClick={userMenuClick}
      >
        Connect Wallet
      </Button>
    </>
  );
}

export default UserMenu;
