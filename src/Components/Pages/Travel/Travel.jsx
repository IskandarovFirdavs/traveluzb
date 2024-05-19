import React, { useState } from "react";
import styled from "styled-components";
import { HomeJs } from "../../Home/HomeJs";
const MainofMain = styled("div")`
  display: flex;
  align-items: center;
  width: 510px;
  height: auto;
  justify-content: left;
  margin-top: 100px;
`;

const Alll = styled("div")`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Blockck = styled("div")`
  margin-left: 20px;
  display: flex;
  height: auto;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  margin-bottom: 20px;
`;
const ImgImg = styled("img")`
  height: 100px;
  width: 100px;
`;

const Text76 = styled("h2")`
  height: auto;
  font-size: 25px;
  font-weight: 700;
  font-family: "Courier New", Courier, monospace;
  color: black;
  margin: 0;
  font-family: "Roboto", sans-serif;
`;
const Types = styled("h4")`
  height: auto;
  font-size: 25px;
  font-weight: 700;
  font-family: "Courier New", Courier, monospace;
  color: black;
  margin: 0;
  font-family: "Roboto", sans-serif;
`;
const Text67 = styled("p")`
  font-family: "Times New Roman", Times, serif;
  height: auto;
  color: #434242;
  margin-top: 25px;
  width: 70%;
  font-family: "Roboto", sans-serif;
  font-weight: 600;
`;

const CarMainDiv = styled("div")`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  text-align: center;
  flex-direction: column;
`;
const CarDiv = styled("div")`
  width: 80%;
  height: 75%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1800px;
  overflow-y: hidden;
  overflow-x: scroll;
`;

const BizningH1 = styled("h1")`
  margin: 0;
  height: 25%;
  width: 30%;
  border-bottom: 10px solid greenyellow;
  font-weight: 600;
  @media only screen and (max-width: 820px) {
    width: 95%;
  }
`;

const CarImg = styled("img")`
  height: 90px;
  margin-left: 30px;
`;

const Travel = () => {
  return (
    <div>
      <CarMainDiv>
        <BizningH1>Наши транспорты</BizningH1>
        <CarDiv>
          <div>
            <CarImg
              src="https://www.nissanusa.com/content/dam/Nissan/us/assets/2024/sentra/2024-nissan-sentra-12114-exterior-kh3.png.ximg.m_6_m.smart.png"
              alt=""
            />
            <Types>СТАНДАРТ</Types>
          </div>
          <div>
            <CarImg
              src="https://www.kiasyria.com/content/dam/kwcms/gt/en/images/showroom/Sorento_MQ4_21MY/Features/360vr/Aurora-Black/00.png"
              alt=""
            />{" "}
            <Types>БИЗНЕС</Types>
          </div>
          <div>
            <CarImg
              style={{ height: "120px", marginTop: "-20px" }}
              src="https://www.airporttransfer.amsterdam/wp-content/uploads/2023/05/Executive-business-taxi-airport-transfer-amsterdam.png"
              alt=""
            />
            <Types style={{ marginTop: "-15px" }}>ПРЕМИУМ</Types>
          </div>
          <div>
            <CarImg
              style={{ height: "80px" }}
              src="https://www.lindseylimo.com/Customer-Content/www/fleet/5.png"
              alt=""
            />
            <Types>SUV</Types>
          </div>
          <div>
            <CarImg
              src="https://jacoman.com/en/wp-content/uploads/2022/12/spec-car-min-1.png"
              alt=""
            />{" "}
            <Types>МИКРОАВТОБУС</Types>
          </div>
          <div>
            <CarImg
              src="https://images.squarespace-cdn.com/content/v1/652f2f00798aeb069c0fd7a9/2877c2f7-915a-4255-b287-888ebb749e69/Alston+coache+54+seater.png"
              alt=""
            />
            <Types>АВТОБУС</Types>
          </div>
        </CarDiv>
      </CarMainDiv>
      <Alll>
        {HomeJs.map((d) => (
          <MainofMain>
            <ImgImg src={d.img} alt="" />
            <Blockck>
              <Text76>{d.maintext}</Text76>
              <Text67>{d.text}</Text67>
            </Blockck>
          </MainofMain>
        ))}
      </Alll>
    </div>
  );
};

export default Travel;
