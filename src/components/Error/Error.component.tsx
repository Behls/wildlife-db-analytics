import { useState } from "react";
import { IError } from "utils/types";
import BlockIcon from '@mui/icons-material/Block';

function ErrorModal(Error: IError){

    const [showErrorModal, setShowErrorModal] = useState(false);

    const {title, error} = Error;


return(
        
//   <div id="staticModal" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
//       <div className="relative w-full h-full max-w-2xl md:h-auto">
//           <div className="relative bg-white rounded-lg shadow">
//               <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-green">
//                   <h3 className="text-xl font-semibold text-gray-900">
//                       {title}
//                   </h3>
//                   <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="staticModal">
//                       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
//                   </button>
//               </div>

//               <div className="p-6 space-y-6">
//                   <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
//                       {error}
//                   </p>
//               </div>
//               <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
//                   <button type="button" className="text-white bg-blue hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10" onClick={()=>setShowErrorModal(!showErrorModal)}>Close</button>
//               </div>
//           </div>
//       </div>
//   </div>

    <div className="wrapper flex flex-col bg-transparent fixed w-modalErrorWidth h-modalErrorHeight drop-shadow-xl">
        <div className="h-1/3 w-full bg-error rounded-t-lg">
            <BlockIcon className="h-6 w-6" />
        </div>
        <div className="h-2/3 w-full bg-white rounded-b-lg"></div>
    </div>
        
    )
}

export default ErrorModal;