import ErrorModal from "../components/Error/Error.component";
import AvatarPlaceholder from "../components/AvatarPlaceholder/Avatar.component";
import LoginButton from "../components/LoginButton/LoginButton.component";
import Navbar from "../components/Navbar/Navbar.component";

function LoginPage(){
    return(
        <div>


            <Navbar />
            <ErrorModal title={"this is a modal"} error={"error message here"}/>
            <AvatarPlaceholder />
        </div>
    )
}

export default LoginPage;