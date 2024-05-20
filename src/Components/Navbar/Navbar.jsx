import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./Navbar.css";
const Nav = styled("div")`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: greenyellow;
`;
const Left = styled(Link)`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: auto;
  justify-content: center;
  margin-top: -10px;
`;
const Right = styled("div")`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: auto;
  justify-content: space-around;
`;

const H1 = styled("h1")`
  margin: 0;
  color: black;
  cursor: pointer;
  width: 80%;
  .roboto-black-italic {
    font-family: "Roboto", sans-serif;
    font-weight: 900;
    font-style: italic;
  }
  @media only screen and (max-width: 500px) {
    font-size: 25px;
  }
  @media only screen and (max-width: 400px) {
    font-size: 20px;
  }
  @media only screen and (max-width: 250px) {
    font-size: 15px;
    width: 100%;
  }
`;
const H6 = styled(Link)`
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  margin: 0;
  color: black;
  font-size: 80%;
  cursor: pointer;
  text-decoration: underline 0.15em greenyellow;
  text-underline-offset: 0.6em;
  transition: text-decoration-color 300ms, text-underline-offset 300ms;
  &:hover {
    text-decoration-color: black;
    text-underline-offset: 0.4em;
  }
`;

const Header2 = styled("div")`
  display: flex;
  justify-content: space-around;
  width: 20%;
  height: 50px;
`;
const Accounts = styled(Link)`
  width: 11%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-decoration: none;
  color: black;
`;
const LangIcon = styled("img")`
  height: 50px;
`;

const Navbar = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Nav>
      <Left to={"/travelru/"}>
        <H1>Uzbekistan Transfer.uz</H1>
      </Left>
      {width <= 800 ? (
        <Header2>
          {" "}
          <div className="dropdown">
            <img
              src="https://cdn3d.iconscout.com/3d/premium/thumb/language-translate-4965044-4133429.png?f=webp"
              alt="Cinque Terre"
              height="50"
            />
            <div className="dropdown-content">
              <div className="dropdown-content">
                <a href="https://iskandarovfirdavs.github.io/travel/">
                  <LangIcon
                    src="https://static.vecteezy.com/system/resources/previews/016/328/589/original/uzbekistan-flat-rounded-flag-icon-with-transparent-background-free-png.png"
                    alt=""
                  />
                </a>
                <a href="https://iskandarovfirdavs.github.io/traveluzb/">
                  <LangIcon
                    src="https://www.pinclipart.com/picdir/big/94-946409_flag-ru-russia-icon-russian-federation-flag-icon.png"
                    alt=""
                  />
                </a>
                <a href="https://iskandarovfirdavs.github.io/travelru/">
                  <LangIcon
                    src="https://cdn-icons-png.flaticon.com/512/197/197374.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="dropdown">
            <img
              src="https://www.svgrepo.com/show/509382/menu.svg"
              alt="Cinque Terre"
              height="50"
            />
            <div className="dropdown-content">
              <div className="dropdown-content">
                <H6 to={"/yo'nalishlar"}>Our destinations</H6>
                <H6 to={"/ariza"}>Get an offer</H6>
                <H6 to={"/sharhlar"}>Comments</H6>
                <H6 to={"/bog'lanish"}>Contact us</H6>
              </div>
            </div>
          </div>
        </Header2>
      ) : (
        <Right>
          <H6 to={"/yo'nalishlar"}>Our destinations</H6>
          <H6 to={"/ariza"}>Get an offer</H6>
          <H6 to={"/sharhlar"}>Comments</H6>
          <H6 to={"/bog'lanish"}>Contact us</H6>
          <div className="dropdown">
            <img
              src="https://cdn3d.iconscout.com/3d/premium/thumb/language-translate-4965044-4133429.png?f=webp"
              alt="Cinque Terre"
              height="50"
            />
            <div className="dropdown-content">
              <div className="dropdown-content">
                <a href="https://iskandarovfirdavs.github.io/travel/">
                  <LangIcon
                    src="https://static.vecteezy.com/system/resources/previews/016/328/589/original/uzbekistan-flat-rounded-flag-icon-with-transparent-background-free-png.png"
                    alt=""
                  />
                </a>
                <a href="https://iskandarovfirdavs.github.io/traveluzb/">
                  <LangIcon
                    src="https://www.pinclipart.com/picdir/big/94-946409_flag-ru-russia-icon-russian-federation-flag-icon.png"
                    alt=""
                  />
                </a>
                <a href="https://iskandarovfirdavs.github.io/travelru/">
                  <LangIcon
                    src="https://cdn-icons-png.flaticon.com/512/197/197374.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </Right>
      )}
    </Nav>
  );
};

export default Navbar;
