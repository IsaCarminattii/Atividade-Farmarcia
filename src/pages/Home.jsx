
import React from 'react';
import BannerInauguracao from '../components/BannerInauguracao';

const Home = () => (
   <main style={{ padding: '20px', textAlign: 'center', backgroundColor: 'var(--cor-5)' }}>
       <h2 style={{ color: 'var(--cor-3)' }}>Nova Direção, Mesmo Compromisso com Você!</h2>
       <p style={{ color: 'var(--cor-4)' }}>
           Estamos de portas abertas com uma nova identidade, mas sempre com a mesma dedicação à sua saúde.
           Venha nos conhecer na inauguração!
       </p>
       <BannerInauguracao />
   </main>
);

export default Home;
