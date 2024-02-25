import { useState, forwardRef } from "react";
import { useParams } from "react-router-dom";
import { products } from "../configs/products.config";
console.log(products);
import Slide from "@mui/material/Slide";
import Dialog from "@mui/material/Dialog";
import ViewAll from "../components/ViewAll";
import SliderSub from "../components/SliderSub";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const SingleProduct = () => {
  const [open, setOpen] = useState(false);
  const { level1, level2, level3, level4 } = useParams();
  const perticularProducts = eval(
    `products.${level1}_${level2}_${
      level3.includes("&")
        ? level3.split("-&-").join("")
        : level3.split("-").join("")
    }`
  );
  console.log(perticularProducts);
  const { name, img, content, slides, subProducts } = eval(
    `perticularProducts.find((i) => i.name.toLowerCase() === level4)`
  );

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <header className="relative bg-black">
        <figure
          className="bg-cover bg-center h-screen w-screen"
          style={{ backgroundImage: `url(${img})` }}
        ></figure>

        {/* Heading */}
        <div className="absolute h-fit w-fit top-0 bottom-0 my-auto left-0 right-0 mx-auto text-center font-serif">
          <h1 className="text-7xl sm:text-8xl mb-2 text-white">{name}</h1>
        </div>
      </header>

      <section className="h-[calc(100vh-5rem)] flex flex-col-reverse xl:flex-row-reverse items-center justify-center gap-10 xl:gap-20">
        <img
          className="h-[330px] sm:h-[430px] xl:h-[75vh] rounded-xl"
          src={content[1].img}
          alt={content[1].heading}
        />
        <div className="w-auto sm:w-[700px] mx-5 sm:mx-0 text-center xl:text-start">
          <h1 className="text-3xl xl:text-5xl mb-2 text-black leading-[1.1] font-serif">
            {content[1].heading}
          </h1>
          <p className="text-sm sm:text-base text-black leading-normal">
            {content[1].para}
          </p>
        </div>
      </section>

      {slides && (
        <section className="mb-10">
          <SliderSub slides={slides} />
        </section>
      )}

      <section className="flex justify-center">
        <section className="flex flex-col lg:block items-center">
          <h1 className="text-3xl sm:text-5xl text-center md:text-start font-serif mb-1.5 text-black">
            Find your favorite configuration
          </h1>
          <p className="text-xl font-serif mb-3 text-center md:text-start">
            <span className="font-semibold">{subProducts.length}</span> availabe
            configurations.{" "}
            <button
              onClick={handleClickOpen}
              className="font-medium underline underline-offset-2 text-blue-700 cursor-pointer"
            >
              View all
            </button>
            .
          </p>
          <section className="w-fit grid grid-cols-1 lg:grid-cols-2 gap-y-7 gap-x-14">
            {subProducts.slice(0, 4).map((i, j) => (
              <div key={j} className="group">
                <div className="w-[356px] sm:w-[450px] lg:w-[44vw] h-[44vh] overflow-hidden hover:cursor-pointer rounded-md bg-slate-300">
                  <div
                    style={{ backgroundImage: `url(${i.img})` }}
                    className="w-full h-full bg-cover bg-center group-hover:scale-110 duration-500"
                  ></div>
                </div>
                <div className="w-full flex justify-between pt-2">
                  <div>
                    <p className="text-slate-500 text-lg font-serif">
                      <span className="text-slate-700">{name}</span>{" "}
                      {i.description} - {i.material}
                    </p>
                    <p className="text-slate-500 text-sm font-mono">
                      {i.dimension}
                    </p>
                  </div>
                  <div>
                    <button
                      disabled
                      onClick={() =>
                        navigate(
                          `/${level1}/${level2}/${level3}/${i.name.toLowerCase()}`
                        )
                      }
                      className="bg-black px-3 py-1 pb-1.5 rounded-md hover:bg-slate-700 duration-300 text-white hidden sm:block"
                    >
                      Discover
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </section>
          <div className="flex justify-center mt-10">
            <button
              onClick={handleClickOpen}
              className="border border-slate-400 hover:border-slate-700 px-5 py-1 rounded-lg hover:shadow duration-300"
            >
              View all
            </button>
          </div>
        </section>
      </section>

      <section className="flex flex-col md:flex-row items-center justify-center bg-fuchsia-50 mt-10">
        <div
          className="h-[300px] xl:h-[calc(100vh-5rem)] w-[100%] xl:w-[60%] overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: `url(${content[0].img})` }}
        ></div>
        <div className="w-auto xl:w-[40%] mx-5 xl:mx-14 text-center xl:text-start py-5">
          <h1 className="text-3xl xl:text-5xl mb-2 text-black leading-[1.1] font-serif">
            {content[0].heading}
          </h1>
          <p className="text-sm sm:text-base mb-3 sm:mb-7 text-black leading-normal">
            {content[0].para}
          </p>
          <button className="bg-black px-5 py-2 rounded-lg text-lg hover:bg-slate-700 duration-300 font-serif text-white">
            Discover more
          </button>
        </div>
      </section>

      {content[2] && (
        <section className="h-[calc(100vh-5rem)] flex flex-col-reverse xl:flex-row-reverse items-center justify-center gap-10 xl:gap-20">
          <img
            className="h-[330px] sm:h-[430px] xl:h-[75vh] rounded-xl"
            src={content[2].img}
            alt={content[2].heading}
          />
          <div className="w-auto sm:w-[700px] mx-5 sm:mx-0 text-center xl:text-start">
            <h1 className="text-3xl xl:text-5xl mb-2 text-black leading-[1.1] font-serif">
              {content[2].heading}
            </h1>
            <p className="text-sm sm:text-base text-black leading-normal">
              {content[2].para}
            </p>
          </div>
        </section>
      )}

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <ViewAll handleClose={handleClose} />
      </Dialog>
    </>
  );
};

export default SingleProduct;
