import Spinner from "./components/Spinner";
import useFetch from "./hooks/useFetch";

export type MarketStatus = {
  current_status: "closed" | "open";
  local_close: string;
  local_open: string;
  market_type: string;
  region: string;
  primary_exchanges: string;
  notes: string;
};

type GlobalMarkets = {
  endpoint: string;
  markets: MarketStatus[];
};

const url = import.meta.env.VITE_GLOBAL_STATUS_API;

function App() {
  const { data: globalMarkets, loading } = useFetch<GlobalMarkets>(url);
  return (
    <main className="min-h-screen container mx-auto flex flex-col py-7">
      {globalMarkets && (
        <>
          <h2 className="text-center text-2xl mb-4">
            {globalMarkets.endpoint}
          </h2>
          {/* <Table markets={globalMarkets.markets} /> */}
        </>
      )}
      {loading && <Spinner />}
    </main>
  );
}

export default App;
