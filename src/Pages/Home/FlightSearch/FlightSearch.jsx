// import React, { useState } from 'react';

// const FlightSearch = () => {
//     const [tripType, setTripType] = useState("oneway");
//     const [flights, setFlights] = useState([
//         { from: "", to: "", date: "" }
//     ]);

//     const handleAddFlight = () => {
//         setFlights([...flights, { from: "", to: "", date: "" }]);
//     };

//     console.log(tripType)
//     const handleRemoveFlight = (index) => {
//         setFlights(flights.filter((_, i) => i !== index));
//     };

//     const [selectedClass, setSelectedClass] = useState("Economy");

//     const options = ["Economy", "Premium Economy", "Business", "First Class"];

//     const [passengers, setPassengers] = useState({
//         adults: 1,
//         children: 0,
//         infants: 0,
//     });
//     console.log(passengers)
//     const totalPassengers = passengers.adults + passengers.children + passengers.infants;
//     console.log(selectedClass)

//     const categories = [
//         { key: "adults", label: "Adults", sub: "Ages 13+" },
//         { key: "children", label: "Children", sub: "From 2 to  12" },
//         { key: "infants", label: "Infants", sub: "Aged 0 to 1" },
//     ];

//     const increment = (key) => {
//         setPassengers((prev) => ({ ...prev, [key]: prev[key] + 1 }));
//     };

//     const decrement = (key) => {
//         setPassengers((prev) => ({
//             ...prev,
//             [key]: prev[key] > 0 ? prev[key] - 1 : 0,
//         }));
//     };


//     return (
//         <div>

//             <div className="max-w-5xl  -mt-16 relative z-10  bg-white p-6 rounded-lg shadow-lg mx-3 lg:mx-auto">

//                 {/* Trip type selection */}
//                 <div className='lg:flex justify-between gap-4'>
//                     <div className="flex gap-3 mb-6">
//                         {["oneway", "round", "multi"].map((type) => (

//                             <button
//                                 key={type}
//                                 onClick={() => setTripType(type)}
//                                 className={`px-2 py-1 rounded-lg border-[0.5px] border-gray-300 capitalize ${tripType === type
//                                     ? "bg-blue-500 text-white text-sm"
//                                     : "bg-white hover:bg-gray-100 text-sm"
//                                     }`}
//                             >
//                                 {type === "oneway" && "One Way"}
//                                 {type === "round" && "Round Trip"}
//                                 {type === "multi" && "Multi City"}
//                             </button>
//                         ))}
//                     </div>
//                     <div className='flex'>
//                         <div className=''>
//                             <div className="dropdown">
//                                 <label tabIndex={0} className="btn bg-blue-400 btn-sm m-1">
//                                     {totalPassengers} Travelers
//                                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
//                                         <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
//                                     </svg>
//                                 </label>
//                                 <div
//                                     tabIndex={0}
//                                     className="dropdown-content menu p-4 shadow bg-base-100 rounded-box w-72"
//                                 >
//                                     {categories.map((cat) => (

//                                         <div
//                                             key={cat.key}
//                                             className="flex items-center justify-between py-2 border-b last:border-none"
//                                         >
//                                             <div className="flex items-center gap-3">
//                                                 <span className="text-2xl">{cat.icon}</span>
//                                                 <div>
//                                                     <div className="font-semibold">{cat.label}</div>
//                                                     <div className="text-sm text-gray-500">{cat.sub}</div>
//                                                 </div>
//                                             </div>
//                                             <div className="flex items-center gap-2">
//                                                 <button
//                                                     className="btn btn-circle btn-outline btn-sm"
//                                                     onClick={() => decrement(cat.key)}
//                                                 >
//                                                     −
//                                                 </button>
//                                                 <span className="w-6 text-center">{passengers[cat.key]}</span>
//                                                 <button
//                                                     type="button"
//                                                     tabIndex={-1}
//                                                     className={`btn btn-circle btn-outline btn-sm ${passengers[cat.key] === 8 ? "pointer-events-none opacity-50" : ""
//                                                         }`}
//                                                     onClick={(e) => {
//                                                         e.stopPropagation();
//                                                         if (passengers[cat.key] < 8) {
//                                                             increment(cat.key);
//                                                         }
//                                                     }}
//                                                 >
//                                                     +
//                                                 </button>
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                         <div>

//                             <div className="dropdown">
//                                 <label tabIndex={0} className="btn  bg-blue-400 btn-sm m-1">
//                                     {selectedClass} <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
//                                         <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
//                                     </svg>
//                                 </label>
//                                 <ul
//                                     tabIndex={0}
//                                     className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 "
//                                 >
//                                     {options.map((option) => (
//                                         <li key={option} className="justify-center">
//                                             <label className="flex items-center gap-2 cursor-pointer ">
//                                                 <input
//                                                     type="radio"
//                                                     name="travelClass"
//                                                     value={option}
//                                                     checked={selectedClass === option}
//                                                     onChange={() => setSelectedClass(option)}
//                                                     className="radio radio-sm text-blue-500"
//                                                 />
//                                                 <span>{option}
//                                                 </span>
//                                             </label>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Flight input fields */}
//                 {tripType !== "multi" ? (
//                     <div className="grid lg:grid-cols-3 gap-4 items-end">
//                         <div>
//                             <input
//                                 type="text"
//                                 className="border rounded p-2 w-full"
//                                 placeholder="City or Airport"
//                             />
//                         </div>

//                         <div>
//                             <input
//                                 type="text"
//                                 className="border rounded p-2 w-full"
//                                 placeholder="City or Airport"
//                             />
//                         </div>
//                         <div>
//                             <input type="date" className="border rounded p-2 w-full" />

//                         </div>
//                         {tripType === "round" && (
//                             <div className="col-span-3">
//                                 <input type="date" className="border rounded p-2 w-full" />
//                             </div>
//                         )}
//                     </div>
//                 ) : (
//                     <div className="flex flex-col gap-2">
//                         {flights.map((flight, index) => (
//                             <div
//                                 key={index}
//                                 className="relative  rounded-lg p-4 grid gap-3 lg:grid-cols-[1fr_1fr_auto_auto] items-center"
//                             >
//                                 {flights.length > 1 && (
//                                     <button
//                                         onClick={() => handleRemoveFlight(index)}
//                                         className="lg:hidden absolute -top-4 -right-4 text-red-500 hover:text-red-700 w-8 h-8 flex items-center justify-center border rounded-full bg-white shadow"
//                                         aria-label="Delete flight"
//                                     >
//                                         ✕
//                                     </button>
//                                 )}

//                                 {/* From */}
//                                 <input
//                                     type="text"
//                                     className="border rounded p-2 w-full"
//                                     placeholder="City or Airport"
//                                 />

//                                 {/* To */}
//                                 <input
//                                     type="text"
//                                     className="border rounded p-2 w-full"
//                                     placeholder="City or Airport"
//                                 />

//                                 {/* Date */}
//                                 <input
//                                     type="date"
//                                     className="border rounded p-2 w-full"
//                                 />

//                                 {/* Delete Button for Large Devices (right middle outside) */}
//                                 {flights.length > 1 && (
//                                     <button
//                                         onClick={() => handleRemoveFlight(index)}
//                                         className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 text-red-500 hover:text-red-700 w-8 h-8 items-center justify-center border rounded-full bg-white shadow"
//                                         aria-label="Delete flight"
//                                     >
//                                         ✕
//                                     </button>
//                                 )}

//                             </div>
//                         ))}
//                         <button
//                             onClick={handleAddFlight} disabled={flights.length === 5}
//                             className="text-blue-500 py-1 rounded self-start"
//                         >
//                             + Add More Flight
//                         </button>
//                     </div>
//                 )}

//                 {/* Search Button */}
//                 <div className="mt-6">
//                     <button className="bg-orange-500 text-white px-6 py-2 rounded-lg">
//                         Search
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default FlightSearch;