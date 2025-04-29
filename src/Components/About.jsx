import React from "react";

const About = () => {
  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#f8fafc",
      padding: "4rem 2rem",
      fontFamily: "'Inter', sans-serif"
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        background: "white",
        padding: "3rem",
        borderRadius: "16px",
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
        position: "relative",
        overflow: "hidden"
      }}>
        {/* Decorative elements */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "8px",
          background: "linear-gradient(90deg, #6366f1 0%, #8b5cf6 100%)"
        }}></div>
        
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "3rem"
        }}>
          <img 
            src="https://img.freepik.com/free-vector/currency-transfer-abstract-concept-illustration_335657-2220.jpg" 
            alt="Currency Exchange" 
            style={{
              width: "180px",
              height: "180px",
              objectFit: "contain",
              marginBottom: "1.5rem"
            }}
          />
          <h1 style={{
            fontSize: "2.5rem",
            fontWeight: "700",
            color: "#1e293b",
            margin: "0",
            textAlign: "center",
            background: "linear-gradient(90deg, #6366f1 0%, #8b5cf6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>
            About Our Currency Converter
          </h1>
          <p style={{
            fontSize: "1.25rem",
            color: "#64748b",
            textAlign: "center",
            maxWidth: "700px",
            marginTop: "1rem",
            lineHeight: "1.6"
          }}>
            Your trusted tool for accurate, real-time currency conversions with historical data and trend analysis
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2rem",
          marginBottom: "3rem"
        }}>
          <div>
            <h2 style={{
              fontSize: "1.75rem",
              fontWeight: "600",
              color: "#1e293b",
              marginBottom: "1.5rem",
              position: "relative",
              paddingBottom: "0.5rem"
            }}>
              <span style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "60px",
                height: "4px",
                background: "linear-gradient(90deg, #6366f1 0%, #8b5cf6 100%)",
                borderRadius: "2px"
              }}></span>
              What We Offer
            </h2>
            <p style={{
              fontSize: "1.1rem",
              lineHeight: "1.8",
              color: "#475569",
              marginBottom: "1.5rem"
            }}>
              Our currency converter provides instant, accurate conversions between 160+ global currencies using live exchange rates from trusted financial sources. Beyond simple conversions, we offer historical data, trend visualization, and customizable features for both casual users and financial professionals.
            </p>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginTop: "2rem"
            }}>
              <div style={{
                width: "60px",
                height: "60px",
                borderRadius: "12px",
                background: "rgba(99, 102, 241, 0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                <span style={{ fontSize: "1.5rem" }}>💱</span>
              </div>
              <div>
                <h3 style={{ margin: "0 0 0.25rem 0", color: "#1e293b" }}>160+ Currencies</h3>
                <p style={{ margin: 0, color: "#64748b" }}>Including cryptocurrencies and precious metals</p>
              </div>
            </div>
          </div>
          
          <div>
            <img 
              src="https://img.freepik.com/free-vector/hand-drawn-currency-exchange-illustration_23-2149624786.jpg" 
              alt="Currency Exchange" 
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "12px",
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
              }}
            />
          </div>
        </div>

        <div style={{ marginBottom: "3rem" }}>
          <h2 style={{
            fontSize: "1.75rem",
            fontWeight: "600",
            color: "#1e293b",
            marginBottom: "1.5rem",
            textAlign: "center"
          }}>
            Key Advantages
          </h2>
          
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem"
          }}>
            {[
              {
                icon: "✈️",
                title: "Travel Planning",
                description: "Calculate expenses accurately before international trips and manage your travel budget effectively."
              },
              {
                icon: "🛒",
                title: "E-commerce",
                description: "View product prices in your local currency when shopping from international websites."
              },
              {
                icon: "📊",
                title: "Business Intelligence",
                description: "Make informed financial decisions with real-time exchange rates and historical trends."
              },
              {
                icon: "📱",
                title: "User-Friendly Interface",
                description: "Intuitive design that makes currency conversion quick and effortless for everyone."
              },
              {
                icon: "⏱️",
                title: "Real-Time Data",
                description: "Get the most current exchange rates updated every minute for accurate conversions."
              },
              {
                icon: "📈",
                title: "Market Insights",
                description: "Visualize currency trends with our interactive charts and historical data."
              }
            ].map((feature, index) => (
              <div key={index} style={{
                background: "white",
                borderRadius: "12px",
                padding: "1.5rem",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
                border: "1px solid #e2e8f0",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                ":hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                }
              }}>
                <div style={{
                  fontSize: "2rem",
                  marginBottom: "1rem"
                }}>
                  {feature.icon}
                </div>
                <h3 style={{
                  fontSize: "1.25rem",
                  fontWeight: "600",
                  color: "#1e293b",
                  margin: "0 0 0.5rem 0"
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  color: "#64748b",
                  margin: 0,
                  lineHeight: "1.6"
                }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div style={{
          background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
          borderRadius: "16px",
          padding: "2.5rem",
          color: "white",
          textAlign: "center"
        }}>
          <h2 style={{
            fontSize: "1.75rem",
            fontWeight: "700",
            margin: "0 0 1rem 0"
          }}>
            Ready to Convert Currencies?
          </h2>
          <p style={{
            fontSize: "1.1rem",
            margin: "0 auto 1.5rem auto",
            maxWidth: "700px",
            opacity: 0.9,
            lineHeight: "1.6"
          }}>
            Experience the most accurate and user-friendly currency conversion tool available today.
          </p>
          <button style={{
            background: "white",
            color: "#6366f1",
            border: "none",
            padding: "0.75rem 2rem",
            fontSize: "1rem",
            fontWeight: "600",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "transform 0.2s ease",
            ":hover": {
              transform: "scale(1.05)"
            }
          }}>
            Try Our Converter Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;