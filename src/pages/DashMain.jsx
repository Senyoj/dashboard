import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { tradingStyles } from "../database/Data";
function DashMain() {
  return (
    <div className="container px-10 overflow-x-hidden">
      <div className="pb-10">
        <h1 className="text-xl font-semibold">Choose your trading Style</h1>
      </div>
      <div className="flex flex-col lg:flex-row lg:gap-0 gap-2  ">
        {tradingStyles.map((style) => (
          <div
            key={style.id}
            className="bg-sun h-[560px] p-20  border-r-[1px] border-opacity-10 border-white"
          >
            <div className="flex justify-center items-center">
              <img src={style.image} alt={style.name} />
            </div>
            <div className="text-center pb-16">
              <h1 className="pb-5 text-xl font-semibold">{style.name}</h1>
              <p>{style.profitTarget}</p>
              <p>{style.dailyDrawdown}</p>
              <p>{style.timeLimits}</p>
              <p>{style.tradingVerification}</p>
            </div>
            <div className="flex justify-center">
              <button className="bg-ton px-10 py-2 rounded-lg">
                <Link
                  to={`/challenge/${style.id}`}
                  className="bg-ton px-10 py-2 rounded-lg"
                >
                  Purchase
                </Link>
              </button>
            </div>
          </div>
        ))}

        <div>
          <div>
            <ul className="flex flex-row  lg:flex-col justify-center gap-2 px-5">
              <li className="bg-sun p-2 rounded-lg border-[1px] ">
                <Icon
                  icon="fa-regular:paper-plane"
                  className="text-primary text-2xl"
                />
              </li>
              <li className="bg-sun p-2 rounded-lg border-[1px] ">
                <Icon
                  icon="solar:settings-linear"
                  className="text-sec   text-2xl"
                />
              </li>
              <li className="bg-sun p-2 rounded-lg border-[1px] ">
                <Icon
                  icon="fluent:chat-16-regular"
                  className="text-ton text-2xl"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashMain;
