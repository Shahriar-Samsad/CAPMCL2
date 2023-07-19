import { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import logo from "../../Assets/Icons/LOGO.gif";
import { AuthContext } from "../../Contexts/AuthProvider";

export const Navbar = () => {
    const { user, logout } = useContext(AuthContext);


    const logoutUser = () => {
        logout()
            .then(() => {
                toast.success("successfully logged out");
                alert("successfully logged out")
            })
            .catch(err => console.log(err.message))
    }

    return (
        <header class="relative flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-md py-4">
            <nav class="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between md:px-16 text-[16px]" aria-label="Global">
                <div class="flex items-center justify-between">
                    <Link class="flex text-xl font-semibold " to="/">
                        <img src={logo} alt="" className="w-28 max-h-[90px] object-cover" />
                        <span className="inline-flex ">Chapai Agro Co.LTD</span>
                    </Link>
                    <div class="sm:hidden">
                        <button type="button" class="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md  font-medium bg-white text-gray-700 shadow-sm align-middle " data-hs-collapse="#navbar-with-mega-menu" aria-controls="navbar-with-mega-menu" aria-label="Toggle navigation">

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 hs-collapse-open:hidden">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                            </svg>


                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="hs-collapse-open:block hidden w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>

                        </button>
                    </div>
                </div>
                <div id="navbar-with-mega-menu" class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
                    <div class="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
                        <Link class="font-medium text-gray-600 hover:text-gray-400" to="/">Home</Link>


                        <div class="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none]">
                            <button id="hs-mega-menu-basic-dr" type="button" class="flex items-center w-full text-gray-600 hover:text-gray-400 font-medium  ">
                                About us
                                <svg class="ml-2 w-2.5 h-2.5 text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                                </svg>
                            </button>

                            <div class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 z-10 bg-white sm:shadow-md rounded-lg p-2  before:absolute top-full sm:border before:-top-5 before:left-0 before:w-full before:h-5 hidden" >

                                <Link class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-md text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500" to="/corporate-profile">
                                    corporate-profile
                                </Link>
                                <Link class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-md text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500" to="/mission-vision-value">
                                    mission-vision-values
                                </Link>

                            </div>
                        </div>


                        <div class="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none]">
                            <button id="hs-mega-menu-basic-dr" type="button" class="flex items-center w-full text-gray-600 hover:text-gray-400 font-medium  ">
                                Enterprize
                                <svg class="ml-2 w-2.5 h-2.5 text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                                </svg>
                            </button>

                            <div class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 z-10 bg-white sm:shadow-md rounded-lg p-2  before:absolute top-full sm:border before:-top-5 before:left-0 before:w-full before:h-5 hidden" >


                                <Link class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-md text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500" to="/services">
                                    Service sector
                                </Link>

                            </div>
                        </div>



                        <Link class="font-medium text-gray-600 hover:text-gray-400" to="/contact">Contact</Link>
                        <Link class="font-medium text-gray-600 hover:text-gray-400" to="/chat">Chat</Link>

                        <Link class="font-medium text-gray-600 hover:text-gray-400" to="/signup">
                            <button className="py-2.5 px-5 rounded-md bg-gradient-to-tr from-orange-500 to-rose-400">Signup</button>
                        </Link>

                        {
                            user?.email && <div>
                                <img class="inline-block h-[2.375rem] w-[2.375rem] rounded-full ring-2 ring-white dark:ring-gray-800" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image_Description" />
                                <span className="inline-flex justify-center items-center cursor-pointer" onClick={logoutUser}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 pt-1">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                                    </svg>

                                </span>
                            </div>
                        }

                    </div>
                </div>
            </nav>
        </header>
    );
};