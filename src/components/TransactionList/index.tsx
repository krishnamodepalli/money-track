import HistoryTransaction from "../HistoryTransaction";
import Each from "../utils/Each";

import { ITransaction } from "@/interfaces";

interface TransactionListProps {
  transactions: ITransaction[];
}

const TransactionList = ({ transactions }: TransactionListProps) => {
  return (
    <Each
      of={transactions}
      render={(transaction) => (
        <HistoryTransaction key={transaction.id} transaction={transaction} />
      )}
    />
  );
};

export default TransactionList;
