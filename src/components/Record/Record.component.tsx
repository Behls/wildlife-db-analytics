function RecordRow(props:any){
    return(
            <div className="wrapper">
                <p className="">{props.id}</p>
                <p className="">{props.type}</p>
                <p className="">{props.status}</p>
                <p className="">{props.case_id}</p>
                <p className="">{props.admission}</p>
                <p className="">{props.discharge}</p>
                <div className="icon-group">
                    {/* icons here */}
                </div>
            </div>
    )
}

export default RecordRow;