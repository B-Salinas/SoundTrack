import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
<<<<<<< HEAD
import { ChakraProvider } from '@chakra-ui/react';
=======
import { ChakraProvider } from '@chakra-ui/react'
>>>>>>> da8b9355b7df288b1e35364a9bdf9590b9ad1c89
import './index.css';
import App from './App';
import configureStore from './store';
import { restoreCSRF, csrfFetch } from './store/csrf';
import * as sessionActions from './store/session';

const store = configureStore();

if (process.env.NODE_ENV !== 'production') {
  restoreCSRF();

  window.csrfFetch = csrfFetch;
  window.store = store;
  window.sessionActions = sessionActions;
}

function Root() {
  return (
    <ChakraProvider>
      <ReduxProvider store={store}>
<<<<<<< HEAD
        <BrowserRouter>
          <App />
        </BrowserRouter>
=======
        {/* <BrowserRouter> */}
          <App />
        {/* </BrowserRouter> */}
>>>>>>> da8b9355b7df288b1e35364a9bdf9590b9ad1c89
      </ReduxProvider>
    </ChakraProvider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
