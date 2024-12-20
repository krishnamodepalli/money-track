"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const HistoryForm = () => {
  const [date, setDate] = useState<Date | null>(new Date());
  const [isFilter, setIsFilter] = useState<boolean>(true);
  const [forceShow, setForceShow] = useState<boolean>(false);

  return (
    <div>
      {/* date-picker */}
      <div
        className={`my-4 transition-all duration-200 first:mt-0 last:mb-0 ${!forceShow && !isFilter && "opacity-30"}`}
        onClick={() => setForceShow(true)}
      >
        <h2 className="my-2 px-2 text-2xl font-semibold">Get by date:</h2>
        <DatePicker
          placeholderText="2025-12-12"
          className="mx-2 w-52 rounded-md border border-neutral-700 px-2 py-1 text-lg text-neutral-800 placeholder:text-neutral-400"
          selected={date}
          onChange={(date) => setDate(date)}
        />
      </div>

      {/* search/filter input */}
      <div className="my-4 first:mt-0 last:mb-0">
        <h2 className="my-2 px-2 text-2xl font-semibold">
          {isFilter ? "Filter Transactions" : "Search All Transactions"}:
        </h2>
        <div className="transaction-search flex px-2">
          <input
            type="text"
            className="w-1/2 rounded-md border border-neutral-700 px-2 py-1 text-lg text-neutral-800 placeholder:text-neutral-400"
            placeholder={`${isFilter ? "Filter" : "Search"} your transactions...`}
          />
          <button className="mx-4 w-[6rem] rounded-md bg-blue-500 font-semibold text-white hover:bg-blue-600">
            {isFilter ? "Filter" : "Search"}
          </button>
        </div>

        {/* toggle button */}
        <button
          className="mt-2 px-2 text-sm font-semibold text-blue-500 hover:underline"
          onClick={() => {
            setIsFilter((prev) => !prev);
            setForceShow(false);
          }}
        >
          {isFilter ? "Search All?" : "Filter?"}
        </button>
      </div>
    </div>
  );
};

export default HistoryForm;
