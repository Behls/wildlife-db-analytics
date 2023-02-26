import './navbar.css';
import { Outlet, Link, useNavigate } from "react-router-dom";
import LoginButton from '../LoginButton/LoginButton.component';
import { useState } from 'react';

function Navbar(){

    const [isLogin, setLogin] = useState<boolean>(true);
    const navigate = useNavigate();
    return(
        <>
        {
            isLogin
            ?
            <div>
                <Link to="/logout">Wildlife Analytics</Link>
                <LoginButton label="Login" primary={"bg-blue"} text={"text-white"} border={"border-blue"} hoverbg={"border-red-700"} hovertext="bg-zinc-900" onClick={() => navigate("/logout")} setLogin={!isLogin}/>
            </div>       

            :

            <div>
                <Link to="/login">Wildlife Analytics</Link>
                <LoginButton label="Login" primary={"bg-green"} border="text-red-700" hoverbg="border-red-700" hovertext="bg-zinc-900"/>
            </div>
        }
        
        </>
    )
}

export default Navbar;