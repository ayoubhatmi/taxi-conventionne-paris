"use client";

import Image from "next/image";
import { Link } from "react-scroll";
import Styles from "./Reservation.module.scss";
import bookingImg from "../../public/images/booking-img.svg";

const Reservation = () => {
  return (
    <section className={Styles.reservation}>
      <div className={Styles.imgContainer}>
        <Image src={bookingImg} alt="" />
      </div>
      <div className={Styles.desc}>
        <h2 className={Styles.title}>Réservation</h2>
        <p>
          Réserver votre taxi convention au <span>0749504486</span> ou en
          quelques clics en remplissant le formulaire de réservation Votre
          chauffeur exprimenté se tient à votre entière disposition pour toutes
          vos trajets médicalisés.
        </p>
        <Link
          to="reservastionForm"
          spy={true}
          smooth={true}
          duration={500}
          className={Styles.btnLink}
        >
          Réservez maintenant
        </Link>
      </div>
    </section>
  );
};

export default Reservation;
