import React, { useState } from "react";
import { Link } from "react-router-dom";
import { profile } from "../assets/index";
import { Icon } from "@iconify/react";

function Billing() {
  const [orders, setOrders] = useState([
    {
      orderNumber: "$91583",
      createdAt: "May 12, 2023",
      price: "$5.00",
      status: "Paid",
      profit: "bxs:download",
    },
  ]);

  const [accounts, setAccounts] = useState([
    {
      orderNumber: "2063834",
      Type: "Metatrader 4",
      Broker: "Eightcap ",
      StartDate: "May 15, 2023",
      EndDate: "N/A",
      AccountType: "Phase 1",
      Dropdown: "Phase 1",
      profit: "lucide:settings",
    },
  ]);

  const [competition, setCompetition] = useState([
    {
      orderNumber: "",
      Type: " ",
      Broker: " ",
      StartDate: " ",
      EndDate: " ",
      AccountType: " ",
      Dropdown: " ",
      profit: " ",
    },
  ]);

  const totalItems = orders.length;
  const startIndex = totalItems > 0 ? 1 : 0;
  const endIndex = totalItems;

  const tcompetition = competition.length;
  const sindex = tcompetition > 0 ? 1 : 0;
  const eindex = tcompetition;

  const taccounts = accounts.length;
  const stindex = taccounts > 0 ? 1 : 0;
  const enindex = taccounts;

  return (
    <div>
      {/* Profile */}
      <div className="flex items-center">
        <img src={profile} alt="Profile" className="w-16" />
        <div className="ml-4">
          <div className="flex items-center text-xl font-semibold">
            <h1>Josiah Oromojo </h1>
            <Icon icon="bitcoin-icons:verify-filled" className="text-2xl" />
          </div>
          <div className="flex items-center">
            <Icon icon="carbon:user-avatar-filled" />
            <span>Account </span>
            <span>2063834 </span>
          </div>
        </div>
      </div>
      {/* Profile */}

      <div>
        <div className="bg-[#15171C] w-full h-max mt-10 p-10">
          <h1 className="text-2xl font-semibold">Billing & Accounts</h1>
          <div className="mt-5">
            <div className="flex gap-5">
              <input
                type="text"
                placeholder="Search..."
                className="outline-none 1 bg-black rounded-lg h-[48px] w-72 p-2"
              />
              <button className="bg-black p-3 rounded-lg">Search</button>
            </div>
            {/* table */}
            <div>
              <div className="overflow-x-auto mt-4">
                <table className="min-w-full border rounded-lg overflow-hidden">
                  <thead className="text-white  text-sm leading-normal border-b border-gray-600">
                    <tr>
                      <th className="py-3 px-6 text-left">Order Number</th>
                      <th className="py-3 px-6 text-left">Created At</th>
                      <th className="py-3 px-6 text-left">Price</th>
                      <th className="py-3 px-6 text-left">Status</th>
                      <th className="py-3 px-6 text-left">Profit</th>
                    </tr>
                  </thead>
                  <tbody className=" text-sm font-light  border-b border-gray-600">
                    {orders.map((item, index) => (
                      <tr key={index}>
                        <td className="py-3 px-6">{item.orderNumber}</td>
                        <td className="py-3 px-6">{item.createdAt}</td>
                        <td className="py-3 px-6">{item.price}</td>
                        <td className="py-3 px-6">{item.status}</td>
                        <td className="py-3 px-6">
                          <Icon icon={item.profit} className="text-3xl" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {/* Pagination  */}
                <div className="w-full flex justify-end ">
                  <div className="mt-4 text-sm ">
                    Showing {startIndex}-{endIndex} of {totalItems}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="bg-[#15171C] w-full h-max mt-10 p-10">
          <h1 className="text-2xl font-semibold">Prop Accounts</h1>
          <div className="mt-5">
            <div className="flex gap-5">
              <input
                type="text"
                placeholder="Search..."
                className="outline-none 1 bg-black rounded-lg h-[48px] w-72 p-2"
              />
              <button className="bg-black p-3 rounded-lg">Search</button>
            </div>
            {/* table */}
            <div>
              <div className="overflow-x-auto mt-4">
                <table className="min-w-full border rounded-lg overflow-hidden">
                  <thead className="text-white  text-sm leading-normal border-b border-gray-600">
                    <tr>
                      <th className="py-3 px-6 text-left">Order Number</th>
                      <th className="py-3 px-6 text-left">Type</th>
                      <th className="py-3 px-6 text-left">Broker</th>
                      <th className="py-3 px-6 text-left">Start Date</th>
                      <th className="py-3 px-6 text-left">End Date</th>
                      <th className="py-3 px-6 text-left">Account Type</th>
                      <th className="py-3 px-6 text-left">Visible Dropdown</th>
                      <th className="py-3 px-6 text-left">PR OFIT</th>
                    </tr>
                  </thead>
                  <tbody className=" text-sm font-light  border-b border-gray-600">
                    {accounts.map((item, index) => (
                      <tr key={index}>
                        <td className="py-3 px-6">{item.orderNumber}</td>
                        <td className="py-3 px-6">{item.Type}</td>
                        <td className="py-3 px-6">{item.Broker}</td>
                        <td className="py-3 px-6">{item.StartDate}</td>
                        <td className="py-3 px-6">{item.EndDate}</td>
                        <td className="py-3 px-6">{item.AccountType}</td>
                        <td className="py-3 px-6">
                          <div className="relative w-10 h-5 bg-re   d-400 rounded-xl ">
                            <input type="checkbox"  className=" w-5 h-5 rounded-full "/>
                            <span />
                          </div>
                        </td>
                        <td className="py-3 px-6">
                          <button>
                            <Link to="">
                              <Icon icon={item.profit} className="text-3xl" />
                            </Link>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {/* Pagination  */}
                <div className="w-full flex justify-end ">
                  <div className="mt-4 text-sm ">
                    Showing {stindex}-{enindex} of {taccounts}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-[#15171C] w-full h-max mt-10 ">
              <h1 className="text-2xl font-semibold">Competition Accounts</h1>
              <div className="mt-5">
                <div className="flex gap-5">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="outline-none 1 bg-black rounded-lg h-[48px] w-72 p-2"
                  />
                  <button className="bg-black p-3 rounded-lg">Search</button>
                </div>
                {/* table */}
                <div>
                  <div className="overflow-x-auto mt-4">
                    <table className="min-w-full border rounded-lg overflow-hidden">
                      <thead className="text-white  text-sm leading-normal border-b border-gray-600">
                        <tr>
                          <th className="py-3 px-6 text-left">Order Number</th>
                          <th className="py-3 px-6 text-left">Type</th>
                          <th className="py-3 px-6 text-left">Broker</th>
                          <th className="py-3 px-6 text-left">Start Date</th>
                          <th className="py-3 px-6 text-left">End Date</th>
                          <th className="py-3 px-6 text-left">Account Type</th>
                          <th className="py-3 px-6 text-left">
                            Visible Dropdown
                          </th>
                          <th className="py-3 px-6 text-left">PROFIT</th>
                        </tr>
                      </thead>
                      <tbody className=" text-sm font-light  border-b border-gray-600">
                        {competition.map((item, index) => (
                          <tr key={index}>
                            <td className="py-3 px-6">{item.orderNumber}</td>
                            <td className="py-3 px-6">{item.Type}</td>
                            <td className="py-3 px-6">{item.Broker}</td>
                            <td className="py-3 px-6">{item.StartDate}</td>
                            <td className="py-3 px-6">{item.EndDate}</td>
                            <td className="py-3 px-6">{item.AccountType}</td>
                            <td className="py-3 px-6"></td>
                            <td className="py-3 "></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    {/* Pagination  */}
                    <div className="w-full flex justify-end ">
                      <div className="mt-4 text-sm ">
                        Showing {sindex}-{eindex} of {tcompetition}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Billing;
