import React from 'react';

import { LoginScreen } from 'Screens';
import { GlobalStyles } from 'Theme';
import { GlobalContextProvider } from 'Store';

export const App = () => (
  <>
    <GlobalStyles />
    <GlobalContextProvider>
      <LoginScreen />
    </GlobalContextProvider>
  </>
);
