import Styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={Styles.Footer}>
      <p className={Styles.copyright}>
        Taxiconventionneparis.com | tous droits réservés © 2023
      </p>
    </footer>
  );
};

export default Footer;
