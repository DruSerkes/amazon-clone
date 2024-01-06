import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const Banner = () => {
  return (
    <div className="relative">
      <Carousel
        autoPlay
        infiniteLoop
        showArrows
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
      >
        <div>
          <img
            loading="lazy"
            src="https://m.media-amazon.com/images/I/71eyxnCHiwL._SX3000_.jpg"
            alt="img 1"
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://m.media-amazon.com/images/I/61buVBjoy+L._SX3000_.jpg"
            alt="img 2"
          />
        </div>

        <div>
          <img
            loading="lazy"
            src="https://m.media-amazon.com/images/I/61wkilFpWML._SX3000_.jpg"
            alt="img 3"
          />
        </div>

        <div>
          <img
            loading="lazy"
            src="https://m.media-amazon.com/images/I/61axvnmr1VL._SX3000_.jpg"
            alt="img 4"
          />
        </div>

        <div>
          <img
            loading="lazy"
            src="https://m.media-amazon.com/images/I/71bnaKU0nkL._SX3000_.jpg"
            alt="img 5"
          />
        </div>
      </Carousel>
      <div className="absolute w-full h-[45%] bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
    </div>
  );
};
