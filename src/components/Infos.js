import { FaPhone } from "react-icons/fa";
import { TbLanguage } from "react-icons/tb";
import { FaEnvelope } from "react-icons/fa";
import styles from "./Infos.module.scss";

const Infos = () => {
  return (
    <div className={styles.Infos}>
      <div className={styles.wrapper}>
        <div className={styles.item}>
          <div className={styles.icon}>
            <FaEnvelope />
          </div>
          <h2>E-mail</h2>

          <p>samylamirem@hotmail.fr</p>
        </div>

        <div className={styles.item}>
          <div className={styles.icon}>
            <TbLanguage />
          </div>
          <h2>Langues parlées</h2>
          <p>Francais, Anglais, Russe, Aarabe</p>
        </div>
        <div className={styles.item}>
          <div className={styles.icon}>
            <FaPhone />
          </div>
          <h2>Télépone</h2>

          <p>(+33) 0749504486</p>
        </div>
      </div>
    </div>
  );
};

export default Infos;
