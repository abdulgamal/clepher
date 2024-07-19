import { MarketStatus } from "../App";

function TableRow({ market }: { market: MarketStatus }) {
  return (
    <tr className="bg-white border-b">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        {market.market_type}
      </th>
      <td className="px-6 py-4">{market.region}</td>
      <td className="px-6 py-4">{market.primary_exchanges}</td>
      <td className="px-6 py-4">{market.local_open}</td>
      <td className="px-6 py-4">{market.local_close}</td>
      <td className="px-6 py-4">{market.current_status}</td>
      <td className="px-6 py-4">{market.notes}</td>
    </tr>
  );
}

export default TableRow;
