enum TransacType {
  EXPENSE = 1,
  INCOME
}

interface ITransaction {
  id: string;
  type: TransacType;
  title: string;
  amount: number;
  category: string;
  timestamp: Date;
  description?: string;
}

type GroupedTransactions = Record<string, ITransaction[]>;

interface IPBRecord {
  id: string;
  collectionId: string;
  collectionName: string;
  created: string;
  updated: string;
}

interface ITransacRecord extends IPBRecord, ITransaction {}

type ICategories = Record<string, string>;

export {
  TransacType
}

export type {
  IPBRecord,
  ITransaction,
  ITransacRecord,
  ICategories,
  GroupedTransactions
}
