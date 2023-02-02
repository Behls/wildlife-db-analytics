import './navbar.css';
import { Outlet, Link, useNavigate } from "react-router-dom";
import LoginButton from '../LoginButton/LoginButton.component';
import { useState } from 'react';
import { colours } from 'utils/colors';

function Navbar(){

    const [isLogin, setLogin] = useState<boolean>(false);
    const navigate = useNavigate();

    return(
        <>
        {
            isLogin
            ?
            <div>
                <Link to="/logout">Wildlife Analytics</Link>
                <LoginButton label="logout" primary={"bg-red-700"} border="text-red-700" hoverbg="border-red-700" hovertext="bg-zinc-900"onClick={(e) => navigate("/logout")}/>
            </div>       
            :
            <div>
                <Link to="/login">Wildlife Analytics</Link>
                <LoginButton label="Login" primary={"bg-red-700"} border="text-red-700" hoverbg="border-red-700" hovertext="bg-zinc-900"/>
            </div>
        }
        </>
    )
}

export default Navbar;