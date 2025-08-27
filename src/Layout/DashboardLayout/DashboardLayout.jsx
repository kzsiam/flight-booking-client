import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open mb-96">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <div className='flex justify-around'>
                        <Link to='/'>
                            <h1 className='lg:text-4xl text-2xl font-sans font-bold text-center'>Megh<span className='text-blue-500 my-0.5'>Fly</span></h1>
                        </Link>
                        {
                             <h1 className='font-bold text-lg'> Name: Siam</h1>
                        }
                        <label htmlFor="my-drawer" className=" lg:hidden  drawer-button">hello</label>

                    </div>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 font-semibold">
                        {/* Sidebar content here */}
                        {
                             <>
                                <li><Link to={"/"} className="mb-5" >Home</Link></li>
                                <li><Link className="mb-5">Add Banners</Link></li>
                                <li><Link className="mb-5">Special Offers</Link></li>
                                <li><Link className="mb-5">Orders</Link></li>
                            </>
                        }

                        {
                             <li><Link to={"/dashboard/allUsers"} className="mb-5">All Users</Link></li>
                        }
                        {
                             <li><Link to={"/dashboard/history"} className="mb-5">DashBoard History</Link></li>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;