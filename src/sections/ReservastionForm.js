import ContactForm from "../components/ContactForm";
import styles from "./ReservastionForm.module.scss";

const ReservastionForm = () => {
  return (
    <div className={styles.reservastionForm} id={"reservastionForm"}>
      <h2>Réserver Votre Taxi Conventionné</h2>
      <p>
        Réserver dès maintenant votre chauffeur en quelques clics en remplissant
        le formulaire ci-dessous.
      </p>
      <ContactForm />
    </div>
  );
};

export default ReservastionForm;
