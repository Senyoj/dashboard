import React from "react";
import {formData1} from "../../database/Data"

function Evaluation() {
  return (
    <div className="bg-back p-2">
      <div>
        <div className="header">
          <h1 className="text-xl font-semibold">Evaluation</h1>
          <p className="opacity-75 pb-5">Challenge</p>
          <div className="w-full h-1 bg-white opacity-20"></div>
        </div>

        <div className="mt-8">
          <div>
            <h1 className="text-lg font-semibold pb-5 flex">Challenge</h1>
          </div>
          <form className="space-y-4">
            {formData1.map((item) => (
              <div key={item.id} className="flex items-center space-x-6">
                <label
                  htmlFor={item.id}
                  className="block font-semibold text-lg w-1/2"
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
            <div className="flex gap-3 justify-end">
              <button
                type="submit"
                className="bg-bag px-10 py-2 rounded-lg text-white font-semibold"
              >
                Next
              </button>
              <button
                type="button"
                className="bg-far px-5 py-2 rounded-lg text-white font-semibold"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Evaluation;
