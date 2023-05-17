import Navbar from "./Navbar"
import Sidebar from "./sidebar"
import Pagination from "./pagination"

const Layout = ({children}) => {
    return (
        <div>
            <Navbar style={{width: "10%"}}/>
            <div style={{ position: "fixed"}}>
                <Sidebar/> </div>
            <div >
                {children}
                <div style={{ position: "fixed" , width : "100%"}}>
                <Pagination/>
                </div>
            </div>
        </div>
    )
}

export default Layout