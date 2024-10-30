// src/components/Header.js
import React from 'react';
import './Header.css'; // Importa o arquivo CSS
import Logo from './Logo';

const Header = () => (
   <header className="header"> {/* Adiciona a classe header */}
       <Logo />
       <h1>Bem-vindo à Nova Farmácia!</h1>
   </header>
);

export default Header;

