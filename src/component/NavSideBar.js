import { useNavigate } from "react-router-dom"



export default function NavSideBar({children}) {
    const navigate = useNavigate()
    return (
        <div className="drawer lg:drawer-open z-50 ">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar bg-base-200">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1 px-2 mx-2"><input type="text" className="file-input file-input-bordered w-full max-w-xs" /></div>
                    <div className="flex-none lg:block">
                        <ul className="menu menu-horizontal">
                            {/* Navbar menu content here */}
                            <li><h1 className="text-2xl">Name</h1></li>
                            <div className="dropdown dropdown-end z-20">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg" />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                    <li
                                        onClick={()=>navigate("/profile")}
                                    >
                                        <a className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </a>
                                    </li>
                                    <li
                                        onClick={()=>navigate("/settings")}
                                    ><a>Settings</a></li>
                                    <li 
                                        onClick={()=>navigate("/login")}
                                    ><a>Logout</a></li>
                                </ul>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className="grid h-screen m-2 card bg-base-200 rounded-box">
                    {children}
                </div>
            </div>
            
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full text-white bg-blue-500">
                    {/* Sidebar content here */}
                    <li
                        onClick={()=>navigate("/")}
                    ><a className="m-2 hover:bg-base-300 justify-center text-2xl font-bold">ADMIN</a></li>
                    <hr />
                    <li 
                        onClick={()=>navigate("/")}
                    ><a className="hover:bg-base-300 py-4">Dashboard</a></li>
                    <hr />
                    <header className="text-xs pt-3">INTERFACE</header>
                    <div className="dropdown">
                        <label tabIndex={0} className="btn w-full text-white bg-blue-500 border-none justify-start text-xs m-1 hover:text-black">Components</label>
                        <ul tabIndex={0} className="dropdown-content menu z-10 p-2 shadow text-black bg-base-100 rounded-box w-52">
                            <header className="text-center opacity-60">Custom Components:</header>
                            <li 
                                onClick={()=>navigate("/button")}
                            ><a>Buttons</a></li>
                            <li
                                onClick={()=>navigate("/cards")}
                            ><a>Cards</a></li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <label tabIndex={0} className="btn w-full text-white bg-blue-500 border-none justify-start text-xs m-1 hover:text-black">Utilities</label>
                        <ul tabIndex={0} className="dropdown-content menu z-10 p-2 shadow text-black bg-base-100 rounded-box w-52">
                            <header className="text-center opacity-60">Custom Utilities:</header>
                            <li
                                onClick={()=>navigate("/colors")}
                            ><a>Colors</a></li>
                            <li
                                onClick={()=>navigate("/borders")}
                            ><a>Borders</a></li>
                            <li
                                onClick={()=>navigate("/animations")}
                            ><a>Animations</a></li>
                            <li
                                onClick={()=>navigate("/other")}
                            ><a>Other</a></li>
                        </ul>
                    </div>
                    <hr />
                    <header className="text-xs pt-3">ADDONS</header>
                    <div className="dropdown">
                        <label tabIndex={0} className="btn w-full text-white bg-blue-500 border-none justify-start text-xs m-1 hover:text-black">Pages</label>
                        <ul tabIndex={0} className="dropdown-content menu z-10 p-2 shadow text-black bg-base-100 rounded-box w-52">
                            <header className="text-center opacity-60">Login Screen:</header>
                            <li
                                onClick={()=>navigate("/login")}
                            ><a>Login</a></li>
                            <li
                                onClick={()=>navigate("/register")}
                            ><a>Register</a></li>
                            <li
                                onClick={()=>navigate("/forgotpassword")}
                            ><a>Forgot Password</a></li>
                            <header className="text-center opacity-60">Other pages:</header>
                            <li 
                                onClick={()=>navigate("/404/error")}
                            ><a>404 Page</a></li>
                            <li
                                onClick={()=>navigate("/blankpage")}
                            ><a>Blank Page</a></li>
                        </ul>
                    </div>
                    <div>
                        <li
                            onClick={()=>navigate("/charts")}
                        ><a className="hover:bg-base-300 py-4">Charts</a></li>
                    </div>
                    <div>
                        <li
                            onClick={()=>navigate("/tables")}
                        ><a className="hover:bg-base-300 py-4">Tables</a></li>
                    </div>
                </ul>

            </div>
        </div>

    )
}
