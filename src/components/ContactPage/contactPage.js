import React from "react";
import { Form } from "react-router-dom";
import css from "./contact.module.css";

const ContactPage = () => {
  return (
    <div className={css.root}>
      <div className={css.container}>
        <div  style={{backgroundImage: `url('../../../public/static/fr2.png')`}}  className={css.banner}></div>
        <div className={css.title}>
          <h2>Contactanos</h2>
        </div>
        <div className={css.subtitle}>
          <p>
            Queremos escuchar tu opinión, tu correo será atendido a la mayor
            brevedad posible.
          </p>
        </div>
        <div>
          <Form className={css.form}>
            <div className={css.name}>
              <label for="name">Cliente:</label>
              <input type="text" id="name" name="name" required maxlength="8" className={css.inputText}/>
            </div>
            <label fot="message">Escribe tu mensaje aquí</label>
            <textarea rows="4" cols="50" className={css.textArea}></textarea>
            <div className={css.btn}>
              <button className={css.send}>enviar correo</button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
