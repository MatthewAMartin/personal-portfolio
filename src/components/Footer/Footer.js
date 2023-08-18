import React from "react";
import { useEffect, useState } from "react";
import {
  HeaderContainer,
  NavLinkContainer,
  NavLinkList,
  IconGrid,
} from "./FooterStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";

const Footer = () => {
  const [show, setShow] = useState(false);

  const controlHeader = () => {
    if (window.scrollY > 20) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlHeader);
    return () => {
      window.removeEventListener("scroll", controlHeader);
    };
  }, []);

  return (
    <HeaderContainer className={`${show && "open"}`}>
      <NavLinkContainer>
        <NavLinkList>
          <IconGrid>
            <a title="GitHub" href="https://github.com/MatthewAMartin" target="_blank">
              <FontAwesomeIcon icon={brands("github")} className="fa-1x icon" />
            </a>
            <a title="LinkedIn" href="https://www.linkedin.com/in/matthew-martin-a18356166/" target="_blank">
              <FontAwesomeIcon
                icon={brands("linkedin")}
                className="fa-1x icon"
              />
            </a>
            <a title="mattmartin.2289@gmail.com" href ="mailto: mattmartin.2289@gmail.com">
              <FontAwesomeIcon
                icon={solid("envelope")}
                className="fa-1x icon"
              />
            </a>
          </IconGrid>
        </NavLinkList>
      </NavLinkContainer>
    </HeaderContainer>
  );
};

export default Footer;
