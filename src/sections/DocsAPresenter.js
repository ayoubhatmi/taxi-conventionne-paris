import styles from "./DocsAPresenter.module.scss";

const DocsAPresenter = () => {
  return (
    <div className={styles.DocsAPresenter}>
      <h2>Documents à presenter à bord de Taxi</h2>
      <ul className={styles.numberedList}>
        <li>Carte Vitale valide</li>
        <li>Bon de transport</li>
        <li>Prescription médicale</li>
      </ul>
    </div>
  );
};

export default DocsAPresenter;
