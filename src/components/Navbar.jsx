import Sidebar from "./Sidebar";
import { toast } from "react-hot-toast";
import { TbLogout } from "react-icons/tb";
import { useEffect, useState } from "react";
import { GoLocation, GoPerson } from "react-icons/go";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = ({ userToken, setUserToken, userName, setUserName }) => {
  const token = localStorage.getItem("usertoken");
  const name = localStorage.getItem("username");
  useEffect(() => {
    setUserToken(token);
  }, [token]);
  useEffect(() => {
    setUserName(name);
  }, [name]);

  const { pathname } = useLocation();
  const [navBG, setNavBG] = useState(false);
  const [drawer, setDrawer] = useState({ left: false });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  window.addEventListener("scroll", () => {
    window.scrollY >= 80 ? setNavBG(true) : setNavBG(false);
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawer({ ...drawer, [anchor]: open });
  };

  return (
    <>
      <nav
        className={`h-20 font-serif flex flex-row-reverse xl:flex-row items-center justify-between px-5 xl:px-20 fixed top-0 w-screen z-50 duration-200
        ${
          pathname.length > 1
            ? navBG
              ? "bg-fuchsia-100 shadow"
              : "bg-transparent"
            : "bg-fuchsia-100 shadow"
        }`}
      >
        <section className="flex flex-row-reverse xl:flex-row items-center space-x-10 font-semibold font-sans">
          <div
            onClick={toggleDrawer("left", true)}
            className="bg-black text-white text-2xl p-2.5 rounded-full cursor-pointer"
          >
            <AiOutlineMenuUnfold />
          </div>
          <Sidebar drawer={drawer} toggleDrawer={toggleDrawer} />
          <NavLink
            to="/italia"
            className={({ isActive }) =>
              isActive
                ? "text-black underline underline-offset-2 hidden xl:block"
                : "text-black hover:underline underline-offset-2 hidden xl:block"
            }
            href=""
          >
            Wolf Italia
          </NavLink>
          <NavLink
            to="/editions"
            className={({ isActive }) =>
              isActive
                ? "text-black underline underline-offset-2 hidden xl:block"
                : "text-black hover:underline underline-offset-2 hidden xl:block"
            }
            href=""
          >
            Wolf Editions
          </NavLink>
        </section>
        <h1 className="absolute mx-auto left-0 right-0 w-fit font-serif font-bold text-lg tracking-tight text-slate-800">
          WOLF&nbsp;&nbsp;INDIA
        </h1>
        <section className="flex items-center space-x-5">
          <a href="" className="flex items-center space-x-1">
            <span className="text-xs hidden xl:block">STORES</span>
            <GoLocation className="text-lg" />
          </a>

          {!userName ? (
            <NavLink
              to="/account"
              href=""
              className="flex items-center space-x-1"
            >
              <span className="text-xs hidden xl:block">ACCOUNT</span>
              <GoPerson className="text-xl" />
            </NavLink>
          ) : (
            <NavLink
              className="flex items-center space-x-1"
              onClick={() => {
                localStorage.clear();
                toast.success("Logged out successfully");
              }}
            >
              <span className="text-xs text-uppercase hidden xl:block">
                {userName}
              </span>

              <TbLogout />
            </NavLink>
          )}
        </section>
      </nav>
    </>
  );
};

export default Navbar;
