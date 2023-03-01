import ErrorModal from "../components/Error/Error.component";
import AvatarPlaceholder from "../components/AvatarPlaceholder/Avatar.component";
import LoginButton from "../components/LogoutButton/LogoutButton.component";
import Navbar from "../components/Navbar/Navbar.component";
import Avatar from "../components/Avatar/Avatar.component";
import avatar from "../assets/avatar.jpg";
import Sidebar from "../components/Sidebar/Sidebar.component";

function LoginPage(){
    return(
        <div className="">


            <Navbar />
            <Sidebar />
            {/* <ErrorModal title={"this is a modal"} error={"error message here" }/>
            <AvatarPlaceholder />
            <Avatar img={avatar}/> */}
        </div>
    )
}

export default LoginPage;