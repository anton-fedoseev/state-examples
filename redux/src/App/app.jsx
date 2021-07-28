import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import { LoginScreen } from 'Screens';
import { GlobalStyles } from 'Theme';
import { store } from 'Store';

export const App = () => (
  <>
    <GlobalStyles />
    <ReduxProvider store={store}>
      <LoginScreen />
    </ReduxProvider>
  </>
);
