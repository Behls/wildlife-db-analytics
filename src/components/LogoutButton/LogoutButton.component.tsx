
function LogoutButton(props: any){

    return(
        <>

            <button value={props.label} className={props.class} onClick={(e)=>props.onClick(e)}>
                {props.label}
            </button>

            {/* `${props.primary} py-0.5 px-3 rounded ${props.text} font-semibold text-xl border-2 ${props.border} hover:${props.hoverbg} hover:${props.hovertext} cursor-pointer duration-300` */}
            
        </>
    )
}

export default LogoutButton;