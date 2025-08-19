import React, { useRef, useState } from "react";

const SpecialOffers = () => {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

 const offers = [
  {
    id: 1,
    title: "Up to 20% discount and extra 10 kg baggage allowance for students",
    image: "https://images.seeklogo.com/logo-png/4/1/emirates-airlines-logo-png_seeklogo-47502.png",
    link: "#",
  },
  {
    id: 2,
    title: "Get Up to 32% Discount on Flights to Brisbane",
    image: "https://images.seeklogo.com/logo-png/14/1/turkish-airlines-logo-png_seeklogo-143221.png",
    link: "#",
  },
  {
    id: 3,
    title: "Get up to 12% discount on all routes.",
    image: "https://images.seeklogo.com/logo-png/10/1/pegasus-airlines-logo-png_seeklogo-107154.png",
    link: "#",
  },
  {
    id: 4,
    title: "Special Summer Deal with Emirates",
    image: "https://images.seeklogo.com/logo-png/34/1/us-bangla-airlines-logo-png_seeklogo-342226.png",
    link: "#",
  },
  {
    id: 5,
    title: "Fly cheaper with Singapore Airlines deals",
    image: "https://images.seeklogo.com/logo-png/8/1/malaysia-airlines-logo-png_seeklogo-87686.png",
    link: "#",
  },
];


  const scrollToIndex = (index) => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.children[0].offsetWidth + 24; // card width + gap
      carouselRef.current.scrollTo({
        left: cardWidth * index,
        behavior: "smooth",
      });
    }
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % offers.length;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const handlePrev = () => {
    const newIndex =
      (currentIndex - 1 + offers.length) % offers.length;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  return (
    <div className="mt-20 max-w-7xl mx-auto lg:px-18 px-10 relative">
      <h1 className="text-xl font-semibold mb-6">Special Offers</h1>

      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 hover:cursor-pointer -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full hover:bg-gray-100"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left-icon lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
        </button>

        {/* Cards Container */}
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-hidden scroll-smooth snap-x snap-mandatory"
        >
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="min-w-[300px] max-w-[300px] bg-white rounded-xl shadow-md flex-shrink-0 snap-center"
            >
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-32 object-contain p-4"
              />
              <div className="p-4 flex flex-col justify-between h-32">
                <p className="text-sm font-semibold">{offer.title}</p>
                <a
                  href={offer.link}
                  className="btn btn-warning btn-sm mt-4 w-fit"
                >
                  ↗ Learn More
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute hover:cursor-pointer right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full hover:bg-gray-100"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
        </button>
      </div>
    </div>
  );
};

export default SpecialOffers;