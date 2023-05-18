import Toast from "@/components/Toast"
import { useState } from "react"
import { DataContext } from "@/store/Globalstate"
import { useContext } from "react"



const Signin = () => {

    const [showtoast, changetoast] = useState(false)

    const [state,dispatch] = useContext(DataContext)

    const testfunction = (e) => {
        e.preventDefault()
        dispatch({type : 'NOTIFY', payload : {success: 'OK'}})
        changetoast(true)
    }

    return (
        <div style={{
            width : "100%",
            display : "flex",
            justifyContent : "right",
            margin : "10px",
            height : "50vh",
            width : "50%"
        }}>
            {showtoast && <Toast/>}
        <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            <button onClick={testfunction}>press me</button>
        </form>
        </div>
    )
}

export default Signin