"use client";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.scss";

const ContactForm = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kc1tluh",
        "template_8tkqyxf",
        form.current,
        "4kfiq0uhTc98yr3UR"
      )
      .then(
        (result) => {},
        (error) => {
          console.log(error);
        }
      );

    e.target.reset();
  };

  return (
    <form id="form" ref={form} onSubmit={sendEmail}>
      <input
        type="text"
        className="input-case"
        placeholder="Nom complet (*)"
        name="name"
        required
      />
      <input
        type="text"
        className="input-case"
        placeholder="Adresse email (*)"
        name="email"
        id="email"
        required
      />
      <input
        type="text"
        className="input-case"
        placeholder="Votre Téléphone (*)"
        name="phone"
        id="phone"
        required
      />
      <input
        type="text"
        className="input-case"
        placeholder="Ville (*)"
        name="ville"
        id="ville"
        required
      />
      <input
        type="text"
        className="input-case"
        placeholder="Code Postal (*)"
        name="code-postal"
        id="code-postal"
        required
      />

      <select name="pets" id="pet-select" className="select">
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
        name="message"
        placeholder="Type de rendez-vous Hospitalier :  Vous pouvez écrire ici le type de rendez vous. exemple : dialyse, chimiothérapie, radiothérapie, autres... "
      ></textarea>

      <input
        type="text"
        className="input-case"
        placeholder="Date premier déplacement (*)"
        name="date-premier-deplacement"
        id="date-premier-deplacement"
        required
      />
      <input
        type="text"
        className="input-case"
        placeholder="Adresse de départ"
        name="adresse-depart"
        id="adresse-depart"
        required
      />
      <input
        type="text"
        className="input-case"
        placeholder="Adresse d'arrivée (*)"
        name="adresse-arrivee"
        id="adresse-arrivee"
        required
      />

      <input
        type="text"
        className="input-case"
        placeholder="Ville (*)"
        name="ville-adresse-arrivee"
        id="ville-adresse-arrivee"
        required
      />

      <input
        type="text"
        className="input-case"
        placeholder="Code postal (*)"
        name="code-postal-adresse-arrivee"
        id="code-postal-adresse-arrivee"
        required
      />

      <input type="submit" value="Réserver" className="send-btn" />
    </form>
  );
};

export default ContactForm;
