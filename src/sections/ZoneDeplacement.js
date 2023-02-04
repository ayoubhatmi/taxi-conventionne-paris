import styles from "./ZoneDeplacement.module.scss";
import seineSaintDenis from "../../public/images/seine-saint-denis.svg";
import valDOise from "../../public/images/val-d-oise.svg";
import yvelines from "../../public/images/yvelines.svg";
import Image from "next/image";
const ZoneDeplacement = () => {
  return (
    <div className={styles.zoneDeplacement}>
      <h2>Notre zone de déplacement</h2>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <Image
            src={valDOise}
            className={styles.map}
            alt="Map de Val d'oise"
          />
          <h2>Val d'oise</h2>
        </div>
        <div className={styles.card}>
          <Image
            src={seineSaintDenis}
            className={styles.map}
            alt="Map de Seine Saint Denis"
          />
          <h2>Seine Saint Denis</h2>
        </div>
        <div className={styles.card}>
          <Image src={yvelines} className={styles.map} alt="Map de Yvelines" />
          <h2>Yvelines</h2>
        </div>
      </div>
    </div>
  );
};

export default ZoneDeplacement;
