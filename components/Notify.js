import { DataConext } from "@/store/Globalstate";
import { useContext } from "react";
import Toast from "./Toast";

export const Notify = () => {
    const [state, dispatch] = useContext(DataConext)
    const { notify } = state

    return (
        <>
            {notify.error && <Toast
                msg={{ msg: notify.error, title: "error" }}
                handleshow={() => dispatch({ type: 'NOTIFY', payload: {} })}
                bgColor="bg-danger"
            />}
            {notify.success && <Toast
                msg={{ msg: notify.success, title: "success" }}
                handleshow={() => dispatch({ type: 'NOTIFY', payload: {} })}
                bgColor="bg-success"
            />}
        </>
    )
}