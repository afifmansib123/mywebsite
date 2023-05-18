import { createContext, useReducer } from "react";
import reducerfunc from "./reducerfile";

export const DataContext = createContext()

export const DataProvider = ({children}) => {


    const Initialstate = {notify : {}, auth : {}}

    const [state,dispatch] = useReducer(reducerfunc,Initialstate)

    return(
        <DataContext.Provider value = {[state,dispatch]}>
            {children}
        </DataContext.Provider>
    )

}