import React from 'react';

import { Routes, Route } from 'react-router-dom';

import HomePage from './screens/home-page/HomePage';
import Pokedex from './screens/pokedex-page/PokedexPage';
import LegendariesPage from './screens/lengedaries-page/LegendariesPage';
import Error from './screens/error-page/ErrorPage';
import { AuthProvider } from './hooks/useGoogleLogin';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/legendaries" element={<LegendariesPage />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
