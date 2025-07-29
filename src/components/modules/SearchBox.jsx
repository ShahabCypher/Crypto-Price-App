import { useState, useEffect } from "react";
import { RotatingLines } from "react-loader-spinner";

import { searchCoin } from "../../services/cryptoApi";

const SearchBox = ({ currency, setCurrency }) => {
  const [search, setSearch] = useState("");
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setCoins([]);
    if (!search) {
      setIsLoading(false);
      return;
    }

    const searchReq = async () => {
      try {
        const res = await fetch(searchCoin(search), {
          signal: controller.signal,
        });
        const json = await res.json();
        if (json.coins) {
          setCoins(json.coins);
          setIsLoading(false);
        } else {
          alert(json.status.error_message);
        }
      } catch (error) {
        if (error.name !== "AbortError") {
          alert(error.message);
        }
      }
    };

    setIsLoading(true);
    searchReq();

    return () => controller.abort();
  }, [search]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="jpy">JPY</option>
      </select>
      <div>
        {isLoading && (
          <RotatingLines
            width="50px"
            height="50px"
            strokeWidth="2"
            strokeColor="#3874ff"
          />
        )}
        <ul>
          {coins.map((coin) => (
            <li key={coin.id}>
              <img src={coin.thumb} alt={coin.name} />
              <p>{coin.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchBox;
