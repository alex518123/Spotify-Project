import React from "react";
import logoSpotify from "../assets/logo/spotify-logo.png";

const Footer = () => {
    return (
      <footer className="footer">
        <img 
          id="logo" 
          src={logoSpotify} 
          alt="Logo do Spotify"
          style={{ objectFit: "contain", width: "100px", height: "30px" }} // Tamanho ajustado da imagem
        />
        <div className="footer__text">
          <span>Todos os direitos reservados ©</span>
          <span>Desenvolvido por: Alexander</span>
        </div>
      </footer>
    );
  };
  
  export default Footer;