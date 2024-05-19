import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
const All = styled("div")`
  display: flex;
  width: 100%;
  height: 400px;
  justify-content: space-around;
  margin-top: 20px;
  align-items: center;
  @media only screen and (max-width: 640px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 700px;
  }
`;
const Right = styled("div")`
  display: flex;
  width: 50%;
  height: 100%;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  @media only screen and (max-width: 640px) {
    width: 100%;
  }
`;
const LocationDiv = styled("div")`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-around;
  align-items: center;
`;

const InputsDiv = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 80%;
  height: 100%;

  @media only screen and (max-width: 640px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Input = styled("input")`
  height: 9%;
  width: 70%;
  border: none;
  border-bottom: 2px solid grey;
  &:focus-visible {
    outline: none;
  }
`;
const Placeholder = styled("textarea")`
  height: 8%;
  width: 70%;
  border: none;
  border-bottom: 2px solid grey;
  &:focus-visible {
    outline: none;
  }
`;
const Submit = styled("input")`
  height: 8%;
  width: 30%;
  font-weight: 700;
  border: none;
  border-radius: 20px;
  background-color: greenyellow;
  &:focus-visible {
    outline: none;
  }
`;

const Iframe = styled("iframe")`
  width: 40%;
  height: 400px;
  border: 0;
  @media only screen and (max-width: 640px) {
    width: 95%;
  }
`;
const FormEmail = styled("form")`
  height: 100%;
  width: 100%;
  @media only screen and (max-width: 640px) {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
  }
`;
export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_enw6q1l", "template_f7ks4tb", form.current, {
        publicKey: "UcGQhl6IzWjC_lI7C",
      })
      .then(
        () => {
          alert("Sizning xabaringiz MUAVVFAQIYATLI yuborildi !");
        },
        (error) => {
          alert("XATO! Qayta urunib ko'ring...", error.text);
        }
      );
  };

  return (
    <All>
      <Iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191885.59854203195!2d69.11455762018232!3d41.282479929544316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2z0KLQsNGI0LrQtdC90YIsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1715512303724!5m2!1sru!2s"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></Iframe>
      <Right>
        <LocationDiv>
          <InputsDiv>
            <FormEmail ref={form} onSubmit={sendEmail}>
              <Input
                list="browsers"
                name="from_qayerdan"
                placeholder="✈️  Откуда: регионы, города"
              />
              <Input
                list="browsers"
                name="from_qayerda"
                placeholder="🚢   Куда: регионы, города"
              />
              <Input name="from_qachon" type="datetime-local" />
              <Input
                name="from_belgi"
                type="text"
                placeholder="📃   Имя на табличке о встрече"
              />

              <Input
                type="number"
                name="from_kattalar"
                min="1"
                max="50"
                placeholder="🧑‍🤝‍🧑   Взрослые"
              />
              <Input
                type="number"
                name="from_bolalar"
                min="0"
                max="50"
                placeholder="👶   Дети"
              />
              <Input type="text" name="from_name" placeholder="🔤   Имя :" />
              <Input
                type="email"
                name="from_email"
                placeholder="📨   Gmail :"
              />
              <Placeholder name="Izoh :" placeholder="💬  Примечание :" />
              <Submit type="submit" value="Отправить" />
            </FormEmail>
            <datalist id="browsers">
              <option value="Кашкадарья" />
              <option value="Сурхандарья" />
              <option value="Джиззак" />
              <option value="Самарканд" />
              <option value="Ташкент" />
              <option value="Наманган" />
              <option value="Фергана" />
              <option value="Хорезм" />
              <option value="Сырдарья" />
              <option value="Навои" />
              <option value="Андижан" />
              <option value="Бухара" />
            </datalist>
          </InputsDiv>
        </LocationDiv>
      </Right>
    </All>
  );
};
