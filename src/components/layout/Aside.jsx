import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import { logo } from "../../assets/index.js";
import { asideLinks } from "../../database/Data";

function Aside() {
  const location = useLocation();
  const [showAside, setShowAside] = useState(false);

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  const toggleAside = () => {
    setShowAside((prevState) => !prevState);
  };

  return (
    <div className="relative">
      <div className="absolute lg:hidden -right-10 top-7 bg-sun p-2 rounded-full cursor-pointer" onClick={toggleAside}>
        {showAside ? (
          <Icon icon="fa-solid:times" className="text-iconC text-2xl font-bold" />
        ) : (
          <Icon icon="gravity-ui:bars-ascending-align-right" className="text-iconC text-2xl font-bold" />
        )}
      </div>
      <aside className={`w-[260px] h-[100vh] pl-5 bg-back p-4 ${showAside ? "block" : "hidden"} lg:block`}>
        <nav className="">
          <div className="flex items-center gap-3 text-3xl text-iconC font-bold pt-5 pb-10">
            <div>
              <img src={logo} alt="logo" />
            </div>
            <div>
              <h1>TruFunder</h1>
            </div>
          </div>
          <ul className="">
            {asideLinks.map((link) => (
              <li
                key={link.id}
                className={`flex gap-2 items-center p-2 rounded-lg ${
                  isActiveLink(link.path) ? "bg-sun" : ""
                }`}
              >
                <Icon icon={link.icon} className="text-iconC text-2xl" />
                <Link
                  className="text-iconT text-lg font-semibold"
                  to={link.path}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
}

export default Aside;
