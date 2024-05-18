import React from "react";
import { Icon } from "@iconify/react";

const CompCard = ({ name, status, prize, description, contestants }) => {
  return (
    <div className="bg-gray-600 text-white w-full  h-44 rounded-lg p-3">
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon
              icon="teenyicons:certificate-solid"
              className="text-iconC text-xl"
            />
            <h1 className="text-xl">{name}</h1>
          </div>
          <div>
            <button className="border-2 bg-transparent rounded-lg px-1">
              {status}
            </button>
          </div>
        </div>
        <div className="text-xl">
          <span>{prize}</span>
          <span> {description}</span>
        </div>
        <div className="flex items-center gap-2">
          <Icon
            icon="teenyicons:certificate-solid"
            className="text-iconC text-xl"
          />
          <div className="text-lg">
            <span>{contestants} </span>
            <span>Contestants</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompCard;
