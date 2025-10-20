import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Welcome from "./pages/Welcome";
import CommunityFeatures from "./components/CommunityFeatures";
import Movies from "./pages/Movies";
import GlobalSearch from "./components/GlobalSearch";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "movies":
        return <Movies />;
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
      <GlobalSearch />
    </div>
  );
}

export default App;
