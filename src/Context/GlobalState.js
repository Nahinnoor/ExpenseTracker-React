import React, { createContext, useContext, useReducer } from "react";
import AppReducer from "./AppReducer";
//Inital State
const initialState = {
  transaction: [
    { id: 1, text: "Shoes", amount: -160 },
    { id: 2, text: "Cake", amount: -16 },
    { id: 3, text: "Gas", amount: -40 },
    { id: 4, text: "food", amount: -10 }
],
};

//Create Context
export const GlobalContext = createContext(initialState);

//provider components
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (<GlobalContext.Provider value={{
        transaction: state.transaction }}>
        {children}
    </GlobalContext.Provider>

    )
}