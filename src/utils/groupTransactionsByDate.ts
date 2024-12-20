import { GroupedTransactions, ITransaction } from "@/interfaces";

export default function groupTransactionsByDate(transactions: ITransaction[]) {
  return transactions.reduce(
    (grouped: GroupedTransactions, transaction) => {
      const dateKey = transaction.timestamp.toISOString().split("T")[0];

      if (!grouped[dateKey]) {
        grouped[dateKey] = [];
      }

      grouped[dateKey].push(transaction);

      return grouped;
    },
    {} as Record<string, ITransaction[]>,
  );
}
