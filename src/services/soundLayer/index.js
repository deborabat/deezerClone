import React, { createContext, useContext, useReducer } from 'react';

export const SoundLayerContext = createContext();

export const SoundLayer = function ({ initialState, reducer, children }) {
  return (
    <SoundLayerContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </SoundLayerContext.Provider>
  );
};

export const useSoundLayerValue = () => useContext(SoundLayerContext);
