import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/react-image-gallery/styles/css/image-gallery.css';
import './index.css';
import './responsive.css';
import { GlobalProvider } from './contexts/GlobalContext';
import { AuthProvider } from './contexts/AuthContext';
import App from './components/App';


ReactDOM.render(
    <AuthProvider>
        <GlobalProvider>
            <App />
        </GlobalProvider>
    </AuthProvider>,
  document.getElementById('root')
);
