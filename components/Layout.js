import Navbar from "./Navbar"
import Sidebar from "./sidebar"
import Pagination from "./pagination"

const Layout = ({children}) => {
    return (
        <div>
            <Navbar style={{width: "100%", position: "fixed", top: "0", marginLeft:"20", bottom: "0"}}/>
            <div style={{width: "100%"  , position: "fixed", top: "0", bottom: "0"}}>
                <Sidebar style={{ width: "200px",position: "fixed", top: "0", bottom: "0" }}/> </div>
            <div style={{marginTop: "0px"}}>
                {children}
                <Pagination/>
            </div>
        </div>
    )
}

export default Layout