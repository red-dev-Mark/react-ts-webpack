import React from 'react';
import { Link } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <nav>
      <Link to="home">Home</Link>
      <Link to="detail">Detail</Link>
      <Link to="help">Help</Link>
    </nav>
  );
};

export default App;
