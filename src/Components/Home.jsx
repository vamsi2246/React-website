import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import "../index.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const Home = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [rates, setRates] = useState({});
  const [graphData, setGraphData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://api.exchangerate-api.com/v4/latest/USD")
      .then((res) => res.json())
      .then((data) => {
        setRates(data.rates);
        convertCurrency(amount, fromCurrency, toCurrency, data.rates);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    if (Object.keys(rates).length > 0) {
      convertCurrency(amount, fromCurrency, toCurrency, rates);
    }
  }, [amount, fromCurrency, toCurrency, rates]);

  useEffect(() => {
    if (!fromCurrency || !toCurrency) return;
    const fetchTrendData = async () => {
      const dummyTrend = [82.1, 83.4, 84.0, 83.7, 84.5, 84.2, 84.7];
      const updatedTrend = dummyTrend.map(
        (val) => val * (rates[toCurrency] / rates[fromCurrency])
      );
      setGraphData(updatedTrend);
    };
    fetchTrendData();
  }, [fromCurrency, toCurrency, rates]);

  const convertCurrency = (amt, from, to, rates) => {
    if (!rates[from] || !rates[to]) return;
    const usdAmount = amt / rates[from];
    const result = usdAmount * rates[to];
    setConvertedAmount(result.toFixed(2));
  };

  const handleSwapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const currencyGraphData = {
    labels: ["Apr 1", "Apr 5", "Apr 10", "Apr 15", "Apr 20", "Apr 25", "Apr 29"],
    datasets: [
      {
        label: `${fromCurrency} to ${toCurrency} Exchange Rate`,
        data: graphData,
        borderColor: "#6366f1",
        backgroundColor: "rgba(99, 102, 241, 0.1)",
        borderWidth: 3,
        pointBackgroundColor: "#6366f1",
        pointRadius: 5,
        pointHoverRadius: 7,
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 14,
            family: "'Inter', sans-serif"
          }
        }
      },
      tooltip: {
        backgroundColor: '#1e293b',
        titleFont: {
          size: 16,
          family: "'Inter', sans-serif"
        },
        bodyFont: {
          size: 14,
          family: "'Inter', sans-serif"
        },
        padding: 12,
        cornerRadius: 8,
        displayColors: false,
        callbacks: {
          label: function(context) {
            return `${context.parsed.y.toFixed(2)} ${toCurrency}`;
          }
        }
      }
    },
    scales: {
      y: {
        grid: {
          color: 'rgba(0, 0, 0, 0.05)'
        },
        ticks: {
          font: {
            family: "'Inter', sans-serif"
          }
        }
      },
      x: {
        grid: {
          display: false
        },
        ticks: {
          font: {
            family: "'Inter', sans-serif"
          }
        }
      }
    },
    maintainAspectRatio: false
  };

  return (
    <div className="home-container" style={{ 
      display: "flex", 
      justifyContent: "center", 
      gap: "3rem", 
      alignItems: "flex-start", 
      padding: "2rem 5%",
      minHeight: "calc(100vh - 120px)",
      backgroundColor: "#f8fafc"
    }}>
      {/* Converter Card */}
      <div className="converter" style={{ 
        flex: "1", 
        maxWidth: "500px", 
        background: "#ffffff", 
        padding: "2rem", 
        borderRadius: "16px", 
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        transition: "transform 0.3s ease",
        position: "relative",
        overflow: "hidden"
      }}>
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "8px",
          background: "linear-gradient(90deg, #6366f1 0%, #8b5cf6 100%)"
        }}></div>
        
        <h2 style={{ 
          marginBottom: "1.5rem", 
          fontSize: "1.75rem", 
          fontWeight: "700",
          color: "#1e293b",
          textAlign: "center"
        }}>
          Currency Converter
        </h2>

        {/* Currency Input Section */}
        <div style={{ 
          display: "flex", 
          flexDirection: "column", 
          gap: "1.5rem",
          marginBottom: "1.5rem"
        }}>
          {/* From Currency */}
          <div style={{ flex: 1 }}>
            <label style={{
              display: "block",
              marginBottom: "0.5rem",
              fontSize: "0.875rem",
              fontWeight: "500",
              color: "#64748b"
            }}>Amount</label>
            <div style={{ 
              display: "flex", 
              alignItems: "center", 
              gap: "0.5rem",
              border: "1px solid #e2e8f0",
              borderRadius: "8px",
              padding: "0.5rem",
              transition: "border-color 0.2s",
              ":hover": {
                borderColor: "#94a3b8"
              }
            }}>
              <input 
                type="number" 
                value={amount} 
                onChange={(e) => setAmount(e.target.value)} 
                min="1" 
                style={{ 
                  flex: 1,
                  padding: "0.75rem",
                  fontSize: "1rem",
                  border: "none",
                  outline: "none",
                  background: "transparent"
                }} 
              />
            </div>
          </div>

          {/* Currency Selectors */}
          <div style={{ 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center", 
            gap: "1rem",
            position: "relative"
          }}>
            {/* From Currency */}
            <div style={{ flex: 1 }}>
              <label style={{
                display: "block",
                marginBottom: "0.5rem",
                fontSize: "0.875rem",
                fontWeight: "500",
                color: "#64748b"
              }}>From</label>
              <div style={{ 
                display: "flex", 
                alignItems: "center", 
                gap: "0.5rem",
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
                padding: "0.5rem",
                transition: "border-color 0.2s",
                ":hover": {
                  borderColor: "#94a3b8"
                }
              }}>
                <img 
                  src={`https://flagcdn.com/48x36/${fromCurrency.slice(0, 2).toLowerCase()}.png`} 
                  alt={fromCurrency} 
                  style={{ width: "24px", height: "18px", objectFit: "cover" }}
                />
                <select 
                  value={fromCurrency} 
                  onChange={(e) => setFromCurrency(e.target.value)} 
                  style={{ 
                    flex: 1,
                    padding: "0.5rem",
                    fontSize: "1rem",
                    border: "none",
                    outline: "none",
                    background: "transparent",
                    cursor: "pointer"
                  }}
                >
                  {Object.keys(rates).map((code) => (
                    <option key={code} value={code}>{code}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Swap Button */}
            <button 
              onClick={handleSwapCurrencies}
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                transition: "all 0.2s",
                ":hover": {
                  background: "#f1f5f9",
                  transform: "translate(-50%, -50%) rotate(180deg)"
                }
              }}
            >
              <span style={{ fontSize: "1.25rem" }}>⇄</span>
            </button>

            {/* To Currency */}
            <div style={{ flex: 1 }}>
              <label style={{
                display: "block",
                marginBottom: "0.5rem",
                fontSize: "0.875rem",
                fontWeight: "500",
                color: "#64748b"
              }}>To</label>
              <div style={{ 
                display: "flex", 
                alignItems: "center", 
                gap: "0.5rem",
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
                padding: "0.5rem",
                transition: "border-color 0.2s",
                ":hover": {
                  borderColor: "#94a3b8"
                }
              }}>
                <img 
                  src={`https://flagcdn.com/48x36/${toCurrency.slice(0, 2).toLowerCase()}.png`} 
                  alt={toCurrency} 
                  style={{ width: "24px", height: "18px", objectFit: "cover" }}
                />
                <select 
                  value={toCurrency} 
                  onChange={(e) => setToCurrency(e.target.value)} 
                  style={{ 
                    flex: 1,
                    padding: "0.5rem",
                    fontSize: "1rem",
                    border: "none",
                    outline: "none",
                    background: "transparent",
                    cursor: "pointer"
                  }}
                >
                  {Object.keys(rates).map((code) => (
                    <option key={code} value={code}>{code}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Result Section */}
        <div style={{ 
          marginTop: "1.5rem",
          padding: "1.5rem",
          background: "#f8fafc",
          borderRadius: "12px",
          textAlign: "center"
        }}>
          {isLoading ? (
            <div style={{ color: "#64748b" }}>Loading exchange rates...</div>
          ) : (
            <>
              <div style={{ 
                fontSize: "1.5rem",
                fontWeight: "600",
                color: "#1e293b",
                marginBottom: "0.5rem"
              }}>
                {amount} {fromCurrency} = {convertedAmount} {toCurrency}
              </div>
              <div style={{ 
                fontSize: "0.875rem",
                color: "#64748b"
              }}>
                1 {fromCurrency} = {(convertedAmount / amount).toFixed(6)} {toCurrency}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Graph Card */}
      <div className="graph" style={{ 
        flex: "1", 
        maxWidth: "600px", 
        background: "#ffffff", 
        padding: "2rem", 
        borderRadius: "16px", 
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        position: "relative",
        overflow: "hidden"
      }}>
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "8px",
          background: "linear-gradient(90deg, #8b5cf6 0%, #ec4899 100%)"
        }}></div>
        
        <h2 style={{ 
          marginBottom: "1.5rem", 
          fontSize: "1.75rem", 
          fontWeight: "700",
          color: "#1e293b",
          textAlign: "center"
        }}>
          Exchange Rate Trend
        </h2>
        
        <div style={{ height: "350px" }}>
          <Line data={currencyGraphData} options={options} />
        </div>
        
        <div style={{ 
          marginTop: "1rem",
          fontSize: "0.875rem",
          color: "#64748b",
          textAlign: "center"
        }}>
          Last 30 days trend for {fromCurrency}/{toCurrency}
        </div>
        
      </div>
      
    </div>
  );
};

export default Home;