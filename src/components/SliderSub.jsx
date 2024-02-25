import { useEffect, useRef, useState } from "react";
// import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const SliderSub = ({ slides }) => {
  const swiperRef = useRef();
  // const [offsetY, setOffsetY] = useState();
  // const [screenSize, setScreenSize] = useState(getCurrentDimension());
  // function getCurrentDimension() {
  //   return {
  //     width: window.innerWidth,
  //     height: window.innerHeight,
  //   };
  // }

  // const [cursorX, setCursorX] = useState();
  // const [cursorY, setCursorY] = useState();
  // window.addEventListener("mousemove", (e) => {
  //   setCursorX(e.pageX);
  //   setCursorY(e.pageY);
  // });

  // const navigationPrevRef = useRef();
  // const navigationNextRef = useRef();

  // useEffect(() => {
  //   const updateDimension = () => {
  //     setScreenSize(getCurrentDimension());
  //   };
  //   window.addEventListener("resize", updateDimension);
  //   return () => {
  //     window.removeEventListener("resize", updateDimension);
  //   };
  // }, [screenSize]);

  // useEffect(() => {
  //   setOffsetY(swiperRef.current.getBoundingClientRect().y);
  // }, []);

  return (
    <>
      <Swiper
        ref={swiperRef}
        loop={true}
        speed={500}
        // autoplay={{
        //   delay: 5000,
        //   disableOnInteraction: false,
        // }}
        slidesPerView={1}
        initialSlide={0}
        spaceBetween={0}
        modules={[Navigation, Autoplay]}
        navigation={true}
        // navigation={{
        //   prevEl: navigationPrevRef.current,
        //   nextEl: navigationNextRef.current,
        // }}
        // onBeforeInit={(swiper) => {
        //   swiper.params.navigation.prevEl = navigationPrevRef.current;
        //   swiper.params.navigation.nextEl = navigationNextRef.current;
        // }}
        className="relative h-[calc(100vh-5rem)] w-screen overflow-hidden"
      >
        {slides.map((img, j) => (
          <SwiperSlide key={j}>
            <div
              style={{ backgroundImage: `url(${img})` }}
              className="bg-cover bg-center h-screen w-screen"
            ></div>
            {/* <img className="w-screen -mt-20" src={i} alt="slider-1" /> */}
          </SwiperSlide>
        ))}
        {/* <section className="absolute top-0 z-10 w-full h-full flex cursor-none">
          <section className="w-1/2 h-full"></section>
          <section className="w-1/2 h-full"></section>
          <div
            style={{
              left: `calc(${cursorX}px - 2.75rem)`,
              top: `calc(${cursorY}px - ${offsetY}px - 2.75rem)`,
            }}
            className="absolute z-[100] w-24 h-24 bg-black rounded-full grid place-items-center"
          >
            <div
              ref={navigationPrevRef}
              className={`${
                cursorX > screenSize.width / 2 ? "hidden" : "block"
              }`}
            >
              <BsArrowLeft className="text-white text-3xl" />
            </div>
            <div
              ref={navigationNextRef}
              className={`${
                cursorX > screenSize.width / 2 ? "block" : "hidden"
              }`}
            >
              <BsArrowRight className="text-white text-3xl" />
            </div>
          </div>
        </section> */}
      </Swiper>
    </>
  );
};

export default SliderSub;
