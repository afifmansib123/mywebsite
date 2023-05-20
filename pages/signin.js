import { useState } from "react"
import valid from "@/utils/valid"
import { useContext } from "react"
import { DataConext } from "@/store/Globalstate"
import Cookies from 'js-cookie'

const Signin = () => {

    const initialstate = { email: '', password: ''}
    const [userdata, changestate] = useState(initialstate)
    const {email, password} = userdata

    const {state,dispatch} = useContext(DataConext)

    const handlechange = (e) => {
        changestate({ ...userdata, [e.target.name]: e.target.value })
    }
    
    const handlesubmit = async e => {
        e.preventDefault()
        dispatch({ type: 'NOTIFY', payload: {} })
        const res = await fetch('/api/users/login',{
            method:'POST',
            headers:{
              'Content-Type':'application/json'
            },
            body:JSON.stringify({email,password})
          })

          const data = await res.json(); // Parse the response data

          console.log(data); // Add this line to see the response data in the console
        
          if (res.status === 400) {
            return dispatch({ type: 'NOTIFY', payload: { error: data.msg } });
          }
        
          if (res.status === 404) {
            return dispatch({ type: 'NOTIFY', payload: { error: 'User not found' } });
          }
        
        if (res && res.err) return dispatch({ type: 'NOTIFY', payload: { error: res.err } })

        dispatch({ type: 'NOTIFY', payload: {success: res.msg} })
        dispatch({ type: 'AUTH', payload: {
            token : res.access_token,
            user: res.user
        } })

    
        Cookies.set('refreshtoken', res.refresh_token, {
            path : '/api/users/accessToken',
            expires: 7
        })
        localStorage.setItem('firstLogin',true)
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
                    <label>email</label>
                    <input className="form-control" placeholder="Enter email" name="email" onChange={handlechange} />

                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input className="form-control" placeholder="enter Password" name="password" onChange={handlechange} />
                </div>

                
                <button className="btn btn-primary" onClick={handlesubmit}>Sign-in</button>
            </form>
        </div>
    )
}

export default Signin