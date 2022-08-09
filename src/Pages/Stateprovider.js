import { createContext, useContext, useReducer } from "react";


export const Statecontext = createContext();

export const Stateprovider = ({reducer, initialstate, children}) => (
    <Statecontext.Provider value={useReducer(reducer,initialstate)}>
        {children}
    </Statecontext.Provider>
);

export const useStateValue = () => useContext(Statecontext);