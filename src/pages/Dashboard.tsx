import Sidebar from "../components/Sidebar/Sidebar.component";
import LoginForm from "../components/LoginForm/LoginForm.component";
import Navbar from "../components/Navbar/Navbar.component";
import ErrorModal from "../components/Error/Error.component";
import Summary from "../components/Summary/Summary.component";
import Donation from "../components/Donation/Donation.component";


function DashboardPage(){
    return(


        <>
        <div className="h-screen w-screen">
            {/* <Navbar />
            <Sidebar /> */}
            <Summary title={"Patients This Week"} percentage={"45"}/>
            <Donation />

            {/* <ErrorModal/> */}
        </div>
        </>
            
    )
}

export default DashboardPage;