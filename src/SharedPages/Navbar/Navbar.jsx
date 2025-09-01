import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider';

const Navbar = () => {
    const { user, logout } = useAuth()
    console.log(user)
    return (
        <div className=' shadow-md'>
            <div className="navbar lg:px-60 mx-auto  container">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">


                            <Link>Flight</Link>
                            {
                                user ? <>
                                    <Link to={'/dashboard'}>Dashboard</Link>
                                    <Link>My Bookings</Link>
                                </> : <></>
                            }

                        </ul>
                    </div>
                    <Link className="btn btn-ghost text-xl">MeghFly</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <div className='flex gap-5 text-sm font-semibold'>

                            <Link>Flight</Link>
                            {
                                user ? <>
                                    <Link to={'/dashboard'}>Dashboard</Link>
                                    <Link>My Bookings</Link>
                                </> : <></>
                            }
                        </div>
                    </ul>
                </div>
                <div className="navbar-end text-sm font-semibold">
                    {
                        user ? <>
                            <div className="dropdown dropdown-end">
                                {/* Profile Button */}
                                <label tabIndex={0} className="">
                                     <div className="flex items-center gap-2 py-1 px-2  shadow-sm cursor-pointer  rounded-2xl hover:bg-gray-50">
                                        {/* Profile Circle */}
                                        <div className="w-8 h-8 bg-blue-100 rounded-2xl flex items-center justify-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="w-6 h-6 text-blue-600"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>

                                        {/* Dropdown Arrow */}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            className="w-4 h-4 text-gray-500"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                                        </svg>
                                    </div>
                                </label>





                                {/* Dropdown Content */}
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                                >
                                    <li className="font-semibold px-2 text-gray-700">
                                        {user?.email || "guest@example.com"}
                                    </li>
                                    <div className="divider my-1"></div>
                                    <li><a>Booking History</a></li>
                                    <li><a>Account</a></li>
                                    <li><a>My Wishlist</a></li>
                                    <li><a>Settings</a></li>
                                    <li>
                                        <button onClick={logout}>Logout</button>
                                    </li>
                                </ul>
                            </div>
                        </> : <Link to={'/signin'}>Signin</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;