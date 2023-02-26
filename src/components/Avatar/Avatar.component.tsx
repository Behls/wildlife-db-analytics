
function AvatarPlaceholder(props: any){


    const getImg = () =>{
            // fetch request to db or api
    }

    return(
        <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            {props.img}
        </div>
    )
}

export default AvatarPlaceholder;