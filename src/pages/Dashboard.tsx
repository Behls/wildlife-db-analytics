import Sidebar from "../components/Sidebar/Sidebar.component";
import LoginForm from "../components/LoginForm/LoginForm.component";
import Navbar from "../components/Navbar/Navbar.component";
import ErrorModal from "../components/Error/Error.component";
import Summary from "../components/Summary/Summary.component";
import Donation from "../components/Donation/Donation.component";
import RescueBox from "../components/RescueInfo/Rescue.component";
import Button from "../components/Button/Button.component";


function DashboardPage(){
    function logMsg(){
        console.log("this is a button");
    }
    
    return(

        <>
        <div className="h-screen w-screen">
            {/* <Navbar />
            <Sidebar />  */}
            {/* <Summary title={"Patients This Week"} percentage={"45"}/> */}
            {/* <Summary title={"Admissions"} percentage={"32"}/> */}
            {/* <Donation />  */}
            {/* <ErrorModal/> */}{/* <RescueBox /> */}
            {/* <LoginForm></LoginForm> */}

            

            <Button 
                label={"This is a button"} 
                onClick={logMsg}
                class={"flex text-m px-6 leading-none py-5 bg-blue text-white rounded mx-10 my-10 lg:mt-0"}>    
            </Button>

            

        </div>
        </>
            
    )
}

export default DashboardPage;