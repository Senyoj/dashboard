import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import CompCard from "../components/subsets/CompCard";
import { compMonth } from "../database/Data";

function Competition() {
  return (
    <div>
      <div className="text-2xl font-semibold flex gap-2 items-center mb-4">
        <Icon icon="material-symbols:trophy-sharp" className="text-iconC" />
        <h1>Competition</h1>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-4">
        {compMonth.map((competition) => (
          <Link to={`/competition/${competition.id}`} key={competition.id}>
            <CompCard
              name={competition.name}
              status={competition.status}
              prize={competition.prize}
              description={competition.description}
              contestants={competition.contestants}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Competition;
