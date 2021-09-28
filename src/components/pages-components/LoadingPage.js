import React, {useEffect} from 'react';
import { Spinner } from 'react-bootstrap';
import { useGlobalContext } from '../../contexts/GlobalContext';

const LoadingPage = () => {
  const { setIsLoading } = useGlobalContext();
   useEffect(() => {
     const interval = setInterval(() => {
       setIsLoading(false);
     }, 3000);

     return () => clearInterval(interval);
     // eslint-disable-next-line
   }, []);
  return (
    <div id='loader'>
      <div id='status'>
        <Spinner animation='border' variant='light' />
      </div>
    </div>
  );
}

export default LoadingPage;
