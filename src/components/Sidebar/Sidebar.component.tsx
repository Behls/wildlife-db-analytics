import AvatarPlaceholder from "../AvatarPlaceholder/Avatar.component";

function Sidebar(){

    return(  
        <>
        <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-28 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
                <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">


                    <AvatarPlaceholder/>
                    <p className="text-center mb-1 text-white font-bold">John Smith</p>
                    <p className="text-center mb-3 text-orange">Volunteer</p>
                    <hr className="w-24 ml-auto mr-auto border-lineBlue mt-3 mb-5"></hr>

                    <ul className="space-y-2">
                        <p className="mlmb-3 text-orange">Analytics</p>
                        <li>
                            <a href="#" className="flex items-center pt-1 pb-1 pl-4 pr-4 text-sm leading-3  font-normal text-grey rounded-lg dark:text-white hover:text-lineBlue">
                                <svg aria-hidden="true" className="w-6 h-6 text-orange transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                                <span className="ml-3 text-grey hover:text-lineBlue">Reporting Tools</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center pt-1 pb-1 pl-4 pr-4 text-sm leading-3 font-normal text-grey rounded-lg dark:text-white hover:text-lineBlue">
                            <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-grey transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                            <span className="flex-1 ml-3 whitespace-nowrap text-grey hover:text-lineBlue">Analysis Tools</span>
                            </a>
                        </li>
                        
                        <li>
                            <a href="#" className="flex items-center pt-1 pb-1 pl-4 pr-4 text-sm leading-3  font-normal text-grey rounded-lg dark:text-white hover:text-lineBlue">
                            <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-grey transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                            <span className="flex-1 ml-3 whitespace-nowrap text-grey hover:text-lineBlue">Data Analytics</span>
                            </a>
                        </li>

                    </ul>

                    <ul className="space-y-2 mt-3">
                        <p className="mlmb-3 text-orange">Patients</p>
                        <li>
                            <a href="#" className="flex items-center pt-1 pb-1 pl-4 pr-4 text-sm leading-3  font-normal text-gray-900 rounded-lg dark:text-white hover:text-lineBlue">
                                <svg aria-hidden="true" className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                                <span className="ml-3 text-grey hover:text-lineBlue">Search Patients</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center pt-1 pb-1 pl-4 pr-4 text-sm leading-3 font-normal text-gray-900 rounded-lg dark:text-white hover:text-lineBlue">
                            <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                            <span className="flex-1 ml-3 whitespace-nowrap text-grey hover:text-lineBlue">Add Patients</span>
                            </a>
                        </li>
                        
                        <li>
                            <a href="#" className="flex items-center pt-1 pb-1 pl-4 pr-4 text-sm leading-3  font-normal text-gray-900 rounded-lg dark:text-white hover:text-lineBlue">
                            <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                            <span className="flex-1 ml-3 whitespace-nowrap text-grey hover:text-lineBlue">List Patients</span>
                            </a>
                        </li>
                    </ul>

                    <ul className="space-y-2 mt-3 mb-5">
                        <p className="mlmb-3 text-orange">Quick Links</p>
                        <li>
                            <a href="#" className="flex items-center pt-1 pb-1 pl-4 pr-4 text-sm leading-3 font-normal text-gray-900 rounded-lg dark:text-white hover:text-lineBlue">
                            <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                            <span className="flex-1 ml-3 whitespace-nowrap text-grey hover:text-lineBlue">Calendar</span>
                            </a>
                        </li>
                        
                    </ul>

                </div>
                </aside>
        </>

    )
}

export default Sidebar;

