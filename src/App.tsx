import { useReducer } from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// Pages:
import Home from './pages/Home';
import Borrow from './pages/Borrow';

// Components:
import Header from './components/Header';

//Context
import { GlobalContext, reducer } from './providers/GlobalContext/GlobalContext.provider';

//Data:
import { SPANISH } from './utils/translation';

function App() {
    const [state, dispatch] = useReducer(reducer, SPANISH);
  return (
  <BrowserRouter>
  <GlobalContext.Provider value={state}>
    <Header dispatch={dispatch}></Header>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/borrow-book" element={<Borrow />}/>
    </Routes>
  </GlobalContext.Provider>
  </BrowserRouter>
  );
}

export default App;
