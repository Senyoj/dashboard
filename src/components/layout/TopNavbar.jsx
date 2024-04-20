import React from "react";
import { Icon } from "@iconify/react";
import { logo, profile } from "../../assets";

const TopNavbar = () => {
  return (
    <div className="w-full h-[75px] bg-back text-white  ">
      <div className="container flex gap-2 justify-end items-center p-5">
        <div className="flex">
          <h1>failed</h1>
          <Icon icon="material-symbols:sms-failed" className="text-iconC text-2xl" />
        </div>
        <div>
          <ul className="flex gap-2">
            <li className="bg-sun p-2 rounded-lg">
            <Icon icon="fa-regular:paper-plane" className="text-primary text-2xl" />
            </li>
            <li className="bg-sun p-2 rounded-lg">
            <Icon icon="solar:settings-linear" className="text-sec   text-2xl" />
            </li>
            <li className="bg-sun p-2 rounded-lg">
            <Icon icon="fluent:chat-16-regular" className="text-ton text-2xl" />
            </li>
          </ul>
        </div>
        <div>
          <div className="w-10 h-10 rounded-full">
            <img src={profile} alt="profile" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
