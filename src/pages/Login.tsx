import ErrorModal from "../components/Error/Error.component";
import AvatarPlaceholder from "../components/AvatarPlaceholder/Avatar.component";
import LoginButton from "../components/LogoutButton/LogoutButton.component";
import Navbar from "../components/Navbar/Navbar.component";
import Avatar from "../components/Avatar/Avatar.component";
import avatar from "../assets/avatar.jpg";
import Sidebar from "../components/Sidebar/Sidebar.component";
import LoginForm from "../components/LoginForm/LoginForm.component";

function LoginPage(){
    return(
        <div className="wrapper">
            <Navbar />
            {/* <Sidebar /> */}
            {/* <ErrorModal title={"this is a modal"} error={"error message here" }/>
            <AvatarPlaceholder />
            <Avatar img={avatar}/> */}

            <LoginForm/>
        </div>
    )
}

export default LoginPage;