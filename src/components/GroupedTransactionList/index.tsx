import { GroupedTransactions } from "@/interfaces";
import Each from "../utils/Each";
import TransactionList from "../TransactionList";

interface GroupedTransactionsListProps {
  groupedTransactions: GroupedTransactions;
}

const GroupedTransactionsList = ({
  groupedTransactions,
}: GroupedTransactionsListProps) => {
  return (
    <Each
      of={Object.keys(groupedTransactions)}
      render={(group) => (
        <>
          <h1 className="font-semibold text-2xl mt-4 mb-2">{group}</h1>
          <TransactionList
            key={group}
            transactions={groupedTransactions[group]}
          />
        </>
      )}
    />
  );
};

export default GroupedTransactionsList;
