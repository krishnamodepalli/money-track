"use client";

import React from "react";

import { ITransaction } from "@/interfaces";
import { pb_date } from "@/utils/database/formatting";
import useCategoryContext from "@/hooks/useCategoryContext";

interface HistoryTransactionProps {
  transaction: ITransaction;
}

const HistoryTransaction = ({
  transaction,
}: HistoryTransactionProps): React.ReactNode => {
  const { state } = useCategoryContext();
  console.log(state);

  return (
    <div
      key={transaction.id}
      className="my-transaction group select-none border-b bg-transparent px-4 py-2 text-neutral-800 hover:bg-neutral-100"
    >
      <div className="flex flex-row items-center overflow-x-hidden">
        <div className="w-full">
          <h3 className="mb-1 font-semibold" title={transaction.title}>
            {transaction.title}
          </h3>
          <p className="text-xs text-neutral-500">
            <span className="mr-4">
              Date:{" "}
              <span className="font-semibold text-neutral-600">
                {pb_date(transaction.timestamp)}
              </span>
            </span>

            <span>
              Category:{" "}
              <span className="font-semibold text-neutral-600">
                {transaction.category}
              </span>
            </span>
          </p>
        </div>
        <div className="relative">
          <div className="relative left-[36px] flex flex-row gap-2 transition-all duration-200 group-hover:left-0">
            <span
              className={`cursor-default text-lg font-semibold ${transaction.type === 2 ? "text-emerald-500" : "text-slate-700"}`}
            >
              {transaction.type === 1 && "-"}${transaction.amount}
            </span>
            <button className="group/del rounded-full bg-neutral-200 p-2 hover:bg-neutral-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                width={16}
                className="fill-neutral-800 group-hover/del:fill-rose-500"
              >
                <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z" />
              </svg>
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="fill-t2 group-hover:fill-[#d62828]"
                width={24}
              >
                <path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z" />
              </svg> */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryTransaction;
