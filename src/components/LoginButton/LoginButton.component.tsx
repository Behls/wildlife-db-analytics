import './LoginButton.css';


function LoginButton(props: any){

    return(
        <>

            <button value={props.label} className={`${props.primary} py-0.5 px-3 rounded ${props.text} font-semibold text-xl border-2 ${props.border} hover:${props.hoverbg} hover:${props.hovertext} cursor-pointer duration-300`} onClick={(e)=>props.onClick(e)}>
                {props.label}
            </button>
            
        </>
    )
}

export default LoginButton;