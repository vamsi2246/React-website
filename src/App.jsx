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
        background: "#213448",
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
            background: "linear-gradient(90deg, #fff 0%, #e0e7ff 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>
            Currency Converter
          </h1>
        </div>

        {/* Nav links aligned to the right */}
        <ul style={{
          display: "flex",
          listStyle: "none",
          gap: "1.5rem",
          margin: 0,
          padding: 0,
          justifyContent: "flex-end",
          alignItems: "center"
        }}>
          {[
            { name: "home", label: "Home", gradient: "linear-gradient(90deg, #6366f1 0%, #60a5fa 100%)" },      // Blue to light blue
            { name: "about", label: "About", gradient: "linear-gradient(90deg, #f59e42 0%, #ec4899 100%)" },    // Orange to pink
            { name: "contact", label: "Contact", gradient: "linear-gradient(90deg, #14b8a6 0%, #6ee7b7 100%)" } // Teal to light green
          ].map((item) => (
            <li key={item.name}>
              <button
                onClick={() => handleNavigation(item.name)}
                style={{
                  padding: "0.75rem 1.5rem",
                  fontSize: "1rem",
                  fontWeight: "600",
                  color: "#fff",
                  background: activeButton === item.name
                    ? item.gradient
                    : "rgba(255,255,255,0.08)",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  position: "relative",
                  boxShadow: activeButton === item.name
                    ? "0 2px 8px rgba(99,102,241,0.15)"
                    : "none",
                  transition: "all 0.3s ease",
                  outline: activeButton === item.name ? "2px solid #fff" : "none"
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