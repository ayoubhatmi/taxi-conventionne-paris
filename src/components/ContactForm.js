"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./ContactForm.module.scss";

const ContactForm = () => {
  const form = useRef();
  const [submitStatus, setSubmitStatus] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kc1tluh",
        "template_lx2mbac",
        form.current,
        "4kfiq0uhTc98yr3UR"
      )
      .then(
        (result) => {
          setSubmitStatus(true);
        },
        (error) => {}
      );

    e.target.reset();
  };

  return (
    <>
      <form className={styles.form} id="form" ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          className={styles.inputCase}
          placeholder="Nom complet (*)"
          name="name"
          required
        />
        <input
          type="email"
          className={styles.inputCase}
          placeholder="Adresse email (*)"
          name="email"
          id="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"
          required
        />
        <input
          type="text"
          className={styles.inputCase}
          placeholder="Votre Téléphone (*)"
          name="phone"
          id="phone"
          required
        />
        <input
          type="text"
          className={styles.inputCase}
          placeholder="Ville (*)"
          name="ville"
          id="ville"
          required
        />
        <input
          type="text"
          className={styles.inputCase}
          placeholder="Code Postal (*)"
          name="code-postal"
          id="code-postal"
          required
        />

        <select
          name="freq-deplacement"
          id="freq-deplacement"
          className={styles.select}
        >
          <option value="">--Fréquence approximative des déplacements--</option>
          <option value="1">1 fois par semaine</option>
          <option value="2">2 fois par semaine</option>
          <option value="3">3 fois par semaine</option>
          <option value="4">4 fois par semaine</option>
          <option value="5">5 fois par semaine</option>
          <option value="6">6 fois par semaine</option>
          <option value="7">7 fois par semaine</option>
        </select>

        <textarea
          cols="30"
          rows="10"
          name="typer-rendez-vous"
          placeholder="Type de rendez-vous Hospitalier :  Vous pouvez écrire ici le type de rendez vous. exemple : dialyse, chimiothérapie, radiothérapie, autres... "
        ></textarea>

        <input
          type="text"
          className={styles.inputCase}
          placeholder="Date premier déplacement (*)"
          name="date-premier-deplacement"
          id="date-premier-deplacement"
          required
        />
        <input
          type="text"
          className={styles.inputCase}
          placeholder="Adresse de départ"
          name="adresse-depart"
          id="adresse-depart"
          required
        />
        <input
          type="text"
          className={styles.inputCase}
          placeholder="Adresse d'arrivée (*)"
          name="adresse-arrivee"
          id="adresse-arrivee"
          required
        />

        <input
          type="text"
          className={styles.inputCase}
          placeholder="Ville (*)"
          name="ville-adresse-arrivee"
          id="ville-adresse-arrivee"
          required
        />

        <input
          type="text"
          className={styles.inputCase}
          placeholder="Code postal (*)"
          name="code-postal-adresse-arrivee"
          id="code-postal-adresse-arrivee"
          required
        />

        <input type="submit" value="Réserver" className={styles.btn} />
      </form>

      {submitStatus ? (
        <p className={styles.successMsg}>
          Votre demande de réservation de taxi a été soumise avec succès. Merci!
        </p>
      ) : null}
    </>
  );
};

export default ContactForm;
