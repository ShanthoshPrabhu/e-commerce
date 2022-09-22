import { createContext, useContext, useEffect, useReducer } from "react";
import Reducer from '../Reducer'

export const Statecontext = createContext();

export const Stateprovider = ({reducer, initialstate, children}) =>{
    
    // useEffect(()=>{
    //     localStorage.setItem('user',JSON.stringify(state.user))
    //   },[state.user])
      return <Statecontext.Provider value={useReducer(reducer,initialstate)}>
        {children}
      </Statecontext.Provider>
} 
    


export const useStateValue = () => useContext(Statecontext);