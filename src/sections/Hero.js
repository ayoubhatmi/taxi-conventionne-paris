"use client";

import Image from "next/image";
import { Link } from "react-scroll";
import Styles from "./Hero.module.scss";
import heroImg from "../../public/images/hero-img.svg";

const Hero = () => {
  return (
    <section className={Styles.hero}>
      <div className={Styles.desc}>
        <h2 className={Styles.title}>Taxi Parisien Conventionné</h2>
        <p>
          Vous recherchez un Taxi conventionné sur Paris ? Réservez simplement
          votre prochain déplacement. Nous vous proposons des services de
          qualité supérieure à un prix abordable.
        </p>
        <Link
          to="reservastionForm"
          className={Styles.btn}
          spy={true}
          smooth={true}
          duration={500}
        >
          Réservez maintenant
        </Link>
      </div>
      <div className={Styles.imgContainer}>
        <Image src={heroImg} alt="" className={"w-5.5/6"} />
      </div>
    </section>
  );
};

export default Hero;
