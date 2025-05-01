import React from 'react';

const Contact = () => {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #6ee7b7 0%, #3b82f6 100%)",
      padding: "4rem 2rem",
      fontFamily: "'Inter', sans-serif"
    }}>
      <div style={{
        maxWidth: "1000px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "3rem",
        alignItems: "center"
      }}>
        {/* Left Column - Contact Form */}
        <div style={{
          background: "linear-gradient(135deg, #ef4444 0%, #ec4899 100%)",
          padding: "3rem",
          borderRadius: "16px",
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
          position: "relative",
          overflow: "hidden"
        }}>
          {/* Decorative element */}
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "8px",
            background: "linear-gradient(90deg, #6366f1 0%, #8b5cf6 100%)"
          }}></div>

          <h2 style={{
            fontSize: "2rem",
            fontWeight: "700",
            color: "#1e293b",
            marginBottom: "1.5rem",
            textAlign: "center",
            background: "linear-gradient(90deg, #6366f1 0%, #8b5cf6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>
            Contact Our Team
          </h2>

          <p style={{
            textAlign: "center",
            fontSize: "1.1rem",
            color: "#64748b",
            marginBottom: "2rem",
            lineHeight: "1.6"
          }}>
            Have questions about our Currency Converter? Our support team is ready to help you with any inquiries.
          </p>

          <form style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div>
              <label style={{
                display: "block",
                marginBottom: "0.5rem",
                fontSize: "0.875rem",
                fontWeight: "500",
                color: "#475569"
              }}>Your Name</label>
              <input 
                type="text" 
                placeholder="Enter your name" 
                required 
                style={{
                  padding: "0.875rem",
                  fontSize: "1rem",
                  borderRadius: "8px",
                  border: "1px solid #e2e8f0",
                  width: "100%",
                  boxSizing: "border-box",
                  transition: "border-color 0.2s",
                  ":focus": {
                    outline: "none",
                    borderColor: "#6366f1",
                    boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.1)"
                  }
                }}
              />
            </div>

            <div>
              <label style={{
                display: "block",
                marginBottom: "0.5rem",
                fontSize: "0.875rem",
                fontWeight: "500",
                color: "#475569"
              }}>Email Address</label>
              <input 
                type="email" 
                placeholder="Enter your email" 
                required 
                style={{
                  padding: "0.875rem",
                  fontSize: "1rem",
                  borderRadius: "8px",
                  border: "1px solid #e2e8f0",
                  width: "100%",
                  boxSizing: "border-box",
                  transition: "border-color 0.2s",
                  ":focus": {
                    outline: "none",
                    borderColor: "#6366f1",
                    boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.1)"
                  }
                }}
              />
            </div>

            <div>
              <label style={{
                display: "block",
                marginBottom: "0.5rem",
                fontSize: "0.875rem",
                fontWeight: "500",
                color: "#475569"
              }}>Your Message</label>
              <textarea 
                placeholder="How can we help you?" 
                rows="5" 
                required 
                style={{
                  padding: "0.875rem",
                  fontSize: "1rem",
                  borderRadius: "8px",
                  border: "1px solid #e2e8f0",
                  width: "100%",
                  boxSizing: "border-box",
                  transition: "border-color 0.2s",
                  resize: "vertical",
                  minHeight: "120px",
                  ":focus": {
                    outline: "none",
                    borderColor: "#6366f1",
                    boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.1)"
                  }
                }}
              ></textarea>
            </div>

            <button 
              type="submit" 
              style={{
                padding: "0.875rem",
                background: "linear-gradient(90deg, #6366f1 0%, #8b5cf6 100%)",
                color: "white",
                fontSize: "1rem",
                fontWeight: "600",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                ":hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 4px 6px -1px rgba(99, 102, 241, 0.3)"
                }
              }}
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Column - Contact Info */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem"
        }}>
          <div style={{
            background: "linear-gradient(135deg, #3b82f6 0%, #a3e635 100%)",
            padding: "2rem",
            borderRadius: "16px",
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
            textAlign: "center"
          }}>
            <img 
              src="https://img.freepik.com/free-vector/customer-support-illustration_23-2148889160.jpg" 
              alt="Customer Support" 
              style={{
                width: "100%",
                maxWidth: "300px",
                margin: "0 auto 1.5rem auto",
                borderRadius: "12px"
              }}
            />
            
            <h3 style={{
              fontSize: "1.5rem",
              fontWeight: "600",
              color: "#1e293b",
              marginBottom: "1rem"
            }}>
              We're Here to Help
            </h3>
            
            <p style={{
              color: "#64748b",
              lineHeight: "1.6",
              marginBottom: "1.5rem"
            }}>
              Our dedicated support team is available to assist you with any questions about currency conversion, exchange rates, or feature requests.
            </p>
            
            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              textAlign: "left",
              padding: "0 1rem"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  background: "rgba(99, 102, 241, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0
                }}>
                  <span style={{ fontSize: "1.25rem" }}>✉️</span>
                </div>
                <div>
                  <div style={{ fontSize: "0.875rem", color: "#64748b" }}>Email</div>
                  <div style={{ fontWeight: "500", color: "#1e293b" }}>support@currencyconvertor.com</div>
                </div>
              </div>
              
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  background: "rgba(99, 102, 241, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0
                }}>
                  <span style={{ fontSize: "1.25rem" }}>📞</span>
                </div>
                <div>
                  <div style={{ fontSize: "0.875rem", color: "#64748b" }}>Phone</div>
                  <div style={{ fontWeight: "500", color: "#1e293b" }}>+91 98765 43210</div>
                </div>
              </div>
              
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  background: "rgba(99, 102, 241, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0
                }}>
                  <span style={{ fontSize: "1.25rem" }}>📍</span>
                </div>
                <div>
                  <div style={{ fontSize: "0.875rem", color: "#64748b" }}>Location</div>
                  <div style={{ fontWeight: "500", color: "#1e293b" }}>Anantapur, Andhra Pradesh, India</div>
                </div>
              </div>
            </div>
          </div>
          
          <div style={{
            background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
            padding: "2rem",
            borderRadius: "16px",
            color: "white",
            textAlign: "center"
          }}>
            <h3 style={{
              fontSize: "1.5rem",
              fontWeight: "600",
              marginBottom: "1rem"
            }}>
              Currency Conversion Support
            </h3>
            <p style={{
              opacity: 0.9,
              lineHeight: "1.6",
              marginBottom: "1.5rem"
            }}>
              Need help with complex currency conversions or historical rate analysis? Our financial experts are available for consultation.
            </p>
            <button style={{
              background: "white",
              color: "#6366f1",
              border: "none",
              padding: "0.75rem 1.5rem",
              fontSize: "1rem",
              fontWeight: "600",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "transform 0.2s ease",
              ":hover": {
                transform: "scale(1.05)"
              }
            }}>
              Request Expert Help
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;