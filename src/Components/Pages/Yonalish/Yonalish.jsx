import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const All = styled("div")`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    height: 600px;
    justify-content: center;
    align-items: center;
  }
`;
const Left = styled("div")`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 1000px) {
    width: 0%;
    height: 0%;
  }
`;
const Right = styled("div")`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  @media only screen and (max-width: 1000px) {
    width: 100%;
    height: 100%;
    justify-content: space-evenly;
    background-image: url("https://www.forumdaily.com/wp-content/uploads/2018/08/Depositphotos_73185717_m-2015.jpg");
  }
`;
const Img = styled("img")`
  width: 80%;
  height: 300px;
  border-radius: 20px;
  @media only screen and (max-width: 1000px) {
    width: 100%;
    height: 100%;
  }
`;

const H1 = styled("h1")`
  margin: 0;
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  letter-spacing: 2px;
  text-align: center;
  @media only screen and (max-width: 1000px) {
    color: white;
  }
`;

const Buttons = styled("div")`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15%;
`;
const ButtonLeft = styled("button")`
  width: 30%;
  height: 100%;
  border: 1px solid greenyellow;
  border-bottom-left-radius: 20px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.4s;

  &:focus {
    background-color: greenyellow;
  }
  &:hover {
    background-color: greenyellow;
    border: 1px solid white;
  }
  @media only screen and (max-width: 1000px) {
    border: 0px;
    &:hover {
      background-color: greenyellow;
      border: 1px solid greenyellow;
    }
  }
  @media only screen and (max-width: 515px) {
    width: 40%;
  }
  @media only screen and (max-width: 380px) {
    height: 70%;
    width: 45%;
  }
`;
const ButtonRight = styled("button")`
  width: 30%;
  height: 100%;
  border: none;
  border-top-right-radius: 20px;
  border: 1px solid greenyellow;
  background-color: white;
  display: flex;
  align-items: center;
  transition: 0.5s;
  justify-content: center;
  &:focus {
    background-color: greenyellow;
  }
  &:hover {
    background-color: greenyellow;
    border: 1px solid white;
  }
  @media only screen and (max-width: 1000px) {
    border: 0px;
    &:hover {
      background-color: greenyellow;
      border: 1px solid greenyellow;
    }
  }
  @media only screen and (max-width: 515px) {
    width: 40%;
    border-left: 1px solid greenyellow;
  }
  @media only screen and (max-width: 380px) {
    height: 70%;
    width: 45%;
  }
`;

const LocationIcon = styled("img")`
  height: 60%;
`;
const Location = styled("p")`
  font-size: 16px;
  margin-left: 10px;
`;

const Input = styled("input")`
  width: 40%;
  height: 12%;
  border: 1px solid grey;
  padding-left: 10px;
  border: 1px solid grey;
  &:focus-visible {
    outline: none;
  }
  @media only screen and (max-width: 515px) {
    width: 50%;
  }
  @media only screen and (max-width: 515px) {
    width: 60%;
  }
`;
const Button = styled(Link)`
  position: relative;
  height: 15%;
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: greenyellow;
  border: none;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  &:focus-visible {
    outline: none;
  }
  &:active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s;
  }
  &:after {
    content: "";
    background: #94de94;
    display: block;
    position: absolute;
    padding-top: 300%;
    padding-left: 350%;
    margin-left: -20px !important;
    margin-top: -120%;
    opacity: 0;
    transition: all 0.8s;
  }
  @media only screen and (max-width: 515px) {
    height: 10%;
    width: 60%;
  }
`;

const H4 = styled("h4")`
  margin: 0;
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  font-family: "Roboto", sans-serif;
  text-decoration: none;
  color: black;
`;
const CityImg = styled("img")`
  width: 100px;
`;

const CityDiv = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 35%;
  @media only screen and (max-width: 1060px) {
    width: 45%;
  }
  @media only screen and (max-width: 845px) {
    width: 50%;
  }
  @media only screen and (max-width: 430px) {
    width: 80%;
  }
`;
const CityMain = styled("div")`
  height: 500px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px 0;
  @media only screen and (max-width: 730px) {
    flex-direction: column;
    height: 850px;
  }
`;
const CityAll = styled("div")`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;
const AllDiv = styled("div")`
  width: 100%;
  height: auto;
  padding: 50px 0;
`;
const Yonalish = () => {
  const [active, setActive] = useState("");

  const handleClick = (event) => {
    setActive(event.target.id);
  };
  return (
    <AllDiv>
      <All>
        <Left>
          <Img
            src="https://www.forumdaily.com/wp-content/uploads/2018/08/Depositphotos_73185717_m-2015.jpg"
            alt=""
          />
        </Left>
        <Right>
          <H1>Путешествие по Узбекистану</H1>
          <Buttons>
            <ButtonLeft
              key={1}
              className={active === "1" ? "focus" : undefined}
              id={"1"}
              onClick={handleClick}
            >
              <LocationIcon
                src="https://cdn-icons-png.flaticon.com/512/106/106195.png"
                alt=""
              />
              <Location>Поездка</Location>
            </ButtonLeft>
            <ButtonRight
              key={2}
              className={active === "2" ? "focus" : undefined}
              id={"2"}
              onClick={handleClick}
            >
              <LocationIcon
                src="https://cdn.icon-icons.com/icons2/3514/PNG/512/watch_time_clock_icon_221069.png"
                alt=""
              />
              <Location>ПОЧАСОВАЯ</Location>
            </ButtonRight>
          </Buttons>

          <Input
            list="browsers"
            name="browser"
            placeholder="Откуда : регионы, города"
          />
          <Input
            list="browsers"
            name="browser"
            placeholder="
            Kуда : регионы, города"
          />
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

          <Button to={"/takliflar"}>
            <H4>Получить предложение</H4>
          </Button>
        </Right>
      </All>
      <h1 style={{ textAlign: "center" }}>Наши направления</h1>
      <CityMain>
        <CityAll>
          <CityDiv>
            <CityImg
              src="https://upload.wikimedia.org/wikipedia/commons/f/fc/30_Shakhrisabz_Ak_Seraj_%287%29.JPG"
              alt=""
            />
            <h5>Кашкадарья</h5>
          </CityDiv>
          <CityDiv>
            <CityImg
              src="https://surkhandarya.uzedu.uz/uploads/media/81ef73e3-6fea-de81-6b2e-0abd0c4a9f82.jpg"
              alt=""
            />
            <h5>Сурхандарья</h5>
          </CityDiv>
          <CityDiv>
            <CityImg
              src="https://static.review.uz/crop/9/0/1400__100_902470340.jpg?v=1606807243"
              alt=""
            />
            <h5>Джиззак</h5>
          </CityDiv>
          <CityDiv>
            <CityImg
              src="https://planetofhotels.com/guide/sites/default/files/styles/paragraph__hero_banner__hb_image__1880bp/public/hero_banner/Registan-Square.jpg"
              alt=""
            />
            <h5>Самарканд</h5>
          </CityDiv>
          <CityDiv>
            <CityImg
              src="https://cdn2.tu-tu.ru/image/pagetree_node_data/1/7a188df8327dd502fc336be6d5d2ec47/"
              alt=""
            />
            <h5>Ташкент</h5>
          </CityDiv>
          <CityDiv>
            <CityImg
              src="https://www.orexca.com/img/uzbekistan/namangan.jpg"
              alt=""
            />
            <h5>Наманган</h5>
          </CityDiv>
        </CityAll>
        <CityAll>
          <CityDiv>
            <CityImg
              src="https://www.afisha.uz/uploads/media/2014/11/0364373_m.jpg"
              alt=""
            />
            <h5>Фергана</h5>
          </CityDiv>
          <CityDiv>
            <CityImg
              src="https://ichef.bbci.co.uk/images/ic/480xn/p0h8l984.jpg.webp"
              alt=""
            />
            <h5>Хорезм</h5>
          </CityDiv>
          <CityDiv>
            <CityImg
              src="https://uzbekistan.travel/storage/app/media/nargiza/cropped-images/cropped-images/2-0-0-0-0-1583469330-0-0-0-0-1583469382.jpg"
              alt=""
            />
            <h5>Сырдарья</h5>
          </CityDiv>
          <CityDiv>
            <CityImg src="https://i.imgur.com/jvESmRN.jpg" alt="" />
            <h5>Навои</h5>
          </CityDiv>
          <CityDiv>
            <CityImg
              src="https://explorers.uz/image/cache/data/info/uzbekistan/ferghana_valley/andijan/01-1600x1200.jpg"
              alt=""
            />
            <h5>Андижан</h5>
          </CityDiv>
          <CityDiv>
            <CityImg
              src="https://www.shutterstock.com/image-photo/bukhara-historical-city-uzbekistan-translation-600nw-2410842963.jpg"
              alt=""
            />
            <h5>Бухара</h5>
          </CityDiv>
        </CityAll>
      </CityMain>
    </AllDiv>
  );
};

export default Yonalish;
