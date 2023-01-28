import Image from "next/image";
import Styles from "./SecteurCard.module.scss";

const SecteurCard = ({ image, title }) => {
  return (
    <div className={Styles.secteurCard}>
      <Image className={Styles.image} src={image} width={350} height={150} />
      <h2 className={Styles.title}>{title}</h2>
    </div>
  );
};

export default SecteurCard;
