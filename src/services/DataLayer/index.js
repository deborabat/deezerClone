/* eslint-disable no-var */
import React, { createContext, useContext, useReducer } from 'react';

export default function useDataLayerValue({ initialState, reducer, children }) {
  const DataLayerContext = createContext();
  useContext(DataLayerContext);
  return (
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </DataLayerContext.Provider>
  );
}
