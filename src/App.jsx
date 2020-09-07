import React, { useEffect } from 'react';
import { useStoreon } from 'storeon/react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import { StoreProvider } from './store/mod.js';
import theme from './theme.js';

const App = () => {
  return <div>Works</div>;
};

export default () => (
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <>
        <CSSReset />
        <StoreProvider>
          <App />
        </StoreProvider>
      </>
    </ThemeProvider>
  </React.StrictMode>
);
