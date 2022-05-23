import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import './App.css';


const App = () => {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Home />
      </main>
    </div>

  );
}

export default App;
