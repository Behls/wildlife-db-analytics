import './navbar.css';
import { Outlet, Link, useNavigate } from "react-router-dom";
import LogoutButton from '../LogoutButton/LogoutButton.component';
import { useState } from 'react';

function Navbar(){

    const [isLogin, setLogin] = useState<boolean>(true);
    const navigate = useNavigate();
    
    return(
            <>
            {
                isLogin ? 
                <nav className="flex items-center flex-wrap bg-blue p-6 w-screen">
                    <div className="flex items-center flex-shrink-0 mr-6 w-full" style={{justifyContent: 'space-between'}}>
                        <span className="flex font-semibold text-xl tracking-tight text-white">Wildlife Analytics</span>
                        <LogoutButton label="Logout"  class={"flex text-sm px-6 leading-none py-2 bg-white text-blue rounded mt-4 lg:mt-0"} onClick={() => navigate("/logout")} setLogin={!isLogin}/>
                    </div>
                </nav>
                :
                <nav className="flex items-center flex-wrap bg-transparent p-6 w-screen">
                    <div className="flex items-center flex-shrink-0 mr-6 w-full" style={{justifyContent: 'space-between'}}>
                        <span className="flex font-semibold text-xl tracking-tight text-blue">Wildlife Analytics</span>
                    </div>
                </nav>                
            }   
            </>
    )
}

export default Navbar;