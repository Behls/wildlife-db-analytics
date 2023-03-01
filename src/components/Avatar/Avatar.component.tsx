
function Avatar(props:any){

    const getImg = () =>{
          // fetch request to db or api
    }
    return(
        <div className="relative w-24 h-24 overflow-hidden bg-gray-100 rounded-full ">
            <img src={props.img} />
        </div>
    )
}

export default Avatar;