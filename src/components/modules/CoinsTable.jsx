import { RotatingLines } from "react-loader-spinner";

import CoinsTableRow from "./CoinsTableRow";

const CoinsTable = ({ coins, isLoading }) => {
  return (
    <div>
      {isLoading ? (
        <RotatingLines strokeColor="#606060" strokeWidth="2" />
      ) : (
        <table>
          <thead>
            <tr>
              <th>Coin</th>
              <th>Name</th>
              <th>Price</th>
              <th>24h</th>
              <th>Total Volume</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <CoinsTableRow key={coin.id} coin={coin} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CoinsTable;
