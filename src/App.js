import { Routes, Route, Outlet } from 'react-router-dom';
import NavBar from './Components/Common/NavBar/NavBar';
import Home from './Routes/Home/Home';
import WebDesign from './Routes/WebDesign/WebDesign';
import './App.css';


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="/webdesign" element={<WebDesign />} />
        </Route>
      </Routes>
    </div>

  );
}

export default App;
