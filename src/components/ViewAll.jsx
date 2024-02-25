import { italia_living_sofassectionals } from "../configs/products.config/italia/italia_living/italia_living_sofassectionals";
import { FaWindowClose } from "react-icons/fa";

const ViewAll = ({ handleClose }) => {
  return (
    <>
      <main className="flex justify-center">
        <section className="relative">
          <FaWindowClose
            onClick={handleClose}
            className="sticky text-4xl top-0 text-red-700 z-10 cursor-pointer"
          />
          <h1 className="text-4xl font-serif mb-1 mt-2.5 text-black">
            Find your favorite configuration
          </h1>
          <p className="text-lg font-serif mb-2.5">
            <span className="font-semibold">
              {italia_living_sofassectionals[0].subProducts.length}
            </span>{" "}
            availabe configurations
          </p>
          <section className="w-fit grid grid-cols-3 gap-y-5 gap-x-10 pb-5">
            {italia_living_sofassectionals[0].subProducts.map((i, j) => (
              <div key={j} className="group">
                <div className="w-[30vw] h-[30vh] overflow-hidden hover:cursor-pointer rounded-md bg-slate-300">
                  <img
                    className="w-[30vw] group-hover:scale-125 duration-500 -mt-20"
                    src={i.img}
                    alt={i.description}
                  />
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
                      className="bg-black px-3 py-1 pb-1.5 rounded-md hover:bg-slate-700 duration-300 text-white"
                    >
                      Discover
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </section>
      </main>
    </>
  );
};

export default ViewAll;
