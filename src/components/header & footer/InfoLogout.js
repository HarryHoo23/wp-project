import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { database } from '../../firebase/firebase';
import { useGlobalContext } from '../../contexts/GlobalContext';

export default function InfoLogout() {
  const [error, setError] = useState('');
  const { currentUser, logout } = useAuth();
  const [userName, setUserName] = useState('');
  const { setIsOpen } = useGlobalContext();
  const history = useHistory();

  useEffect(() => {
    database
      .ref()
      .child('users')
      .child(currentUser.uid)
      .get()
      .then((snapshot) => {
        snapshot
          ? setUserName(snapshot.val().username)
          : console.log('nothing');
      });
  }, [userName, currentUser.uid]);

  async function handleLogOut() {
    setError('');

    try {
      await logout();
      console.log(error);
      setIsOpen(false);
      history.pushState('/login');
    } catch {
      setError('Unable to log out.');
    }
  }

  return (
    <>
      {currentUser && (
        <div className='login-info-box'>
          <strong style={{ marginRight: '5px' }}>Welcome:</strong>
          <span>{userName}</span>
          <Button
            className='logoutBtn btn btn-primary'
            variant='link'
            onClick={handleLogOut}
          >
            Log Out
          </Button>
        </div>
      )}
    </>
  );
}
