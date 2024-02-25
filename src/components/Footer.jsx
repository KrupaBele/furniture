import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import { IoIosArrowUp } from "react-icons/io";

import { footer } from "../configs/footer.config";

const Footer = () => {
  return (
    <>
      <footer className="bg-fuchsia-100 font-serif px-5 xl:px-20 h-auto xl:h-[calc(100vh-5rem)] py-5 sm:py-0 flex flex-col justify-center border-t border-t-slate-200">
        {/* Footer Top */}
        <section className="flex flex-col xl:flex-row items-center justify-between">
          <h1 className="text-9xl">W</h1>
          <div className="space-y-5 xl:border border-transparent border-l-slate-300 xl:pl-20 my-10">
            <h1 className="text-slate-500 text-3xl text-center xl:text-start xl:text-4xl xl:w-[30rem]">
              <span className="text-black">sign up</span> for the latest Wolf
              campaigns, collections and inspirations.
            </h1>
            <TextField
              id="standard-basic"
              label="email*"
              variant="standard"
              className="w-full"
            />
            <div className="flex flex-col xl:flex-row items-start">
              <div className="flex flex-col">
                <FormControlLabel
                  value="end"
                  control={<Checkbox color="default" />}
                  label={
                    <span className="text-xs">
                      I have read and understood the Privacy Policy*
                    </span>
                  }
                  labelPlacement="end"
                />
                <FormControlLabel
                  className="-mt-3"
                  value="end"
                  control={<Checkbox color="default" />}
                  label={
                    <span className="text-xs">
                      I wish to receive communications and personalised offers
                      from Wolf.
                    </span>
                  }
                  labelPlacement="end"
                />
              </div>
              <button className="bg-slate-500 hover:bg-slate-600 duration-200 rounded-md py-2 px-5 text-white tracking-wider mx-auto mt-5 xl:mt-0">
                Subscribe
              </button>
            </div>
          </div>
          <a href="#" className="group hidden xl:flex items-center space-x-3">
            <h1 className="cursor-pointer">back to top</h1>
            <div className="border border-slate-300 rounded-full p-10 relative grid place-items-center cursor-pointer">
              <div className="absolute flex flex-col items-center -mb-32 group-hover:-mb-0 duration-500">
                <IoIosArrowUp />
                <div className="w-px h-20 group-hover:h-10 duration-500 bg-black -mt-[9px]"></div>
              </div>
            </div>
          </a>
        </section>

        {/* Footer Bottom */}
        <section className="border border-transparent border-t-slate-300 py-10 grid grid-cols-2 gap-x-2.5 gap-y-5 mx-auto w-fit sm:w-full sm:flex justify-between">
          {footer.map((i, j) => (
            <div key={j} className="flex flex-col">
              <h1 className="text-xl sm:text-2xl mb-3">{i.title}</h1>
              {i.links.map((k, l) => (
                <a
                  key={l}
                  className="text-xs font-sans text-slate-400 hover:text-slate-500 mb-1"
                  href=""
                >
                  {k}
                </a>
              ))}
            </div>
          ))}
        </section>
      </footer>
    </>
  );
};

export default Footer;
