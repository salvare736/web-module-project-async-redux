import './App.css';

import UnitList from './components/UnitList';

function App() {
  return (
    <div className='App'>
      <header className='header'>
        <h1>Age of Empires II</h1>
      </header>
      <section className='listsContainer'>
        <h2>Complete Unit List</h2>
        <UnitList />
      </section>
    </div>
  );
}

export default App;
