import React, { useState } from "react";
import "./index.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";

const App = () => {
  const [page, setPage] = useState("home");
  const [activeButton, setActiveButton] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  const handleNavigation = (pageName) => {
    setPage(pageName);
    setActiveButton(pageName);
  };

  return (
    <div className="app-container">
      {/* Enhanced Navigation Bar */}
      <nav className="navbar" style={{
        background: "white",
        padding: "1rem 2rem",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 100
      }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem"
        }}>
          <img 
            src="https://cdn-icons-png.flaticon.com/512/1580/1580631.png" 
            alt="Currency Logo" 
            style={{ 
              width: "40px", 
              height: "40px" 
            }}
          />
          <h1 style={{
            margin: 0,
            fontSize: "1.5rem",
            fontWeight: "700",
            background: "linear-gradient(90deg, #6366f1 0%, #8b5cf6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>
            Currency Converter
          </h1>
        </div>

        <ul style={{
          display: "flex",
          listStyle: "none",
          gap: "1.5rem",
          margin: 0,
          padding: 0
        }}>
          {[
            { name: "home", label: "Home" },
            { name: "about", label: "About" },
            { name: "contact", label: "Contact" }
          ].map((item) => (
            <li key={item.name}>
              <button
                onClick={() => handleNavigation(item.name)}
                style={{
                  padding: "0.75rem 1.5rem",
                  fontSize: "1rem",
                  fontWeight: "600",
                  color: activeButton === item.name ? "#6366f1" : "#64748b",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  position: "relative",
                  transition: "all 0.3s ease",
                  ":hover": {
                    color: "#6366f1"
                  },
                  "::after": {
                    content: '""',
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: activeButton === item.name ? "100%" : "0",
                    height: "3px",
                    background: "#6366f1",
                    transition: "width 0.3s ease"
                  },
                  ":hover::after": {
                    width: "100%"
                  }
                }}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <main className="main-content" style={{
        minHeight: "calc(100vh - 120px)",
        padding: "2rem"
      }}>
        {renderPage()}
      </main>

      <footer className="footer" style={{
        background: "#1e293b",
        color: "white",
        padding: "1.5rem",
        textAlign: "center",
        fontSize: "0.875rem"
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <p style={{ margin: 0 }}>
            © 2025 Currency Converter App. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "1rem" }}>
            <a href="#" style={{ color: "white", textDecoration: "none" }}>Privacy Policy</a>
            <a href="#" style={{ color: "white", textDecoration: "none" }}>Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;