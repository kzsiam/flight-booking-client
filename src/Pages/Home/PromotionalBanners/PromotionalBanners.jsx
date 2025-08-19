import React, { useEffect, useState } from 'react';

const banners = [
    "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
    "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
    "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
    "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp",
];

const PromotionalBanners = () => {


    const [current, setCurrent] = useState(0);

    // Auto-slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % banners.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + banners.length) % banners.length);
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % banners.length);
    };


    return (
        <div className="max-w-7xl mt-20 mx-auto lg:px-18 px-10 relative">
            <div className="relative w-full overflow-hidden rounded-2xl">
                <img
                    src={banners[current]}
                    alt={`Slide ${current + 1}`}
                    className="w-full object-contain transition-all duration-700 h-[400px]"
                />

                {/* Arrows */}
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <button onClick={prevSlide} className="btn bg-gray-700 btn-circle">❮</button>
                    <button onClick={nextSlide} className="btn bg-gray-50 btn-circle">❯</button>
                </div>

                
            </div>
        </div>



    );
};

export default PromotionalBanners;