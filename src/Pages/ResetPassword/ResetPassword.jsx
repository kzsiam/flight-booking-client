// import { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";

// const ResetPassword = () => {
//   const { token } = useParams();
//   const navigate = useNavigate();
//   const [password, setPassword] = useState("");
//   const [msg, setMsg] = useState("");

//   const handleReset = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post(`http://localhost:3000/reset-password/${token}`, { password });
//       setMsg(res.data.message);
//       setTimeout(() => navigate("/login"), 2000);
//     } catch (err) {
//       setMsg("Invalid or expired link");
//     }
//   };

//   return (
//     <div className="p-6">
//       <h2>Reset Password</h2>
//       <form onSubmit={handleReset}>
//         <input
//           type="password"
//           placeholder="New password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="border p-2"
//         />
//         <button type="submit" className="btn btn-primary">Reset</button>
//       </form>
//       <p>{msg}</p>
//     </div>
//   );
// };

// export default ResetPassword;