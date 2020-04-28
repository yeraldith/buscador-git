import React from "react";
import "../style/Header.css";

const Header = () => {
  return (
    <header>
      <h1 className="text-center mt-5 ">
        Buscador de Perfiles GitHub{" "}
        <img
          src="https://img.icons8.com/dusk/64/000000/github.png"
          alt="iconogithub"
        />
      </h1>
    </header>
  );
};
export default Header;
