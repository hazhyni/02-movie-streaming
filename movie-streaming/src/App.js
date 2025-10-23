import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Welcome from "./pages/Welcome";
import CommunityFeatures from "./components/CommunityFeatures";
import Movies from "./pages/Movies";
import Rate from "./pages/Rate";
import Community from "./pages/Community";
import Rewards from "./pages/Rewards";
import About from "./pages/About";
import GlobalSearch from "./components/GlobalSearch";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedGenre, setSelectedGenre] = useState(null);

  const renderPage = () => {
    switch (currentPage) {
      case "movies":
        return <Movies selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre} />;
      case "rate":
        return <Rate />;
      case "community":
        return <Community />;
      case "rewards":
        return <Rewards />;
      case "about":
        return <About />;
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
      <Navbar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
      />
      <main style={{ paddingTop: "70px" }}>{renderPage()}</main>
      <Footer />
      <GlobalSearch />
    </div>
  );
}

export default App;
