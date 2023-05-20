import { createContext, useReducer } from "react";
import { reducers } from "./reducerfile";

export const DataConext = createContext()

export const DataProvider = ({children}) => {
    const initialstate = {notify:{},auth:{}}
    const [state,dispatch] = useReducer(reducers,initialstate)

    return(
        <DataConext.Provider value={{state,dispatch}}>
            {children}
        </DataConext.Provider>
    )
}