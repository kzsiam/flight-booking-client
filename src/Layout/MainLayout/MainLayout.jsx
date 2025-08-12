import { Link, Outlet } from 'react-router-dom';
import Footer from '../../SharedPages/Footer/Footer';
import Navbar from '../../SharedPages/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div className='w-full'>
            <div>
                <Navbar></Navbar>
            </div>
            <div className=''>
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;