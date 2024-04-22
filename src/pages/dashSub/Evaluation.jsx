import React, { useState } from "react";
import { formData1, formData2, billInfoData } from "../../database/Data";
import { Link } from "react-router-dom";
import { sym1, sym2, sym3, sym4, ton } from "../../assets";
import { paystack } from "paystack";

function Evaluation() {
  const paystackClient = paystack(
    "pk_test_de16f91ec44d9d554c509ea5a9f5fdac888b91db"
  );
  const [currentSection, setCurrentSection] = useState(0);
  const [showForm, setShowForm] = useState(true);
  const formData = [formData1, formData2];

  const handleNext = () => {
    if (currentSection === formData.length - 1) {
      setShowForm(false);
    } else {
      setCurrentSection((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    setCurrentSection((prev) => prev - 1);
  };

  const handleSubmit = () => {
    console.log("Form submitted!");
  };

  function handlePayment() {
    paystackClient.charge.card({
      email: "ahadzijoelsenyo@gmail.com",
      amount: 500000,
      currency: "NGN",
      reference: `${Math.floor(Math.random() * 1000000000) + 1}`,
      callback: function (response) {
        console.log(response);
      },
      onClose: function () {
        console.log("Payment closed or failed.");
      },
    });
  }
  return (
    <div className="bg-back p-2">
      <div>
        <div className="header pl-10">
          <h1 className="text-xl font-semibold">Evaluation</h1>
          <p className="opacity-75 pb-5">Challenge</p>
          <div className="w-full h-1 bg-white opacity-20"></div>
        </div>

        <div className="mt-8 pl-10">
          {showForm && (
            <form className="space-y-4">
              {formData[currentSection].map((section, index) => (
                <div key={index}>
                  {section.map((item) => (
                    <div key={item.id} className="flex items-center space-y-2">
                      <label
                        htmlFor={item.id}
                        className="block font-semibold text-lg lg:w-[400px]"
                      >
                        {item.label}
                      </label>
                      {item.type === "select" ? (
                        <select
                          id={item.id}
                          name={item.id}
                          className="input w-full h-[45px] rounded-lg bg-sun pl-2 outline-none"
                        >
                          {item.options.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type={item.type}
                          id={item.id}
                          name={item.id}
                          className="input w-full h-[45px] rounded-lg bg-sun pl-2 outline-none"
                          placeholder={item.placeholder}
                        />
                      )}
                    </div>
                  ))}
                </div>
              ))}
              <div className="flex gap-3 justify-end">
                {currentSection > 0 && (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="bg-far px-5 py-2 rounded-lg text-white font-semibold"
                  >
                    Previous
                  </button>
                )}
                <button
                  type="button"
                  onClick={handleNext}
                  className="bg-bag px-10 py-2 rounded-lg text-white font-semibold"
                >
                  {currentSection === formData.length - 1 ? "Proceed" : "Next"}
                </button>
              </div>
            </form>
          )}
          {!showForm && (
            <div className="last-part ">
              <div className="BillInfo flex justify-between flex-col lg:flex-row">
                <div className="mb-5 lg:mb-0 lg:mr-5">
                  <div className=" border-r-2 lg:w-[300px]">
                    <section className="py-5 text-xl">
                      <h1 className="text-iconT">Bill To</h1>
                      <p>
                        {billInfoData.billTo.name},{" "}
                        {billInfoData.billTo.country}
                      </p>
                    </section>
                    <section className="py-5 text-xl">
                      <h1 className="text-iconT">Contact</h1>
                      <p>{billInfoData.contact}</p>
                    </section>
                    <section className="py-5 text-xl">
                      <h1 className="text-iconT">Date</h1>
                      <p>{billInfoData.date}</p>
                    </section>
                  </div>
                </div>
                <div className="w-full lg:w-[calc(100%-300px)] px-2 text-xl flex justify-between">
                  <div>
                    <div className=" border-b-2 pb-10 pl-5">
                      <h1>Description</h1>
                    </div>
                    <div className="p-5">
                      <div className="flex flex-col gap-5">
                        {billInfoData.description.map((item, index) => (
                          <span key={index} className="flex items-center gap-2">
                            <img src={item.icon} alt="" />
                            <p>{item.text}</p>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className=" border-b-2 pb-10 pl-5 text-end">
                      <h1>Amount</h1>
                    </div>
                    <div className="text-end flex flex-col gap-5 pt-5">
                      <p>Express</p>
                      <p>{billInfoData.amount.express}</p>
                      <p>MT5</p>
                      <p>{billInfoData.amount.mt5}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-20">
                <div className=" border-b-2 w-full lg:w-1/3"></div>
                <div className="flex flex-col lg:flex-row  justify-between items-center">
                  <div className="pt-5">
                    <h1 className="text-xl py-5">BANK TRANSFER</h1>
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-3">
                        <label
                          htmlFor="Affiliate Code"
                          className="block font-semibold text-lg w-[150px]"
                        >
                          Affiliate Code
                        </label>
                        <input
                          type="text"
                          id="Affiliate Code"
                          name="Affiliate Code"
                          className="input h-[45px] rounded-lg bg-sun pl-2 outline-none"
                        />
                      </div>
                      <div className="flex items-center gap-3">
                        <label
                          htmlFor="Discount Code"
                          className="block font-semibold text-lg w-[150px]"
                        >
                          Discount Code
                        </label>
                        <input
                          type="text"
                          id="Discount Code"
                          name="Discount Code"
                          className="input h-[45px] rounded-lg bg-sun pl-2 outline-none"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="py-10">
                    <button className="flex gap-20 justify-between items-center bg-ton py-5 px-10 rounded-lg relative">
                      <img
                        src={ton}
                        alt=""
                        className="absolute right-10 top-0"
                      />
                      <div>
                        <h1 className="text-xl font-semibold">TOTAL</h1>
                      </div>
                      <div className="flex flex-col text-start">
                        <h1 className="text-xl font-semibold">$5,000.00</h1>
                        <p>Taxes included</p>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 justify-end">
                <button
                  type="button"
                  onClick={() => setShowForm(true)}
                  className="bg-bag bg-opacity-30 px-5 py-2 rounded-lg text-white font-semibold"
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={handlePayment}
                  className="bg-bag px-10 py-2 rounded-lg text-white font-semibold"
                >
                  <Link to="/dashboard">Proceed</Link>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Evaluation;
