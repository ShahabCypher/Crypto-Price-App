import { useEffect, useState } from "react";

import CoinsTable from "../modules/CoinsTable";
import Pagination from "../modules/Pagination";
import { getCoinsList } from "../../services/cryptoApi";

const HomePage = () => {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      const res = await fetch(getCoinsList(page));
      const json = await res.json();
      setCoins(json);
      setIsLoading(false);
    };

    getData();
  }, [page]);

  return (
    <div>
      <CoinsTable coins={coins} isLoading={isLoading} />
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default HomePage;
