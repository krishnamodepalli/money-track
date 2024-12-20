import pb from "@/utils/pocketbase";

import { pb_date } from "@/utils/database/formatting";

import { ITransacRecord, ITransaction, TransacType } from "@/interfaces";

/**
 * Fetches transactions created on a specific date.
 *
 * @param {Date} date - The date for which transactions are to be retrieved.
 * @param {number} [page=1] - The page number for paginated results.
 * @param {number} [perPage=10] - The number of results per page.
 * @returns {Promise<ITransaction[]>} - A promise that resolves to a list of transactions for the given date.
 * @throws _ Will throw an error if the provided date is invalid.
 */
const getTransactionsFromDate = async (
  date: Date,
  page: number = 1,
  perPage: number = 10,
): Promise<ITransaction[]> => {
  if (!date) throw Error("Please provide a valid date object!");

  try {
    await pb.collection("transactions").getList(page, perPage, {
      filter: `created == ${pb_date(date)}`,
    });
  } catch (error) {
    console.error(error);
  }

  return [];
};

/**
 * Fetches the most recent transactions.
 *
 * @param {number} [page=1] - The page number for paginated results.
 * @param {number} [perPage=10] - The number of results per page.
 * @returns {Promise<ITransaction[]>} - A promise that resolves to a list of recent transactions.
 */
const getRecentTransactions = async (
  page: number = 1,
  perPage: number = 10,
): Promise<ITransaction[]> => {
  try {
    const transactions = await pb
      .collection("transactions")
      .getList(page, perPage, {
        sort: "-timestamp"
      });
    return transactions.items as unknown as ITransaction[];
  } catch (error) {
    console.error(error);
  }
  return [];
};

/**
 * Creates a new transaction record.
 *
 * @param {TransacType} type - The type of the transaction (e.g., credit, debit).
 * @param {string} title - The title of the transaction.
 * @param {number} amount - The amount for the transaction.
 * @param category
 * @param {string} [description=""] - An optional description for the transaction.
 * @param {Date} [timestamp=new Date()] - An optional timestamp for the transaction.
 * @returns {Promise<boolean>} - A promise that resolves to `true` if the transaction was successfully created, `false` otherwise.
 */
const createOne = async (
  type: TransacType,
  title: string,
  amount: number,
  category: string,
  description: string = "",
  timestamp: Date = new Date(),
): Promise<boolean> => {
  try {
    await pb.collection("transactions").create({
      type,
      title,
      amount,
      category,
      description,
      timestamp,
    });
    return true;
  } catch (error) {
    console.error(error);
  }
  return false;
};

/**
 * Updates an existing transaction record.
 *
 * @param {string} transactionId - The unique identifier of the transaction to update.
 * @param {string} [title] - The new title for the transaction (optional).
 * @param {number} [amount] - The new amount for the transaction (optional).
 * @param {string} category - The new category for the transaction (optional).
 * @param {string} [description] - The new description for the transaction (optional).
 * @param {Date} [timestamp] - The new timestamp for the transaction (optional).
 * @returns {Promise<boolean>} - A promise that resolves to `true` if the transaction was successfully updated, `false` otherwise.
 */
const updateOne = async (
  transactionId: string,
  title?: string,
  amount?: number,
  category?: string,
  description?: string,
  timestamp?: Date,
): Promise<boolean> => {
  /**
   * The things that cannot be changed in an expense are `type`
   */
  try {
    const oldTransaction = (await pb
      .collection("transactions")
      .getOne(transactionId)) as ITransacRecord;
    if (!oldTransaction) {
      console.error("Transaction not found");
      return false;
    }
    const newData = {
      title: title || oldTransaction.title,
      amount: amount || oldTransaction.amount,
      category: category || oldTransaction.category,
      description: description || oldTransaction.description,
      timestamp: timestamp || oldTransaction.timestamp,
    };
    await pb.collection("transactions").update(transactionId, newData);
  } catch (error) {
    console.error(error);
  }
  return false;
};

/**
 * Deletes a transaction record.
 *
 * @param {string} transactionId - The unique identifier of the transaction to delete.
 * @returns {Promise<boolean>} - A promise that resolves to `true` if the transaction was successfully deleted, `false` otherwise.
 */
const deleteOne = async (transactionId: string): Promise<boolean> => {
  try {
    await pb.collection("transactions").delete(transactionId);
    return true;
  } catch (error) {
    console.error(error);
  }
  return false;
};

const TransactionActions = Object.freeze({
  getTransactionsFromDate,
  getRecentTransactions,
  createOne,
  updateOne,
  deleteOne,
});

export default TransactionActions;
