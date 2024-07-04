import React from 'react';
import PositionTree from '../components/PositionTree';
import PositionForm from '../components/PositionForm';

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Employee Hierarchy</h1>
      </header>
      <main>
        <PositionForm />
        <PositionTree />
      </main>
    </div>
  );
};

export default Home;
