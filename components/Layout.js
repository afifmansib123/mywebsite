import Navbar from "./Navbar";
import Pagination from "./pagination";

const Layout = ({children}) => {
    return (
        <div>
        <Navbar/>
        
        {children}
        <Pagination/>
        </div>
    )
}

export default Layout