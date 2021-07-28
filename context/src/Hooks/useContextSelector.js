import { useContext } from 'react';

import { GlobalContext } from 'Store';

export const useContextSelector = (sliceSelector) => {
  const store = useContext(GlobalContext);

  if (!sliceSelector) {
    return store;
  }

  return store[sliceSelector];
};
