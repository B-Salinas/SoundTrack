import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import {
  Button
} from '@chakra-ui/react'

import { logout } from '../../store/session';

function LogOutButton({ size, mt }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(logout());
    history.push('/');
  }
    
  return (
    <>
      <Button onClick={handleLogout} size={size} mt={mt} colorScheme='red' >
        Log Out
      </Button>
    </>
  )
}

export default LogOutButton;