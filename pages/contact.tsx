import React from "react";
import InputField from "../components/InputField";
import MessageField from "../components/MessageField";

const Contact = () => {
  return (
    <div>
      <div>
        <h1>Contact Me</h1>
        <p>
          Get in touch with me directly <span style={{ color: "#e1645b" }}>josephneymar33@gmail.com</span>
        </p>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
          nesciunt magnam debitis? Voluptate, itaque id. Praesentium, molestiae
          soluta ratione illum eligendi nulla repellendus, earum veniam et
          dignissimos beatae exercitationem officiis?
        </p>
      </div>

      <div>
        <InputField placeholderText="Name"/>
        <InputField placeholderText="Email"/>
        <MessageField/>
      </div>
    </div>
  );
};

export default Contact;
