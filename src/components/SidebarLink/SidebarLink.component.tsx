
function SidebarLink(props:any){
    return(
            <div id="link">
                <div id="id">
                    {props.icon}
                </div>
                <a href={props.link}></a>
            </div>
    )
}

export default SidebarLink;