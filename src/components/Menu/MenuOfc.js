import "./styles.css";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Modal } from "./Modal";
import {Menu} from './Menu';
import { ReactDimmer } from "react-dimmer";

export default function MenuOfc() {
  const [isModalOpen, setModal] = useState(false);
  const [isMenuOpen, setMenu] = useState(false);

  const handleClick = () => {
    setModal((prevState) => !prevState);
  };

  const handleMenu = () => {
    setMenu((prevState) => !prevState);
  };

  return (
    <>
      <div className="app">
        <div className="header">
          <GiHamburgerMenu className="menu-btn" onClick={handleMenu} />
          <h1 className="menuh1">Menu</h1>
          <div className="nav"></div>
        </div>
        </div>
      <Menu isMenuOpen={isMenuOpen} />

      <ReactDimmer
        isOpen={isModalOpen}
        exitDimmer={setModal}
        zIndex={100}
        blur={1.5}
      />
      <ReactDimmer
        isOpen={isMenuOpen}
        exitDimmer={setMenu}
        zIndex={100}
        blur={1.5}
      />
    </>
  );
}
