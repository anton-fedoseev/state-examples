import React, { createContext, useReducer, useMemo } from 'react';

import { authReducer, authInitialState, getAuthHandlers } from './auth';
import { generalReducer, generalInitialState, getGeneralHandlers } from './general';

const GlobalContext = createContext();
const { Provider } = GlobalContext;

const GlobalContextProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, authInitialState);
  const authHandlers = useMemo(() => getAuthHandlers(authDispatch), []);

  const [generalState, generalDispatch] = useReducer(generalReducer, generalInitialState);
  const generalHandlers = useMemo(() => getGeneralHandlers(generalDispatch), []);

  return (
    <Provider
      value={{
        auth: {
          state: authState,
          handlers: authHandlers,
        },
        general: {
          state: generalState,
          handlers: generalHandlers,
        },
      }}
    >
      {children}
    </Provider>
  );
};

export { GlobalContext, GlobalContextProvider };
