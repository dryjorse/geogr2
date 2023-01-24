import { useEffect } from 'react';
import useMatchMedia from 'use-match-media';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import MainPage from './pages/mainPage/MainPage';
import HeaderMobile from './components/header/HeaderMobile';
import CountriesPage from './pages/countriesPage/CountriesPage';
import CountriePage from './pages/countriePage/CountriePage';

 

function App() {
  const isMobile = useMatchMedia('(max-width: 480px)')  
  
  return (
    <HashRouter hashType="hashbang">
      <div className="App">
        {
          isMobile ? <HeaderMobile /> : <Header />
        }
        <Routes>
          <Route index element={<MainPage />}/>
          <Route path='/countries' element={<CountriesPage />}/>
          <Route path='/countries/:countrie' element={<CountriePage />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
