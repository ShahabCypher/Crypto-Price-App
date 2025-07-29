import { useEffect, useState } from "react";

import SearchBox from "../modules/SearchBox";
import CoinsTable from "../modules/CoinsTable";
import Pagination from "../modules/Pagination";
import { getCoinsList } from "../../services/cryptoApi";

const HomePage = () => {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("usd");

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      try {
        const res = await fetch(getCoinsList(page, currency));
        const json = await res.json();
        setCoins(json);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [page, currency]);

  return (
    <div>
      <SearchBox currency={currency} setCurrency={setCurrency} />
      <CoinsTable coins={coins} isLoading={isLoading} currency={currency} />
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default HomePage;
