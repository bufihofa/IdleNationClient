import React from 'react';
import AppRouter from './router/AppRouter';
import './styles/global.css';
import './styles/sci-fi-components.css';
import './styles/sci-fi-additional.css';
import './styles/cyberpunk-hud.css';
const App: React.FC = () => {
  return (
    <AppRouter />
  );
};

export default App;