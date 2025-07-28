import { useEffect, useState } from "react";

import CoinsTable from "../modules/CoinsTable";
import { getCoinsList } from "../../services/cryptoApi";

const HomePage = () => {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(getCoinsList());
      const json = await res.json();
      setCoins(json);
      setIsLoading(false);
    };

    getData();
  }, []);

  return (
    <div>
      <CoinsTable coins={coins} isLoading={isLoading} />
    </div>
  );
};

export default HomePage;
