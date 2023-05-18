import { INITIAL_STATE } from "./postreducer"
import { reducerfunction } from "./postreducer"
import { useReducer } from "react"
import mongoose from "mongoose"
import { useState } from "react"
import Toast from "@/components/Toast"


const Register = () => {

    const [state,dispatch] = useReducer(reducerfunction,INITIAL_STATE)

    const [showtoast,setshowtoast] = useState(false)

    //register api call
    const handlesubmit = async (e) => {
        e.preventDefault()
  
        const response = await fetch('/api/users/create',{
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify(state)
        })
        if (response.ok) {
          console.log('paykhana')
        } else {
            setshowtoast(true)
        }
    }

    const handlechange = (e) => {
        e.preventDefault()
        dispatch({
            type : "Changestate",
            payload : {name : e.target.name, value: e.target.value}
        })
    }



    

    return(
        <div style={{
            display : "flex",
            justifyContent : "right",
            margin : "10px",
            height : "70vh",
            width : "50%"
        }}>
            {showtoast && (
                <Toast>
                    <div>registration successful</div>
                </Toast>
            )}
        <form>
            <div className="form-group">
                <label>Email address</label>
                <input  className="form-control"  aria-describedby="emailHelp" placeholder="Enter email" name ="email" onChange={handlechange}/>
               
            </div>
            <div className="form-group">
                <label>phone number</label>
                <input  className="form-control"  placeholder="Enter phonenumber" name ="phone" onChange={handlechange}/>
                
            </div>
            <div className="form-group">
                <label>Password</label>
                <input  className="form-control"  placeholder="Password" name="password" onChange={handlechange}/>
            </div>
           
            <button className="btn btn-primary" onClick={handlesubmit}>Register</button>
        </form>
        </div> 
    )
}

export default Register