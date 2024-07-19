import { MarketStatus } from "../App";
import TableRow from "./TableRow";

function Table({ markets }: { markets: MarketStatus[] }) {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              Market Type
            </th>
            <th scope="col" className="px-6 py-3">
              Region
            </th>
            <th scope="col" className="px-6 py-3">
              Primary Exchanges
            </th>
            <th scope="col" className="px-6 py-3">
              Local Open
            </th>
            <th scope="col" className="px-6 py-3">
              Local Close
            </th>
            <th scope="col" className="px-6 py-3">
              Current Status
            </th>
            <th scope="col" className="px-6 py-3">
              Notes
            </th>
          </tr>
        </thead>
        <tbody>
          {markets.map((market, index) => (
            <TableRow key={index} market={market} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
