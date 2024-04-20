import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import { logo } from "../../assets/index.js";
import { asideLinks } from "../../database/Data";
function Aside() {
  const location = useLocation();

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <aside className="w-[260px] pl-5 bg-back p-4">
      <nav>
        <div className="flex items-center gap-3 text-4xl text-iconC font-bold pb-10">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div>
            <h1>nicholas</h1>
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
              <Link className="text-iconT text-xl font-semibold" to={link.path}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Aside;
