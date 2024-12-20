import HistoryForm from "@/components/HistoryFrom";
import TransactionList from "@/components/TransactionList";
import { ITransaction } from "@/interfaces";
// import { transacActions} from "@/utils/database";

const Page = async () => {
  // const transactions: ITransaction[] = [
  //   {
  //     id: "tx01or355u2024a",
  //     type: TransacType.EXPENSE,
  //     title: "Groceries",
  //     amount: 50.25,
  //     category: "or355uit7a1jd4a",
  //     description: "Weekly grocery shopping",
  //     timestamp: new Date("2024-12-15T14:30:00Z"),
  //   },
  //   {
  //     id: "tx02uberride2024",
  //     type: TransacType.EXPENSE,
  //     title: "Uber Ride",
  //     amount: 12.99,
  //     category: "02728j14gn6bc92",
  //     description: "Ride to work",
  //     timestamp: new Date("2024-12-16T09:00:00Z"),
  //   },
  //   {
  //     id: "tx03netflix2024",
  //     type: TransacType.EXPENSE,
  //     title: "Netflix Subscription",
  //     amount: 15.99,
  //     category: "xoa284js2529987",
  //     description: "Monthly Netflix payment",
  //     timestamp: new Date("2024-12-01T00:00:00Z"),
  //   },
  //   {
  //     id: "tx04movie2024",
  //     type: TransacType.EXPENSE,
  //     title: "Movie Night",
  //     amount: 20.0,
  //     category: "yfybhy0011t54ry",
  //     description: "Watched a new release",
  //     timestamp: new Date("2024-12-05T19:30:00Z"),
  //   },
  //   {
  //     id: "tx05electricity2024",
  //     type: TransacType.EXPENSE,
  //     title: "Electricity Bill",
  //     amount: 75.0,
  //     category: "wp24291yxeq6zmx",
  //     description: "Monthly electricity payment",
  //     timestamp: new Date("2024-12-10T12:00:00Z"),
  //   },
  //   {
  //     id: "tx06doctorvisit2024",
  //     type: TransacType.EXPENSE,
  //     title: "Doctor Visit",
  //     amount: 120.0,
  //     category: "5otiauw67xf578p",
  //     description: "General health check-up",
  //     timestamp: new Date("2024-12-08T10:00:00Z"),
  //   },
  //   {
  //     id: "tx07salary2024",
  //     type: TransacType.INCOME,
  //     title: "Monthly Salary",
  //     amount: 3000.0,
  //     category: "94u8250dv0ibc25",
  //     description: "December salary credited",
  //     timestamp: new Date("2024-12-01T08:00:00Z"),
  //   },
  //   {
  //     id: "tx08bonus2024",
  //     type: TransacType.INCOME,
  //     title: "Performance Bonus",
  //     amount: 500.0,
  //     category: "192n3l0j7sj625m",
  //     description: "End-of-year bonus",
  //     timestamp: new Date("2024-12-15T09:00:00Z"),
  //   },
  //   {
  //     id: "tx09freelance2024",
  //     type: TransacType.INCOME,
  //     title: "Freelance Project",
  //     amount: 350.0,
  //     category: "ypwb58aaggx6hov",
  //     description: "Payment for freelance design work",
  //     timestamp: new Date("2024-12-10T16:00:00Z"),
  //   },
  //   {
  //     id: "tx10restaurant2024",
  //     type: TransacType.EXPENSE,
  //     title: "Dinner at Restaurant",
  //     amount: 45.0,
  //     category: "or355uit7a1jd4a",
  //     description: "Dinner with friends",
  //     timestamp: new Date("2024-12-17T20:00:00Z"),
  //   },
  //   {
  //     id: "tx11taxi2024",
  //     type: TransacType.EXPENSE,
  //     title: "Taxi Ride",
  //     amount: 18.5,
  //     category: "02728j14gn6bc92",
  //     description: "Ride to airport",
  //     timestamp: new Date("2024-12-18T06:30:00Z"),
  //   },
  //   {
  //     id: "tx12spotify2024",
  //     type: TransacType.EXPENSE,
  //     title: "Spotify Subscription",
  //     amount: 9.99,
  //     category: "xoa284js2529987",
  //     description: "Monthly Spotify premium",
  //     timestamp: new Date("2024-12-01T00:00:00Z"),
  //   },
  //   {
  //     id: "tx13concert2024",
  //     type: TransacType.EXPENSE,
  //     title: "Concert Tickets",
  //     amount: 85.0,
  //     category: "yfybhy0011t54ry",
  //     description: "Tickets for a live concert",
  //     timestamp: new Date("2024-12-12T19:00:00Z"),
  //   },
  //   {
  //     id: "tx14rent2024",
  //     type: TransacType.EXPENSE,
  //     title: "Rent Payment",
  //     amount: 1000.0,
  //     category: "wp24291yxeq6zmx",
  //     description: "Monthly rent",
  //     timestamp: new Date("2024-12-01T09:00:00Z"),
  //   },
  //   {
  //     id: "tx15pharmacy2024",
  //     type: TransacType.EXPENSE,
  //     title: "Pharmacy Purchase",
  //     amount: 25.75,
  //     category: "5otiauw67xf578p",
  //     description: "Medicine purchase",
  //     timestamp: new Date("2024-12-14T11:30:00Z"),
  //   },
  //   {
  //     id: "tx16photography2024",
  //     type: TransacType.INCOME,
  //     title: "Freelance Photography",
  //     amount: 200.0,
  //     category: "ypwb58aaggx6hov",
  //     description: "Photoshoot project payment",
  //     timestamp: new Date("2024-12-12T14:00:00Z"),
  //   },
  //   {
  //     id: "tx17dividend2024",
  //     type: TransacType.INCOME,
  //     title: "Dividend Income",
  //     amount: 75.0,
  //     category: "94u8250dv0ibc25",
  //     description: "Quarterly dividends",
  //     timestamp: new Date("2024-12-10T08:00:00Z"),
  //   },
  //   {
  //     id: "tx18gift2024",
  //     type: TransacType.INCOME,
  //     title: "Gift Money",
  //     amount: 150.0,
  //     category: "192n3l0j7sj625m",
  //     description: "Birthday gift",
  //     timestamp: new Date("2024-12-16T10:00:00Z"),
  //   },
  //   {
  //     id: "tx19consult2024",
  //     type: TransacType.INCOME,
  //     title: "Consultation Fee",
  //     amount: 250.0,
  //     category: "ypwb58aaggx6hov",
  //     description: "Consulting for business strategy",
  //     timestamp: new Date("2024-12-18T15:00:00Z"),
  //   },
  // ];

  // const { getRecentTransactions } = transacActions;

  // const transactions = await getRecentTransactions(0, 5);
  // console.log(transactions);
  const transactions: ITransaction[] = [];

  return (
    <div id="history-page">
      <h1 className="my-12 text-4xl font-bold">Transaction History</h1>

      <HistoryForm />

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

export default Page;
