import { useContext } from "react";
import { DataContext } from "@/store/Globalstate";
import Toast from "./Toast";

const notify = () => {

    const [state,dispatch] = useContext(DataContext)
    const {notify} = state

    
    return(
        <>
        
        {notify.error && (<Toast
        msg = {{msg:notify.error , title:"error"}}
        handleshow={()=>dispatch({type:'NOTIFY',payload:{}})}
        bgColor="bg-danger"
        />)}

{notify.success && (<Toast
        msg = {{msg:notify.success , title:"success"}}
        handleshow={()=>dispatch({type:'NOTIFY',payload:{}})}
        bgColor="bg-success"
        />)}
        
        </>
    )
}

export default notify