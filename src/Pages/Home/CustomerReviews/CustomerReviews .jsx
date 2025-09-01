import React from 'react';

const reviews = [
  {
    name: "John Doe",
    location: "New York, USA",
    rating: 5,
    comment:
      "Amazing experience! Booking my flight was super easy and quick. Highly recommend!",
  },
  {
    name: "Sara Khan",
    location: "Dhaka, Bangladesh",
    rating: 4,
    comment:
      "Great customer support and smooth booking process. Will use again.",
  },
  {
    name: "Ali Rahman",
    location: "London, UK",
    rating: 5,
    comment:
      "Best flight booking platform I’ve ever used. Very user-friendly.",
  },
];

const CustomerReviews = () => {
    
    return (
        <div>
            <section className="max-w-7xl mt-20 mx-auto lg:px-18 px-10">
                <h2 className="text-3xl font-bold text-center mb-12">
                    What Customers Say About Us
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review, idx) => (
                        <div
                            key={idx}
                            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-500 flex flex-col justify-between"
                        >
                            {/* Rating */}
                            <div className="flex items-center mb-3">
                                {Array.from({ length: review.rating }).map((_, i) => (
                                    <svg
                                        key={i}
                                        className="w-5 h-5 text-yellow-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.36 2.44a1 1 0 00-.364 1.118l1.287 3.95c.3.921-.755 1.688-1.54 1.118l-3.36-2.44a1 1 0 00-1.175 0l-3.36 2.44c-.784.57-1.838-.197-1.539-1.118l1.286-3.95a1 1 0 00-.364-1.118L2.034 9.377c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.95z" />
                                    </svg>
                                ))}
                            </div>

                            {/* Comment */}
                            <p className="text-gray-700 mb-4 flex-1">{review.comment}</p>

                            {/* Customer info */}
                            <div className="mt-4">
                                <h4 className="font-semibold">{review.name}</h4>
                                <p className="text-gray-500 text-sm">{review.location}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* See all reviews button */}
                <div className="text-center mt-12">
                    <button className="btn bg-blue-600 hover:bg-blue-700 text-white  hover:scale-105 transition-transform duration-300">
                        See All Reviews
                    </button>
                </div>
            </section>
        </div>
    );
};

export default CustomerReviews;