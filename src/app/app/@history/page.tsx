import HistoryForm from "@/components/History";

const Page = async () => {

  return (
    <div id="history-page">
      <h1 className="mb-12 text-4xl font-bold">Transaction History</h1>

      <HistoryForm />

    </div>
  );
};

export default Page;
