import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-cyan-700 text-white py-10">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Discover */}
                    <div>
                        <h3 className="font-semibold mb-3">Discover</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:underline">Home</a></li>
                            <li><a href="#" className="hover:underline">Terms</a></li>
                            <li><a href="#" className="hover:underline">Talent & Culture</a></li>
                            <li><a href="#" className="hover:underline">About Us</a></li>
                            <li><a href="#" className="hover:underline">Refund Policy</a></li>
                            <li><a href="#" className="hover:underline">EMI Policy</a></li>
                            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Payment Methods */}
                    <div>
                        <h3 className="font-semibold mb-3">Payment Methods</h3>
                        <div className="grid grid-cols-3 gap-3">
                            <h1>payment method images</h1>
                        </div>
                    </div>

                    {/* Help Section */}
                    <div>
                        <h3 className="font-semibold mb-3">Need Help ?</h3>
                        <p className="text-sm mb-3">
                            
                            Have questions about flights, payments, or your booking? We’re just a call or message away — 24/7 support available.


                        </p>
                        <h3 className="font-semibold mb-2">Experience Center</h3>
                        <p className="text-sm">
                            Sheltech Ayaan, House 58, Road 6 & 11, <br />
                            Block C, Level 2, Banani, Dhaka
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-semibold mb-3">Contact</h3>
                        <p className="text-sm">info@meghfly.com</p>
                        <p className="text-sm mb-3">+88 09678 76485745</p>

                        {/* Social icons */}
                        <div className="flex gap-4 mt-2">
                            <a href="#" className="btn btn-circle btn-sm  border-none">
                                <h1>fb</h1>
                            </a>
                            <a href="#" className="btn btn-circle btn-sm  border-none">
                                <h1>insta</h1>
                                </a>
                            <a href="#" className="btn btn-circle btn-sm  border-none">
                                <h1>yt</h1>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Logo & CopyRight */}
                <div className="border-t border-gray-500 mt-8 pt-4 text-center text-sm flex flex-col md:flex-row items-center justify-between px-6 max-w-7xl mx-auto">
                    <div className="flex items-center gap-2 justify-center md:justify-start">
                        <img src="https://i.ibb.co/WtW3hH7/airplane.png" alt="logo" className="w-6 h-6" />
                        <span className="font-bold">MeghFly</span>
                    </div>
                    <p className="mt-2 md:mt-0">© Copyright MeghFly Ltd.</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;