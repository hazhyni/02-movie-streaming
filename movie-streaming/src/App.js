import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Welcome from "./pages/Welcome";
import CommunityFeatures from "./components/CommunityFeatures";
import Movies from "./pages/Movies";
import MoviesSearch from "./pages/MoviesSearch";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [openMoviesSearch, setOpenMoviesSearch] = useState(false);
  
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'm') {
        e.preventDefault();
        if (currentPage !== 'movies') {
          setCurrentPage('movies');
          setOpenMoviesSearch(true);
        }
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case "movies":
        return <Movies openSearch={openMoviesSearch} />;
      case "movies-search":
        return <Movies openSearch={true} />;
      default:
        return (
          <>
            <Welcome setCurrentPage={setCurrentPage} />
            <CommunityFeatures />
          </>
        );
    }
  };

  return (
    <div className="App">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main style={{ paddingTop: "70px" }}>{renderPage()}</main>
      <Footer />
    </div>
  );
}

export default App;
