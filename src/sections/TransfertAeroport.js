import Image from "next/image";
import Link from "next/link";
import Styles from "./TransfertAeroport.module.scss";
import { GiAirplaneDeparture } from "react-icons/gi";

const TransfertAeroport = () => {
  return (
    <section className={Styles.section} id={"transfertAeroport"}>
      <h2 className={Styles.title}>Services Tansfert Aéroport</h2>
      <p>
        Nous fournissons un voyage rapide et fiable pour vos trajets d'urgence à
        l'aéroport disposition.
      </p>
      {/* <p>
        Appelez <span>0749504486</span>
      </p> */}
      <div className={Styles.cardContainer}>
        <div className={Styles.card}>
          <GiAirplaneDeparture />
          <p className={Styles.distination}>Paris ↔️ Orly</p>
        </div>
        <div className={Styles.card}>
          <GiAirplaneDeparture />
          <p className={Styles.distination}>Paris ↔️ Beauvais</p>
        </div>
        <div className={Styles.card}>
          <GiAirplaneDeparture />
          <p className={Styles.distination}>Paris ↔️ Roissy</p>
        </div>

        {/* <li>Paris ↔️ Roissy</li>
        <li>Paris ↔️ Beauvais</li> */}
      </div>
    </section>
  );
};

export default TransfertAeroport;
