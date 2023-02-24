import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SharedLayout from './components/SharedLayout';
import CocktailDetails from './pages/CocktailDetails';
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const GlobalContext = createContext();

export const AppContext = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${url}${searchTerm}`);
      const { drinks } = response.data;
      setData(drinks);
    };

    fetchData();
  }, [searchTerm]);

  return (
    <GlobalContext.Provider value={{ data, setSearchTerm }}>
      <App />
    </GlobalContext.Provider>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="cocktails/:cocktailId" element={<CocktailDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
