"use client";

import { useState } from "react";

import createExpense from "@/actions/createExpense";
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
                onClick={(e) => {
                  e.preventDefault();
                  setShowExpenseDetails(false);
                  setActiveTransac(item.value);
                }}
              >
                {item.title}
              </button>
            )}
          />
        </aside>
        <section className="">
          <form
            action={createExpense}
            className="flex flex-col items-start gap-4"
          >
            <input
              type="text"
              className="w-80 rounded-md border border-neutral-700 px-2 py-1 text-lg"
              placeholder={`${activeTransac === ActiveTransaction.EXPENSE ? "Expense" : "Income"} title`}
              name="title"
            />
            <input
              type="number"
              className="w-40 rounded-md border border-neutral-700 py-1 pl-2 text-lg"
              placeholder="Amount"
              name="amount"
              min={1}
            />
            <select
              name="category"
              className="w-40 rounded-md border border-neutral-700 py-1 pl-2 text-lg"
            >
              <option value="" defaultChecked>
                Other
              </option>
              <option value="">Other</option>
              <option value="">Other</option>
            </select>
            <button
              type="button"
              className="text-sm font-semibold text-blue-500 hover:underline"
              onClick={() => setShowExpenseDetails((prev) => !prev)}
            >
              {showExpenseDetails ? "Collapse" : "Expand"} details?
            </button>

            <div className={`${showExpenseDetails ? "visible" : "hidden"}`}>
              <textarea
                className="rounded-md border border-neutral-700 p-2 text-lg"
                cols={50}
                rows={2}
                placeholder="Description..."
                name="description"
              ></textarea>
              <div className="flex gap-4">
                <input
                  type="date"
                  defaultValue={new Date().toISOString().split("T")[0]}
                  className="rounded-md border border-neutral-700 px-2 py-1 text-lg"
                  name="date"
                />
                <input
                  type="time"
                  className="rounded-md border border-neutral-700 px-2 py-1 text-lg"
                  name="time"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-40 rounded-md bg-blue-500 py-2 text-lg font-semibold text-white hover:bg-blue-600"
            >
              Add Expense
            </button>
          </form>
        </section>
      </div>
    </>
  );
};

export default CreateTransactionForm;
