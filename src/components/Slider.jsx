import { useRef } from "react";

import { IoIosArrowUp } from "react-icons/io";
import { italiaSlider } from "../configs/slider.config";

import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/navigation";
// import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Slider = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <>
      <h1 className="font-serif text-4xl sm:text-5xl text-slate-700 border-b border-b-slate-500 w-fit mx-auto mb-5 pb-0.5">
        Explore Collection
      </h1>
      <Swiper
        loop={true}
        initialSlide={0}
        spaceBetween={30}
        grabCursor={true}
        modules={[Navigation]}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        breakpoints={{
          400: {
            slidesPerView: 1,
          },
          500: {
            slidesPerView: 2,
          },
          800: {
            slidesPerView: 3,
          },
          1000: {
            slidesPerView: 4,
          },
        }}
        // pagination={{
        //   clickable: true,
        // }}
        className="mx-[30px] rounded-lg"
      >
        {italiaSlider.map((i, j) => (
          <SwiperSlide
            key={j}
            className="w-fit group rounded-lg overflow-hidden"
          >
            <img
              className="w-full h-96 group-hover:scale-110 duration-500"
              src={i.img}
              alt={i.title}
            />
          </SwiperSlide>
        ))}
        <div
          ref={navigationPrevRef}
          className="group absolute z-10 top-0 bottom-0 my-auto flex items-center justify-center w-52 h-52 rounded-full bg-black/25 -ml-[55px] cursor-pointer"
        >
          <div className="bg-white/75 p-8 rounded-full group-hover:p-12 duration-500"></div>
          <div className="absolute flex flex-col items-center duration-500 -rotate-90 right-10 group-hover:right-20">
            <IoIosArrowUp />
            <div className="w-px h-[5.5rem] group-hover:h-14 duration-500 bg-black -mt-[9px]"></div>
          </div>
        </div>
        <div
          ref={navigationNextRef}
          className="group absolute z-10 right-0 top-0 bottom-0 my-auto flex items-center justify-center w-52 h-52 rounded-full bg-black/25 -mr-[55px] cursor-pointer"
        >
          <div className="bg-white/75 p-8 rounded-full group-hover:p-12 duration-500"></div>
          <div className="absolute flex flex-col items-center duration-500 rotate-90 left-10 group-hover:left-20">
            <IoIosArrowUp />
            <div className="w-px h-[5.5rem] group-hover:h-14 duration-500 bg-black -mt-[9px]"></div>
          </div>
        </div>
      </Swiper>
    </>
  );
};

export default Slider;
