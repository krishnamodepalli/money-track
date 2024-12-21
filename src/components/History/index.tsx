"use client";

import TransactionList from "@/components/TransactionList";
import "react-datepicker/dist/react-datepicker.css";
import { ITransaction } from "@/interfaces";

const HistoryForm = () => {

  const transactions: ITransaction[] = [];

  return (
    <div>
      <div className="my-6 flex justify-start">
        <button className="mx-2 rounded-full bg-neutral-200 px-4 py-1 text-sm font-semibold text-black hover:bg-neutral-300">
          Expenses
        </button>
        <button className="mx-2 rounded-full bg-neutral-200 px-4 py-1 text-sm font-semibold text-black hover:bg-neutral-300">
          Incomes
        </button>
      </div>
      <div className="transactions overflow-hidden rounded-md">
        <TransactionList transactions={transactions} />
      </div>
    </div>
  );
};

export default HistoryForm;
