import React from "react";
import { Icon } from "@iconify/react";
import { leaderboardData, tradeData, equityData } from "../database/Data";
import { mon } from "../assets";
function Leaderboard() {
  return (
    <div>
      <div className="text-2xl font-semibold flex gap-2 items-center mb-4">
        <Icon
          icon="material-symbols-light:social-leaderboard-outline-rounded"
          className="text-iconC"
        />
        <h1>Leaderboard</h1>
      </div>
      <div>
        <div className="text-white p-4">
          <h1 className="text-2xl font-bold mb-4">Leadership</h1>
          <div className="mb-4 flex  items-center gap-5">
            <div>
              <span>Account type:</span>
            </div>
            <div>
              <select className="w-full h-10 px-3 rounded-lg border-gray-200 border-2 text-gray-400 border-opacity-15 bg-transparent outline-none">
                <option value="" key="">
                  All account
                </option>
                <option value="" key="">
                  Demo account
                </option>
                <option value="" key="">
                  Standard Account{" "}
                </option>
                <option value="" key="">
                  Micro Account{" "}
                </option>
                <option value="" key="">
                  ECN Account{" "}
                </option>
              </select>
            </div>
          </div>
          <div className="mb-8">
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="px-4 py-2">Rank</th>
                  <th className="px-4 py-2">Username</th>
                  <th className="px-4 py-2">Profit</th>
                  <th className="px-4 py-2">ACCOUNT SIZE</th>
                  <th className="px-4 py-2">PERCENT GAIN</th>
                  <th className="px-4 py-2">COUNTRY</th>
                </tr>
              </thead>
              <tbody>
                {leaderboardData.map((leader) => (
                  <tr key={leader.rank}>
                    <td className="py-2 text-gray-400">{leader.rank}:</td>
                    <td className="py-2">{leader.username}</td>
                    <td className="py-2">{leader.profit}</td>
                    <td className="py-2">{leader.accountSize}</td>
                    <td className="py-2">{leader.percentGain}</td>
                    <td className="py-2">{leader.country}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-3">Closed Trades</h2>
            <table className="w-full text-left">
              <thead className="text-">
                <tr>
                  <th className="px-4 py-2">OPEN TIME</th>
                  <th className="px-4 py-2">OPEN PRICE</th>
                  <th className="px-4 py-2">CLOSE TIME</th>
                  <th className="px-4 py-2">CLOSE PRICE</th>
                  <th className="px-4 py-2">SIDE</th>
                  <th className="px-4 py-2">SYMBOL</th>
                  <th className="px-4 py-2">VOLUME</th>
                  <th className="px-4 py-2">PROFIT</th>
                </tr>
              </thead>
              <tbody>
                {tradeData.map((trade, index) => (
                  <React.Fragment key={index}>
                    <tr>
                      <td className="py-2">{trade.openTime}</td>
                      <td className="py-2">{trade.openPrice}</td>
                      <td className="py-2">{trade.closeTime}</td>
                      <td className="py-2">{trade.closePrice}</td>
                      <td className="py-2">{trade.side}</td>
                      <td className="py-2">{trade.symbol}</td>
                      <td className="py-2">{trade.volume}</td>
                      <td className="py-2">{trade.profit}</td>
                    </tr>
                    <tr>
                      <td colSpan="8">
                        <hr className="border-gray-700" />
                      </td>
                    </tr>
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="flex ">
        <div className="w-1/2 relative overflow-hidden">
          <div className=" absolute z-10 top-10  left-8">
            <h1 className="text-xl font-semibold">
              Progressive <br /> Statistics
            </h1>
            <p className="pt-20 text-sm">
              You are performing tremendously well, <br /> per your statistics,
              you have a return rate of 24.51% and a win rate of 50.00
            </p>
          </div>
          <img src={mon} alt="" />
        </div>
        <div className="w-full mt-5">
        <div className="bg-gray-900 text-xl p-5 w-">
            <h1>Tom_reddington’s Statistics</h1>
          </div>
      {equityData.map((data) => (
        <div
          key={data.id}
          className="bg-black p-3 flex justify-between items-center rounded-md my-5"
        >
          <div>
            <div className="flex text-xl items-center gap-2">
              <Icon icon={data.icon} />
              <span>{data.label}</span>
            </div>
          </div>
          <div>
            <span>{data.amount}</span>
          </div>
        </div>
      ))}
    </div>
      </div>
    </div>
  );
}

export default Leaderboard;
