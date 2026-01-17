"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade, Parallax } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import Link from "next/link";

const sliderData = [
  {
    id: 1,
    image: "https://www.eschoolnews.com/files/2024/12/k-12-tech-innovation-news.jpeg",
    tag: "minimalism",
    title: "taste future",
    desc: "Star Tech is the Best Laptop, Computer, Gaming PC, Component, Accessories."
  },
  {
    id: 2,
    image: "https://www.innovationnewsnetwork.com/wp-content/uploads/2024/02/shutterstockPhonlamai-Photo_1058815598-696x392.jpg",
    tag: "audio",
    title: "sonic gear",
    desc: "Discover premium audio devices that redefine your listening experience."
  },
  {
    id: 3,
    image: "https://img.freepik.com/free-photo/smartwatch-with-message-icons-world-map_1134-386.jpg?semt=ais_hybrid&w=740&q=80",
    tag: "lifestyle",
    title: "pure watch",
    desc: "Timekeeping evolved with elegance and smart integration."
  },
  {
    id: 4,
    image: "https://img-cdn.inc.com/image/upload/f_webp,c_fit,w_1920,q_auto/images/panoramic/getty_178976393_192891.jpg",
    tag: "ecosystem",
    title: "apple essence",
    desc: "The perfect harmony of design and powerful performance."
  },
  {
    id: 5,
    image: "https://cdn.itm.ac.in/2024/05/tech-jobs-in-India--6--4.webp",
    tag: "workspace",
    title: "setup flow",
    desc: "Redefine your desk with tools built for peak productivity."
  },
  {
    id: 6,
    image: "https://url-shortening-technology.web.app/the-future-of-url-shortening-technology.webp",
    tag: "tablet",
    title: "digital ink",
    desc: "Your canvas for creativity, anywhere and everywhere."
  },
  {
    id: 7,
    image: "https://images.shiksha.com/mediadata/images/articles/1630614983php5LcRjr.png",
    tag: "vision",
    title: "beyond optics",
    desc: "Clearer perspectives with the most advanced lens technology."
  },
  {
    id: 8,
    image: "https://fineartshippers.com/wp-content/uploads/2024/12/bigstock-ai-the-concept-of-artificial-473117115-1.jpg",
    tag: "comfort",
    title: "sit smart",
    desc: "Ergonomics meets aesthetics for your long working hours."
  },
  {
    id: 9,
    image: "https://bernardmarr.com/wp-content/uploads/2023/07/Two-Technology-Trends-Shaping-The-Future-Of-Gaming.jpg",
    tag: "gaming",
    title: "cyber edge",
    desc: "Unleash the gamer within with high-performance hardware."
  },
  {
    id: 10,
    image: "https://www.nasdaq.com/sites/acquia.prod/files/styles/720x400/public/2019-08/technology10.jpg?h=e970c49e&itok=EIOoRtSG",
    tag: "mobile",
    title: "connect life",
    desc: "Stay connected with the smartest mobile innovations available."
  }
];

const HeroSlider = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade, Parallax]}
        effect="fade"
        speed={1500}
        parallax={true}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        className="h-full w-full"
      >
        {sliderData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[8000ms]"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black/40 bg-gradient-to-r from-black/60 via-transparent to-transparent"></div>
              </div>

              {/* Text Content Overlay */}
              <div className="relative z-10 h-full max-w-7xl mx-auto px-10 md:px-24 flex flex-col justify-center items-start">
                
                <span className="mb-4 text-xs font-bold uppercase tracking-[0.4em] text-cyan-400">
                  {slide.tag}
                </span>
                
                <h1 
                  data-swiper-parallax="-300"
                  className="mb-6 text-5xl font-light tracking-tighter text-white md:text-7xl lg:text-8xl leading-tight"
                >
                  {slide.title}
                </h1>
                
                <p 
                  data-swiper-parallax="-500"
                  className="mb-10 max-w-md text-base md:text-lg leading-relaxed text-gray-300"
                >
                  {slide.desc}
                </p>
                
                <Link
                  href="/items"
                  className="group relative overflow-hidden rounded-sm border border-white px-10 py-3 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-white hover:text-black"
                >
                  <span className="relative z-10">Explore Collections</span>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #fff !important;
          opacity: 0.3;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          width: 30px;
          border-radius: 5px;
          background: #22d3ee !important;
        }
        .swiper-button-next, .swiper-button-prev {
          color: #fff !important;
          opacity: 0.4;
          transform: scale(0.6);
        }
        @media (max-width: 768px) {
           .swiper-button-next, .swiper-button-prev { display: none; }
        }
      `}</style>
    </section>
  );
};

export default HeroSlider;