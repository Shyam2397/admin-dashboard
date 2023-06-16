export default function NavSideBar() {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar bg-base-300">
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
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg" />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                    <li>
                                        <a className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </a>
                                    </li>
                                    <li><a>Settings</a></li>
                                    <li><a>Logout</a></li>
                                </ul>
                            </div>
                        </ul>
                    </div>
                </div>
                {/* Page content here */}
                
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200">
                    {/* Sidebar content here */}
                    <li className="text-2xl px-20"><a>ADMIN</a></li>
                    <hr />
                    <li className="py-2"><a>Dashboard</a></li>
                    <hr />
                    <header className="text-xs pt-3">INTERFACE</header>
                    <div className="dropdown">
                        <label tabIndex={0} className="btn w-full justify-start text-xs m-1">Components</label>
                        <ul tabIndex={0} className="dropdown-content menu z-10 p-2 shadow bg-base-100 rounded-box w-52">
                            <header className="text-center opacity-60">Custom Components:</header>
                            <li><a>Buttons</a></li>
                            <li><a>Cards</a></li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <label tabIndex={0} className="btn w-full justify-start text-xs m-1">Utilities</label>
                        <ul tabIndex={0} className="dropdown-content menu z-10 p-2 shadow bg-base-100 rounded-box w-52">
                            <header className="text-center opacity-60">Custom Utilities:</header>
                            <li><a>Colors</a></li>
                            <li><a>Borders</a></li>
                            <li><a>Animations</a></li>
                            <li><a>Other</a></li>
                        </ul>
                    </div>
                    <hr />
                    <header className="text-xs pt-3">ADDONS</header>
                    <div className="dropdown">
                        <label tabIndex={0} className="btn w-full justify-start text-xs m-1">Pages</label>
                        <ul tabIndex={0} className="dropdown-content menu z-10 p-2 shadow bg-base-100 rounded-box w-52">
                            <header className="text-center opacity-60">Login Screen:</header>
                            <li><a>Login</a></li>
                            <li><a>Register</a></li>
                            <li><a>Forgot Password</a></li>
                            <header className="text-center opacity-60">Other pages:</header>
                            <li><a>404 Page</a></li>
                            <li><a>Blank Page</a></li>
                        </ul>
                    </div>
                    <div>
                        <li className="py-0"><a>Charts</a></li>
                    </div>
                    <div>
                        <li className="py-2"><a>Tables</a></li>
                    </div>
                </ul>

            </div>
        </div>
    )
}
