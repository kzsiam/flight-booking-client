import React from 'react';
import FlightSearch from './FlightSearch/FlightSearch';
import SpecialOffers from './SpecialOffers/SpecialOffers';
import PromotionalBanners from './PromotionalBanners/PromotionalBanners';
import PopularFlights from './PopularFlights/PopularFlights';
import CustomerReviews from './CustomerReviews/CustomerReviews ';

const Home = () => {
    return (
        <div>
            <div className="pb-20 text-black dark:text-red-600">
                {/* Banner */}
                <div className="relative">
                    <img
                        src="https://images.theconversation.com/files/105468/original/image-20151211-8291-vynzgu.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=926&fit=clip"
                        alt="Ocean background"
                        className="w-full lg:h-96 object-cover"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                        <h1 className="text-3xl font-bold">Welcome to <span className="text-primary">Flight Bookings!</span></h1>
                        <p className="text-lg">Find Flights</p>
                    </div>
                </div>
                <div className='max-w-6xl mx-auto'>
                    {/* Flight Search */}
                    <FlightSearch />
                    {/* special offers */}
                    <SpecialOffers></SpecialOffers>
                    <PromotionalBanners></PromotionalBanners>
                    <PopularFlights></PopularFlights>
                    <CustomerReviews></CustomerReviews>

                    

                </div>


            </div>

        </div>
    );
};

export default Home;



