import React from 'react';
import './App.css';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <div className="container">
      <h1>Employee Application</h1>
      <AppRouter></AppRouter>
      <footer>
        <div className="footer">
          Copyright © 2020 DevaZona Io.
        </div>
      </footer>
    </div>
  );
}

export default App;
