import React from "react";
import ContactHero from "../element/ContactSection/ContactHero";
import ContactForm from "../element/ContactSection/ContactForm";

const Contact = () => {
  document.title='Qwikio Contact page'

  return (
    <div>
      <ContactHero />
      <ContactForm />
    </div>
  );
};

export default Contact;
