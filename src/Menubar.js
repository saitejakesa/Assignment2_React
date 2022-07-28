import Addons from "./Addons";
import Brandname from "./Brandname";
import Dashboard from "./Dashboard";
import Interface from "./Interface";

export default function Menubar(){
    return(
        
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <Brandname />
            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0"></hr>
            <Dashboard />
            {/* <!-- Divider --> */}
            <hr className="sidebar-divider" />
            <Interface />
            {/* <!-- Divider --> */}
            <hr className="sidebar-divider"></hr>
            <Addons />
            {/* <!-- Divider --> */}
            <hr className="sidebar-divider d-none d-md-block"></hr>
            

        </ul>
        

        
    );
}