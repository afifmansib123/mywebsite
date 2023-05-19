import Navbar from "./Navbar"
import Sidebar from "./sidebar"
import Pagination from "./pagination"

const Layout = ({children}) => {
    return (
        <div>
            <Navbar style={{width: "10%"}}/>
            <div style={{ position: "fixed" , justifyContent:"center" , backgroundImage : "url('/image1.jpeg')",}}>
                <Sidebar/> </div>
            <div style={{width : "100%"}}>
                <div style={{position:"right" , justifyContent:"center"}}>
                {children}
                </div>
                <div style={{ position: "fixed" , width : "100%"}}>
                <Pagination/>
                </div>
            </div>
        </div>
    )
}

export default Layout