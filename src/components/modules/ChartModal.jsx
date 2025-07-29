import { useState } from "react";

import Chart from "./Chart";

import styles from "./styles/ChartModal.module.css";

const ChartModal = ({ chart, setChart, currency }) => {
  const [type, setType] = useState("prices");

  const typeHandler = (e) => {
    if (e.target.tagName === "BUTTON") {
      const type = e.target.value;
      setType(type);
    }
  };

  return (
    <div className={styles.container}>
      <span className={styles.cross} onClick={() => setChart(null)}>
        X
      </span>
      <div className={styles.chart}>
        <div className={styles.name}>
          <img src={chart.coin.image} alt={chart.coin.name} />
          <p>{chart.coin.name}</p>
        </div>
        <div className={styles.graph}>
          <Chart chart={chart} type={type} />
        </div>
        <div className={styles.types} onClick={typeHandler}>
          <button
            className={type === "prices" ? styles.selected : null}
            value="prices"
          >
            Price
          </button>
          <button
            className={type === "market_caps" ? styles.selected : null}
            value="market_caps"
          >
            Market Cap
          </button>
          <button
            className={type === "total_volumes" ? styles.selected : null}
            value="total_volumes"
          >
            Total Volume
          </button>
        </div>
        <div className={styles.details}>
          <div>
            <p>Prices:</p>
            <span>
              {currency === "usd"
                ? `$${chart.coin.current_price.toLocaleString()}`
                : currency === "eur"
                ? `€${chart.coin.current_price.toLocaleString()}`
                : `¥${chart.coin.current_price.toLocaleString()}`}
            </span>
          </div>
          <div>
            <p>ATH:</p>
            <span>
              {currency === "usd"
                ? `$${chart.coin.ath.toLocaleString()}`
                : currency === "eur"
                ? `€${chart.coin.ath.toLocaleString()}`
                : `¥${chart.coin.ath.toLocaleString()}`}
            </span>
          </div>
          <div>
            <p>Market Cap:</p>
            <span>
              {currency === "usd"
                ? `$${chart.coin.market_cap.toLocaleString()}`
                : currency === "eur"
                ? `€${chart.coin.market_cap.toLocaleString()}`
                : `¥${chart.coin.market_cap.toLocaleString()}`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartModal;
