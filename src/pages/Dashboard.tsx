import Sidebar from "../components/Sidebar/Sidebar.component";
import LoginForm from "../components/LoginForm/LoginForm.component";
import Navbar from "../components/Navbar/Navbar.component";

function DashboardPage(){
    return(
        <div className="wrapper">
            <Navbar />
            <Sidebar />
        </div>
    )
}

export default DashboardPage;