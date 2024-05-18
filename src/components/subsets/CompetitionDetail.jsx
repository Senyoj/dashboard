import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { compMonth } from "../../database/Data";
import { Icon } from "@iconify/react";

const CompetitionDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const competition = compMonth.find((comp) => comp.id === parseInt(id));

  if (!competition) {
    return <div>Competition not found</div>;
  }
  const FTL = (name) => {
    return name.substring(0, 3).toUpperCase();
  };

  return (
    <div className="text-white p-5">
      <button
        className="mb-4 px-4 py-2 flex items-center gap-2"
        onClick={() => navigate(-1)}
      >
        <Icon icon="bx:arrow-back" />
        Competition
      </button>
      <h1 className="text-2xl font-bold mb-3">{competition.name}</h1>
      <div className="mb-5 flex items-center  justify-between">
        <div className="">
          <div className="text-right">
            <div className="text-2xl flex items-center">
              <Icon icon="material-symbols:trophy-sharp" />
              <span className="text-6xl font-bold">
                {FTL(competition.name)}
              </span>
            </div>
          </div>
        </div>

        <div>
          <table className="w-full">
            <tbody>
              <tr>
                <td className="py-2 text-gray-400  flex items-center gap-1">
                  <Icon icon="material-symbols:trophy-sharp" />
                  Winner:
                </td>
                <td className="py-2">{competition.winner.name}</td>
              </tr>
              <tr>
                <td className="py-2 text-gray-400 flex items-center gap-1">
                  <Icon icon="lucide:calendar" />
                  Date:
                </td>
                <td className="py-2">{competition.winner.date}</td>
              </tr>
              <tr>
                <td className="py-2 text-gray-400 flex items-center gap-1">
                  <Icon icon="solar:dollar-bold" />
                  Reward:
                </td>
                <td className="py-2">{competition.winner.reward}</td>
              </tr>
              <tr>
                <td className="py-2 text-gray-400 flex items-center gap-1">
                  <Icon icon="mdi:users" />
                  Number of Contestants:
                </td>
                <td className="py-2">
                  {competition.contestants.toLocaleString()}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {competition.standings.length > 0 && (
        <div className="text-white">
          <div>
            <div className="flex items-center gap-5">
              <div>
                <input type="text" placeholder="Search..." className="w-full h-10 px-3 rounded-lg border-gray-200 border-2 border-opacity-15 bg-transparent outline-none" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">
                  Competition Standings
                </h2>
              </div>
            </div>
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="px-4 py-2">RANK</th>
                  <th className="px-4 py-2">NICKNAME</th>
                  <th className="px-4 py-2">RETURN %</th>
                  <th className="px-4 py-2">% BACK FROM 1ST PLACE</th>
                  <th className="px-4 py-2">PRIZE</th>
                  <th className="px-4 py-2">COUNTRY</th>
                </tr>
              </thead>
              <tbody>
                {competition.standings.map((standing, index) => {
                  const bgColorClass =
                    index % 3 === 0 ? "bg-color1" : "bg-color2";
                  return (
                    <React.Fragment key={standing.rank}>
                      <tr className={bgColorClass}>
                        <td className="px-4 py-2">{standing.rank}</td>
                        <td className="px-4 py-2">{standing.nickname}</td>
                        <td className="px-4 py-2">{standing.returnPercent}</td>
                        <td className="px-4 py-2">{standing.backFromFirst}</td>
                        <td className="px-4 py-2">{standing.prize}</td>
                        <td className="px-4 py-2">{standing.country}</td>
                      </tr>
                      <tr>
                        <td colSpan="6">
                          <hr className="border-gray-700" />
                        </td>
                      </tr>
                    </React.Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompetitionDetail;
