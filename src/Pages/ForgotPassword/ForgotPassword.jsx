import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';


const ForgotPassword = () => {

    const [email, setEmail] = useState("")
    const [msg, setMsg] = useState("");
    const [loading, setLoading] = useState(false); // <-- For button loading




    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)

        try {
            const res = await axios.post("http://localhost:3000/forgot-password", { email });
            setMsg(res.data.message);
            if (res.data.message === "User not found") {
                toast.error(res.data.message)
            }
            else {
                toast.success(res.data.message)
                setEmail("")
            }

        }
        catch (err) {
            toast.error("Error sending reset link");
        }
        finally{
            setLoading(false)
        }
    };


    return (
        <div className="min-h-screen flex justify-center items-center p-4">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 space-y-6">
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

                {/* Sign In form */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Forgot Password?</h2>
                    <p className='text-sm mb-2'>Please enter your email address and we'll send you
                        a link to reset your password.</p>

                    <form className="space-y-4" onSubmit={handleSubmit} >
                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                required
                                placeholder="someone@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>

                        {/* Submit */}
                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full flex justify-center items-center bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 transition ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
                        >
                            {loading ? (
                                <svg
                                    className="animate-spin h-5 w-5 mr-2 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    ></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
                                    ></path>
                                </svg>
                            ) : null}
                            {loading ? "Sending..." : "Send Link"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;