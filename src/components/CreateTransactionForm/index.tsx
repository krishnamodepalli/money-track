"use client";

import { useState } from "react";
import { Input, Select, SelectItem, Textarea } from "@nextui-org/react";

import useCategoryContext from "@/hooks/useCategoryContext";
import createExpense from "@/actions/createExpense";
import Each from "../utils/Each";

const CreateTransactionForm = () => {
  const { state } = useCategoryContext();
  const { income: IncomeCategories, expense: ExpenseCategories } = state;

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
            <Input
              type="text"
              name="title"
              label={`${activeTransac === ActiveTransaction.EXPENSE ? "Expense" : "Income"} title`}
              isRequired
              isClearable
              variant="bordered"
            />
            <Input
              type="number"
              name="amount"
              label="Amount"
              min={1}
              isRequired
              variant="bordered"
            />
            <Select label="Choose the category" isRequired variant="bordered">
              {Object.keys(
                activeTransac === ActiveTransaction.EXPENSE
                  ? ExpenseCategories
                  : IncomeCategories,
              ).map((category) => (
                <SelectItem key={category} value={category}>
                  {activeTransac === ActiveTransaction.EXPENSE
                    ? ExpenseCategories[category]
                    : IncomeCategories[category]}
                </SelectItem>
              ))}
            </Select>
            <button
              type="button"
              className="text-sm font-semibold text-blue-500 hover:underline"
              onClick={() => setShowExpenseDetails((prev) => !prev)}
            >
              {showExpenseDetails ? "Collapse" : "Expand"} details?
            </button>

            <div
              className={`${showExpenseDetails ? "visible" : "hidden"} w-full`}
            >
              <Textarea
                className="mb-4"
                label="Description"
                placeholder="About the transaction..."
                variant="bordered"
                isClearable
                minRows={3}
                maxRows={3}
                minLength={100}
                fullWidth
              ></Textarea>
              <div className="flex gap-4">
                <Input
                  type="date"
                  defaultValue={new Date().toISOString().split("T")[0]}
                  name="date"
                  label="Transaction date"
                  variant="bordered"
                />
                <Input
                  type="time"
                  defaultValue={new Date().toISOString().split("T")[1]}
                  name="time"
                  label="Transaction time"
                  variant="bordered"
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
