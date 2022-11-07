import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Borrow from './pages/Borrow';
function App() {

  return (
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/borrow-book" element={<Borrow />}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
