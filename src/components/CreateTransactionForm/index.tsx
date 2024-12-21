"use client";

import { useState } from "react";

import Each from "../utils/Each";

const CreateTransactionForm = () => {
  enum ActiveTransaction {
    EXPENSE = 1,
    INCOME,
  }
  const [activeTransac, setActiveTransac] = useState<ActiveTransaction>(
    ActiveTransaction.EXPENSE,
  );

  const [showExpenseDetails, setShowExpenseDetails] = useState<boolean>(false);

  return (
    <>
      <h1 className="mb-12 text-4xl font-bold">New Entry?</h1>
      <div className="flex flex-col gap-4">
        <aside className="flex border-b-2 font-semibold">
          <Each
            of={[
              { title: "Expense", value: ActiveTransaction.EXPENSE },
              { title: "Income", value: ActiveTransaction.INCOME },
            ]}
            render={(item) => (
              <button
                key={item.value}
                className={`h-10 w-32 hover:bg-neutral-100 ${item.value === activeTransac && "bg-neutral-200 hover:bg-neutral-200"}`}
                onClick={() => {
                  setShowExpenseDetails(false);
                  setActiveTransac(item.value);
                }}
              >
                {item.title}
              </button>
            )}
          />
        </aside>
        <section className="flex flex-col items-start gap-4">
          <input
            type="text"
            className="w-80 rounded-md border border-neutral-700 px-2 py-1 text-lg"
            placeholder={` title`}
          />
          <input
            type="number"
            className="w-40 rounded-md border border-neutral-700 py-1 pl-2 text-lg"
            placeholder="Amount"
            min={1}
          />
          <select className="w-40 rounded-md border border-neutral-700 py-1 pl-2 text-lg">
            <option value="" defaultChecked>
              Other
            </option>
            <option value="">Other</option>
            <option value="">Other</option>
          </select>
          <button
            className="text-sm font-semibold text-blue-500 hover:underline"
            onClick={() => setShowExpenseDetails((prev) => !prev)}
          >
            {showExpenseDetails ? "Collapse" : "Expand"} details?
          </button>

          {showExpenseDetails && (
            <>
              <textarea
                className="rounded-md border border-neutral-700 p-2 text-lg"
                cols={50}
                rows={2}
                placeholder="Description..."
              ></textarea>
              <div className="flex gap-4">
                <input
                  type="date"
                  defaultValue={new Date().toISOString()}
                  className="rounded-md border border-neutral-700 px-2 py-1 text-lg"
                />
                <input
                  type="time"
                  className="rounded-md border border-neutral-700 px-2 py-1 text-lg"
                />
              </div>
            </>
          )}
          <button className="w-40 rounded-md bg-blue-500 py-2 text-lg font-semibold text-white hover:bg-blue-600">
            Add Expense
          </button>
        </section>
      </div>
    </>
  );
};

export default CreateTransactionForm;
