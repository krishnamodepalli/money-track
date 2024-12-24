"use server";

import { TransacType } from "@/interfaces";
import { transacActions } from "@/utils/database";

const createExpense = async (formData: FormData) => {
  const { createOne } = transacActions;

  const timestamp = new Date(
    `${formData.get("date") as string} ${formData.get("time") as string}`,
  );

  await createOne(
    TransacType.EXPENSE,
    formData.get("title") as string,
    parseFloat(formData.get("amount") as string),
    // formData.get("category") as string,
    "or355uit7a1jd4a",
    formData.get("description") as string,
    timestamp,
  );
};

export default createExpense;
