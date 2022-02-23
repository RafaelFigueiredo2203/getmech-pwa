import React from 'react';
import './home.scss';
import logo from '../../assets/imgs/logo.svg';
import firtsSvg from '../../assets/imgs/My_location_re_r52x.svg';
import bestPlace from '../../assets/imgs/best_place_r685.svg';
import destination from '../../assets/imgs/destinations_fpv7.svg';
import endSvg from '../../assets/imgs/undraw_city_driver_re_0x5e.svg';


export function Home(){
  return (
    <div className="home">
      <header className="headerHome">
        <a href="/question"><h1>Login -{'>'} </h1></a>
      </header>

      <div className="logo">
        <img src={logo} className="logo"alt="logo" />
        <h2>Seu veículo parou inesperadamente? O getMech está aqui para te ajudar a 
          encontrar a oficina mecânica mais próxima de você!</h2>
      </div>
      <div className="body">

        <img src={firtsSvg} className="firstSvg" alt="mylocation" />
        
        <h3>Com base na sua localização , o getMech  ajuda você a localizar a 
          oficina mecânica mais próxima , de uma forma simples e rápida.</h3>

          <span/>

          <img src={bestPlace} className="bestPlace" alt="bestPlace" />

          <h3>Seja quando e de onde estiver , com uma conexão  com a internet , 
            você conseguira usar nossos serviços.</h3>

            <span/>

            <img src={destination} className="destination" alt="destination" />

            <h3>Não sabe como chegar? Fique tranquilo , nós mostraremos o caminho para você!</h3>
            
            <span/>

            <h3>Bora experimentar nosso app?</h3>

            <img src={endSvg} className="endSvg" alt="endSvg" />

            <a href="/question" className="btnEntrar">Entrar</a>
        </div>

       

    </div>
  );
}