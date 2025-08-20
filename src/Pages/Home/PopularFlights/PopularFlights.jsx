import React from 'react';

const PopularFlights = () => {
    const flights = [
        
    {
        id: 2,
        city: "Kuala Lumpur",
        country: "Malaysia",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Kuala_Lumpur_Skyline_at_dusk_1.jpg",
        tagline: "Experience cultural diversity",
    },
    {
        id: 3,
        city: "Singapore",
        country: "Singapore",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaeLiK4wG127-UYCKbWea328tRPcpg1eSl1Q&s",
        tagline: "Modern city with rich heritage",
    },
    {
        id: 4,
        city: "Bangkok",
        country: "Thailand",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjuc876OuKASc3LmgBD6T2ZKtndoFqeqC7Mg&s",
        tagline: "Vibrant street life & temples",
    },
    {
        id: 5,
        city: "Istanbul",
        country: "Turkey",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQunVlc9ieX4cjRVdAd2AW2yAd1gSG6adWo0A&s",
        tagline: "Where east meets west",
    },
    ];

    
return (
    <section className="max-w-7xl mt-20 mx-auto lg:px-18 px-10">
        {/* Title */}
        <h1 className="text-2xl font-semibold mb-8">Popular Destinations</h1>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {flights.map((place) => (
                <div
                    key={place.id}
                    className="card bg-base-100 shadow-md hover:shadow-xl transition rounded-2xl overflow-hidden cursor-pointer"
                >
                    <figure>
                        <img
                            src={place.image}
                            alt={place.city}
                            className="h-44 w-full object-cover"
                        />
                    </figure>
                    <div className="card-body p-4">
                        <h2 className="card-title text-lg">
                            {place.city}, {place.country}
                        </h2>
                        <p className="text-sm text-gray-600">{place.tagline}</p>
                        <div className="card-actions justify-end mt-3">
                            <button className="btn btn-sm btn-outline rounded-full">
                                Explore
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>

);
};

export default PopularFlights;