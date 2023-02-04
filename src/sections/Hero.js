"use client";

import Image from "next/image";
import { Link } from "react-scroll";
import Styles from "./Hero.module.scss";
import heroImg from "../../public/images/hero-img.svg";
import { motion } from "framer-motion";

const Hero = () => {
  // Animation
  const fadeInUp = {
    initial: {
      y: -60,
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: [0.17, 0.67, 0.83, 0.67],
      },
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 0.5,
        ease: [0.17, 0.67, 0.83, 0.67],
      },
    },
  };

  return (
    <motion.section
      className={Styles.hero}
      initial="initial"
      animate="animate"
      variants={fadeInUp}
    >
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
        <Image src={heroImg} alt="" className={"w-5.5/6"} priority="true" />
      </div>
    </motion.section>
  );
};

export default Hero;
