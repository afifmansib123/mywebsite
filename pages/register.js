import { useState } from "react"
import valid from "@/utils/valid"
import { useContext } from "react"
import { DataConext } from "@/store/Globalstate"
import Toast from "@/components/Toast"

const Register = () => {

    const initialstate = { name: '', email: '', password: '', cf_password: '' }
    const [userdata, changestate] = useState(initialstate)
    const {name , email, password, cf_password} = userdata
    const [showtoast,changetoast] = useState(false)

    const {state,dispatch} = useContext(DataConext)

    const handlechange = (e) => {
        changestate({ ...userdata, [e.target.name]: e.target.value })
    }
    const handlesubmit = async(e) => {
        e.preventDefault()
       const errMsg = valid(name,email,password,cf_password)
       if(errMsg) return dispatch({type : "NOTIFY", payload : {error: errMsg}})
       dispatch({type:'NOTIFY', payload: {}})
       const response = await fetch('/api/users/create',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({name,email,password})
      })
      dispatch({type:'NOTIFY', payload: {success: response.msg}})
      changetoast(true)
     
    }

    return (
        <div style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            height: "80vh",
            backgroundImage: "url('/image1.jpeg')",

        }}>

            

            <form>
                <div className="form-group">
                    <label>Name</label>
                    <input className="form-control" aria-describedby="emailHelp" placeholder="Enter name" name="name" onChange={handlechange} />

                </div>
                <div className="form-group">
                    <label>email</label>
                    <input className="form-control" placeholder="Enter email" name="email" onChange={handlechange} />

                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input className="form-control" placeholder="enter Password" name="password" onChange={handlechange} />
                </div>

                <div className="form-group">
                    <label> Confirm Password</label>
                    <input className="form-control" placeholder="enter Password" name="cf_password" onChange={handlechange} />
                </div>
                <button className="btn btn-primary" onClick={handlesubmit}>Register</button>
            </form>
            {showtoast && <Toast msg={{title : 'register successful', msg: 'registration successful'}} bgColor={'pink'} handleshow={()=>changetoast(false)} />}
        </div>
    )
}

export default Register