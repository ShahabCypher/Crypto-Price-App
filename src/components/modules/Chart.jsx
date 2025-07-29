import { useState } from "react";

import { convertData } from "../../helpers/convertData";

import styles from "./styles/Chart.module.css";

const Chart = ({ chart, setChart }) => {
  const [type, setType] = useState("prices");

  return (
    <div className={styles.container}>
      <span className={styles.cross} onClick={() => setChart(null)}>
        X
      </span>
      <div className={styles.chart}></div>
    </div>
  );
};

export default Chart;
