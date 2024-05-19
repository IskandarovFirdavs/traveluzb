import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const All = styled("div")`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 1100px;
  }
  @media only screen and (max-width: 600px) {
    justify-content: space-between;
    height: 800px;
  }
  @media only screen and (max-width: 430px) {
    justify-content: start;
    height: 900px;
  }
`;
const Left = styled("div")`
  width: 45%;
  height: 85%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 1000px) {
    width: 100%;
    height: 50%;
  }
  @media only screen and (max-width: 600px) {
    height: 45%;
  }
  @media only screen and (max-width: 430px) {
    height: 30%;
  }
`;
const Right = styled("div")`
  width: 40%;
  height: 85%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (max-width: 1000px) {
    width: 90%;
    height: 50%;
    justify-content: space-evenly;
    margin: 20px;
  }
  @media only screen and (max-width: 430px) {
    height: 40%;
    margin: 50px;
  }
`;
const LeftImg = styled("img")`
  width: 100%;
  height: 100%;
  @media only screen and (max-width: 352px) {
    height: auto;
  }
`;
const RightImgs = styled("div")`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media only screen and (max-width: 1000px) {
    height: 10%;
  }
  @media only screen and (max-width: 430px) {
    height: 20%;
    align-items: flex-end;
  }
`;
const RighText = styled("div")`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  @media only screen and (max-width: 430px) {
    flex-direction: column;
  }
  @media only screen and (max-width: 352px) {
    text-align: center;
    height: 50%;
  }
`;
const RightImgLink = styled(Link)`
  width: auto;
  height: 100%;
  @media only screen and (max-width: 430px) {
    flex-direction: column;
    width: auto;
    height: 80%;
  }
`;
const RightImg = styled("img")`
  width: auto;
  height: 100%;
  border-radius: 50%;
`;
const H1 = styled("h1")`
  margin: 0;
  letter-spacing: 2px;
  font-size: 25px;
  font-family: "Roboto", sans-serif;
  @media only screen and (max-width: 400px) {
    text-align: center;
  }
`;
const H2 = styled("h2")`
  margin: 0;
  letter-spacing: 2px;
  font-size: 25px;
  font-family: "Roboto", sans-serif;
  @media only screen and (max-width: 400px) {
    text-align: center;
    font-size: 10px;
  }
`;
const P = styled("p")`
  text-align: center;
  @media only screen and (max-width: 1000px) {
    width: 50%;
  }
  @media only screen and (max-width: 352px) {
    width: 90%;
  }
`;

const Connect = () => {
  return (
    <All>
      <Left>
        <LeftImg
          src="https://www.shutterstock.com/image-photo/young-friendly-operator-woman-agent-600nw-712414813.jpg"
          alt=""
        />
      </Left>
      <Right>
        <H1>Связаться с нами</H1>
        <P>
          Как только вы обратитесь к нам, мы свяжемся с вами в течение 5 минут.
          пойдем!
        </P>
        <H2 style={{ color: "#4f4f4f" }}>📲+998 (94) 656-10-06</H2>
        <H2 style={{ color: "#4f4f4f" }}>📲+998 (90) 244-46-63</H2>
        <P>
          📨 Gmail
          <a
            style={{ textDecoration: "none" }}
            href="http://iskandarovfirdavs09@gmail.com"
          >
            iskandarovfirdavs09@gmail.com
          </a>
        </P>
        <RightImgs>
          <RightImgLink
            to={
              "https://www.facebook.com/profile.php?id=61556439185310&mibextid=ZbWKwL"
            }
          >
            <RightImg
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4hvegtGZKST3kiZfpXa4a4ihu3FBoV-tvukV95j71gQ&s"
              alt=""
            />
          </RightImgLink>
          <RightImgLink to={"https://wa.me/qr/AD4YRYGOIEWGI1"}>
            <RightImg
              src="https://cdn-icons-png.flaticon.com/512/124/124034.png"
              alt=""
            />
          </RightImgLink>
          <RightImgLink to={"https://t.me/Naqshab"}>
            <RightImg
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1qVcye-52wioPZ7unoUWP9VzDj5FpVQqHR1ykVmX9Xw&s"
              alt=""
            />
          </RightImgLink>
        </RightImgs>
        <h2>🗺️Местоположение : </h2>
        <RighText>
          <h4>🏙️Город: Ташкент</h4>
          <h4>🏠Улица: Чиланзар 1а</h4>
          <h4>🏢 График работы: 24/7</h4>
        </RighText>
      </Right>
    </All>
  );
};

export default Connect;
