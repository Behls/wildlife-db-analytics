import ErrorModal from "../components/Error/Error.component";
import AvatarPlaceholder from "../components/AvatarPlaceholder/Avatar.component";
import LoginButton from "../components/LoginButton/LoginButton.component";
import Navbar from "../components/Navbar/Navbar.component";
import Avatar from "../components/Avatar/Avatar.component";
import avatar from "../assets/avatar.jpg";

function LoginPage(){
    return(
        <div>


            <Navbar />
            <ErrorModal title={"this is a modal"} error={"error message here" }/>
            <AvatarPlaceholder />
            <Avatar img={avatar}/>
        </div>
    )
}

export default LoginPage;