import { useEffect, useState } from "react";

import CoinsTable from "../modules/CoinsTable";
import { getCoinsList } from "../../services/cryptoApi";

const HomePage = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(getCoinsList());
      const json = await res.json();
      setCoins(json);
    };

    getData();
  }, []);

  return (
    <div>
      <CoinsTable coins={coins} />
    </div>
  );
};

export default HomePage;
