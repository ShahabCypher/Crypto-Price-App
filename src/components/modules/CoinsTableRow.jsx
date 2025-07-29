import chartUp from "../../assets/chart-up.svg";
import chartDown from "../../assets/chart-down.svg";

import styles from "./styles/CoinsTableRow.module.css";
import { marketChart } from "../../services/cryptoApi";

const CoinsTableRow = ({
  coin: {
    id,
    name,
    image,
    symbol,
    total_volume,
    current_price,
    price_change_percentage_24h: price_change,
  },
  currency,
  setChart,
}) => {
  const showHandler = async () => {
    try {
      const res = await fetch(marketChart(id, currency));
      const json = await res.json();
      setChart(json);
    } catch {
      setChart(true);
    }
  };

  return (
    <tr>
      <td>
        <div className={styles.symbol} onClick={showHandler}>
          <img src={image} alt={name} />
          <span>{symbol.toUpperCase()}</span>
        </div>
      </td>
      <td>{name}</td>
      <td>
        {currency === "usd"
          ? `$${current_price.toLocaleString()}`
          : currency === "eur"
          ? `€${current_price.toLocaleString()}`
          : `¥${current_price.toLocaleString()}`}
      </td>
      <td className={price_change > 0 ? styles.up : styles.down}>
        {price_change.toFixed(2)}%
      </td>
      <td>
        {currency === "usd"
          ? `$${total_volume.toLocaleString()}`
          : currency === "eur"
          ? `€${total_volume.toLocaleString()}`
          : `¥${total_volume.toLocaleString()}`}
      </td>
      <td>
        <img src={price_change > 0 ? chartUp : chartDown} alt={name} />
      </td>
    </tr>
  );
};

export default CoinsTableRow;
