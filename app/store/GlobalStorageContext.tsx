'use client'
import React, { useReducer, ReactNode, useContext, createContext } from 'react';

type State = {
  done: boolean;
};

type Action = {
  type: 'SET_DONE';
  payload: boolean;
};

const initialState: State = { done: false };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_DONE':
      return { ...state, done: action.payload };

    default:
      return state;
  }
};

type GlobalStorageContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

const GlobalStorageContext = createContext<GlobalStorageContextType | null>(
  null,
);

export function GlobalStorageProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalStorageContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStorageContext.Provider>
  );
}

export function useGlobalStorage (){
  const ctx = useContext(GlobalStorageContext);
  if(!ctx) throw Error ("Something went wron with context");
  return ctx;
}