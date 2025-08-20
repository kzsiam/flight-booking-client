import React, { useState } from "react";

import { Link } from "react-router-dom";

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);

    

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
                {/* Logo */}
                <div className="flex items-center gap-2 mb-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-7 h-7 text-blue-600"
                    >
                        <path d="M12 2L15 8H9l3-6zM2 22h20L12 13 2 22z" />
                    </svg>
                    <h1 className="text-xl font-bold text-blue-600">MeghFly</h1>
                </div>

                {/* Title */}
                <h2 className="text-2xl font-semibold mb-2">Sign Up</h2>
                <p className="text-sm text-gray-500 mb-6">
                    Create an account to easily use meghfly.com services.
                </p>

                {/* Email */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        placeholder="someone@example.com"
                        className="w-full border rounded-lg px-3 py-2 mb-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                </div>


                {/* Password */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Password
                    </label>
                    <div className="relative w-full">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="some@pass#123"
                            className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                        <button
                            type="button"
                            className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
                            onClick={() => setShowPassword((prev) => !prev)}
                        >
                            {showPassword ?
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4">
                                    <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                    <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clip-rule="evenodd" />
                                </svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                                    <path d="M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-18-18ZM22.676 12.553a11.249 11.249 0 0 1-2.631 4.31l-3.099-3.099a5.25 5.25 0 0 0-6.71-6.71L7.759 4.577a11.217 11.217 0 0 1 4.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113Z" />
                                    <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0 1 15.75 12ZM12.53 15.713l-4.243-4.244a3.75 3.75 0 0 0 4.244 4.243Z" />
                                    <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 0 0-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 0 1 6.75 12Z" />
                                </svg>
                            }
                        </button>
                    </div>
                </div>


                {/* Terms */}
                <div className="flex items-center mb-6 mt-2">
                    <input
                        type="checkbox"
                        className="checkbox checkbox-primary w-4 h-4 mr-2"
                    />
                    <span className="text-sm text-gray-600">
                        By creating an account you agree to our{" "}
                        <a href="#" className="text-blue-600 hover:underline">
                            Terms & Conditions
                        </a>
                    </span>
                </div>

                {/* Button */}
                <button className="btn btn-primary w-full">Sign Up</button>

                {/* Footer */}
                <p className="mt-4 text-sm text-center text-gray-600">
                    Already have an account?{" "}
                    <Link to={'/signin'} className="text-blue-600 font-medium hover:underline">
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;















// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Signup = () => {
//     const [showPassword, setShowPassword] = useState(false);
//     return (
//         <div>
//             <div className="min-h-screen flex items-center justify-center p-4">
//                 <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 space-y-6">

//                     {/* Sign In form */}
//                     <div>
//                         <h2 className="text-xl font-semibold mb-4">Sign Up</h2>

//                         <form className="space-y-4">
//                             {/* Email */}
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                                     Email
//                                 </label>
//                                 <input
//                                     type="email"
//                                     placeholder="someone@example.com"
//                                     className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
//                                 />
//                             </div>

//                             {/* Password */}
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                                     Password
//                                 </label>
//                                 <div className="relative w-full">
//                                     <input
//                                         type={showPassword ? "text" : "password"}
//                                         placeholder="some@pass#123"
//                                         className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
//                                     />
//                                     <button
//                                         type="button"
//                                         className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
//                                         onClick={() => setShowPassword((prev) => !prev)}
//                                     >
//                                         {showPassword ?
//                                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4">
//                                                 <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
//                                                 <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clip-rule="evenodd" />
//                                             </svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
//                                                 <path d="M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-18-18ZM22.676 12.553a11.249 11.249 0 0 1-2.631 4.31l-3.099-3.099a5.25 5.25 0 0 0-6.71-6.71L7.759 4.577a11.217 11.217 0 0 1 4.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113Z" />
//                                                 <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0 1 15.75 12ZM12.53 15.713l-4.243-4.244a3.75 3.75 0 0 0 4.244 4.243Z" />
//                                                 <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 0 0-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 0 1 6.75 12Z" />
//                                             </svg>
//                                         }
//                                     </button>
//                                 </div>
//                             </div>

//                             {/* Submit */}
//                             <button
//                                 type="submit"
//                                 className="w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 transition"
//                             >
//                                 Sign up
//                             </button>
//                         </form>
//                     </div>

//                     {/* Sign Up link */}
//                     <div className="text-center text-sm">
//                         Already have an Account?{" "}
//                         <Link to={'/signin'} className="text-blue-500 hover:underline font-medium">
//                             Signin
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Signup;