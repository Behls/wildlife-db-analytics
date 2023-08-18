function Button(props: any){

    return(
        <>
            <button value={props.label} className={props.class} onClick={(e)=>props.onClick(e)}>
                {props.label}
            </button>
        </>
    )
}

export default Button;