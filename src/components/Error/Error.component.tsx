import { useState } from "react";
import { IError } from "utils/types";
import BlockIcon from '@mui/icons-material/Block';

function ErrorModal(){

    const [showErrorModal, setShowErrorModal] = useState(false);

    // const {title, error} = Error;


return(
        
    // <div className="wrapper flex flex-col flex-wrap bg-transparent fixed w-modalErrorWidth h-modalErrorHeight drop-shadow-xl">
    //     <div className="h-1/3 w-full bg-error rounded-t-lg flex justify-center">
    //         <BlockIcon fontSize="large" className="self-center"/>
    //     </div>
    //     <div className="h-2/3 w-full bg-white rounded-b-lg overflow-auto flex flex-col">
    //         <h2 className="title text-darkBlue box-border py-5 px-5 font-semibold text-xl text-center">Ooops!</h2>
    //         <p className="box-border pt-2 pb-7 px-5 text-center text-darkBlue">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget nunc arcu. Etiam interdum semper vulputate.</p>
    //         <button className="bg-error box-border ml-auto mr-auto mt-2 mb-3 py-2 px-32 hover:bg-red-700">Close</button>
    //     </div>
    // </div>

    <div className="wrapper bg-transparent w-full h-screen flex justify-center items-center">
        <div className="modal w-modalErrorWidth h-modalErrorHeight absolute rounded-lg text-center overflow-hidden bg-white drop-shadow-dropModal">
            <div className="icon mt-8">
                <BlockIcon className="self-center text-error" sx={{ fontSize: "48px" }}/>
            </div>

            <h2 className="title text-darkBlue box-border pt-5 pb-1 px-5 font-semibold text-xl">Ooops!</h2>
            <p className="subtitle text-darkBlue py-2 px-2">An error has occured with the application.</p>
            <button className="bg-error rounded-none hover:bg-red-700 bottom-0 left-0 right-0 absolute w-full border-none">Back to Dashboard</button>
        </div>
    </div>

    )
}

export default ErrorModal;