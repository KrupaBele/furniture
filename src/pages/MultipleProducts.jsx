import { useParams, useNavigate } from "react-router-dom";
import { products } from "../configs/products.config";
console.log(products);

const MultipleProducts = () => {
  const navigate = useNavigate();
  const { level1, level2, level3 } = useParams();
  const perticularProducts = eval(
    `products.${level1}_${level2}_${
      level3.includes("&")
        ? level3.split("-&-").join("")
        : level3.split("-").join("")
    }`
  );

  return (
    <>
      <figure className="sticky top-0 h-20 w-screen bg-fuchsia-100 shadow"></figure>
      <main className="w-full flex flex-col items-center bg-fuchsia-50">
        <h1 className="capitalize font-serif text-3xl sm:text-4xl mt-11 text-slate-700 border-b border-b-slate-500">
          {level3.split("-").join(" ")}
        </h1>
        <section className="w-fit grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-10 mt-6 mb-11">
          {perticularProducts.map((i, j) => (
            <div key={j} className="group">
              <div className="w-[22rem] sm:w-[27rem] h-[198px] sm:h-[243px] overflow-hidden hover:cursor-pointer rounded-md bg-slate-300">
                <img
                  onClick={() =>
                    navigate(
                      `/${level1}/${level2}/${level3}/${i.name.toLowerCase()}`
                    )
                  }
                  className="group-hover:scale-125 duration-500"
                  src={i.img}
                  alt={i.name}
                />
              </div>
              <div className="w-full flex justify-between pt-2">
                <span className="text-slate-700 text-xl font-serif">
                  {i.name}
                </span>
                <button
                  onClick={() =>
                    navigate(
                      `/${level1}/${level2}/${level3}/${i.name.toLowerCase()}`
                    )
                  }
                  className="bg-black px-3 py-1 pb-1.5 rounded-md text-sm hover:bg-slate-700 duration-300 text-white"
                >
                  Discover
                </button>
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
};

export default MultipleProducts;
