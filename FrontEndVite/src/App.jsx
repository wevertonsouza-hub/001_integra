import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Feed from './pages/Feed';
import Cadastro from './pages/Cadastro';
import Chat from './pages/Chat';
import Cotacao from './pages/Cotacao';
import Orcamento from './pages/Orcamento';
import PerfilCliente from './pages/PerfilCliente';
import PerfilProjetista from './pages/PerfilProjetista';



import './App.css';


function App() {
  return (
    <div>      
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/perfil-cliente" element={<PerfilCliente />} />
          <Route path="/perfil-projetista" element={<PerfilProjetista />} />
          <Route path="/orcamento" element={<Orcamento />} />
          <Route path="/cotacao" element={<Cotacao />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
