import React, { useState } from "react";
import { profile } from "../assets";
import { Icon } from "@iconify/react";

function Billing() {
  const [orders, setOrders] = useState([
    {
      orderNumber: "001",
      createdAt: "2022-01-01",
      price: "$100",
      status: "Completed",
      profit: "$20",
    },
  ]);

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
        <div className="bg-[#15171C] w-full h-96 mt-10 p-10">
          <h1 className="text-2xl font-semibold">Billing & Accounts</h1>
          <div className="mt-5">
            <div className="flex gap-5">
              <input
                type="text"
                placeholder="Search..."
                className="outline-none bg-transparent bg-black rounded-lg h-[48px] w-72 p-2"
              />
              <button className="bg-black p-3 rounded-lg">Search</button>
            </div>
            {/* table */}
            <div>
              <div className="mt-5">
                <table className="w-full">
                  <thead>
                    <tr className=" bg-white border-b-[1px] border-gray-700">
                      <th className="py-2 ">Order Number</th>
                      <th className="py-2 ">Created At</th>
                      <th className="py-2 ">Price</th>
                      <th className="py-2 ">Status</th>
                      <th className="py-2 ">Profit</th>
                    </tr>
                  </thead>
                  <tbody className="">
                    {orders.map((order) => (
                      <tr key={order.orderNumber} className=" text-white bg-white">
                        <td className="py-2  px-2">{order.orderNumber}</td>
                        <td className="py-2 ">{order.createdAt}</td>
                        <td className="py-2 ">{order.price}</td>
                        <td className="py-2 ">{order.status}</td>
                        <td className="py-2 ">{order.profit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Billing;
