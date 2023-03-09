function Summary(props: any){
return(
        <div className="summary flex flex-col bg-white drop-shadow-lg w-52 h-24 rounded-lg">
            <p className="text-darkBlue font-semibold mr-3 ml-4 mt-2 mb-1 box-border">{props.title}</p>
            <p className="text-error font-bold  text-3xl mr-3 ml-4 mt-1 mb-2 box-border">{props.percentage}%</p>
        </div>
    )
}
export default Summary;