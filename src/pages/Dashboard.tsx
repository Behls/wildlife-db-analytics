import Sidebar from "../components/Sidebar/Sidebar.component";
import LoginForm from "../components/LoginForm/LoginForm.component";
import Navbar from "../components/Navbar/Navbar.component";
import ErrorModal from "../components/Error/Error.component";


function DashboardPage(){
    return(
        <div className="wrapper">
            {/* <Navbar />
            <Sidebar /> */}
            <ErrorModal title={"error message"} error={"this is a huge error"} />
        </div>
    )
}

export default DashboardPage;