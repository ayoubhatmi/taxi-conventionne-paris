import SecteurCard from "../components/SecteurCard";
import styles from "./ZoneDeplacement.module.scss";
import DenisImg from "../../public/images/denis.jpeg";
import ValDOiseImg from "../../public/images/val-d-oise.jpg";
import YvelinesImg from "../../public/images/yvelines.jpg";
const ZoneDeplacement = () => {
  return (
    <div className={styles.zoneDeplacement}>
      <h2>Notre zone de déplacement</h2>
      <div className={styles.cardContainer}>
        <SecteurCard title={"Val d'oise"} image={ValDOiseImg} />
        <SecteurCard title={"Sein Sent Denis"} image={DenisImg} />
        <SecteurCard title={"Yvelines"} image={YvelinesImg} />
      </div>
    </div>
  );
};

export default ZoneDeplacement;
