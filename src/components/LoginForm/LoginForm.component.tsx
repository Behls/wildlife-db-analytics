import wildlife from "../../assets/wildlife.svg";

function LoginForm(props:any){
    return(
            <div className="flex wrapper w-loginWidth h-loginHeight mx-auto my-16">
                <div className="w-1/2 bg-loginOrange rounded-l-lg overflow-hidden">
                    <img src={wildlife}></img>
                </div>
                <div className="w-1/2 bg-loginBG rounded-r-lg">
                    <h2 className="text-loginHeader text-4xl text-center font-bold">Login</h2>
                    <form action="" className="flex flex-col">
                        <input type="text" name="username" placeholder="Username"/>
                        <input type="password" name="username" placeholder="Password"/>
                        <input type="button" value="Login" />
                    </form>
                    <p className="text-blue">Forgot Password? <strong>Reset here.</strong></p>
                </div>
            </div>
    )
}

export default LoginForm;