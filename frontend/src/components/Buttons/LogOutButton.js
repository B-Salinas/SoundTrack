import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import {
  Button
} from '@chakra-ui/react'

import { logout } from '../../store/session';

function LogOutButton() {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(logout());
    history.push('/');
  }
    
  return (
    <>
      <Button onClick={handleLogout} size='sm' mt={6} colorScheme='red' >
        Log Out
      </Button>
    </>
  )
}

export default LogOutButton;