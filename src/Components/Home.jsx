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

const currencies = [
  { code: "USD", name: "US Dollar", flag: "🇺🇸", country: "United States" },
  { code: "EUR", name: "Euro", flag: "🇪🇺", country: "European Union" },
  { code: "INR", name: "Indian Rupee", flag: "🇮🇳", country: "India" },
  { code: "JPY", name: "Japanese Yen", flag: "🇯🇵", country: "Japan" },
  { code: "GBP", name: "British Pound", flag: "🇬🇧", country: "United Kingdom" },
  { code: "AUD", name: "Australian Dollar", flag: "🇦🇺", country: "Australia" },
  { code: "CAD", name: "Canadian Dollar", flag: "🇨🇦", country: "Canada" },
  { code: "CHF", name: "Swiss Franc", flag: "🇨🇭", country: "Switzerland" },
  { code: "CNY", name: "Chinese Yuan", flag: "🇨🇳", country: "China" },
  { code: "SGD", name: "Singapore Dollar", flag: "🇸🇬", country: "Singapore" },
  { code: "ZAR", name: "South African Rand", flag: "🇿🇦", country: "South Africa" },
  { code: "BRL", name: "Brazilian Real", flag: "🇧🇷", country: "Brazil" },
];

const Home = ({ theme, setTheme }) => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [rates, setRates] = useState({});
  const [graphData, setGraphData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

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

  const convertCurrency = (amt, from, to, rates) => {
    if (!rates[from] || !rates[to] || amt <= 0) {
      setConvertedAmount(null);
      return;
    }
    const usdAmount = amt / rates[from];
    const result = usdAmount * rates[to];
    setConvertedAmount(result.toFixed(2));
  };

  useEffect(() => {
    if (Object.keys(rates).length > 0) {
      convertCurrency(amount, fromCurrency, toCurrency, rates);
    }
  }, [fromCurrency, toCurrency, rates]);

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

  const handleSwapCurrencies = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
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
        position: "top",
        labels: {
          font: {
            size: 14,
            family: "'Inter', sans-serif",
          },
        },
      },
      tooltip: {
        backgroundColor: "#1e293b",
        titleFont: {
          size: 16,
          family: "'Inter', sans-serif",
        },
        bodyFont: {
          size: 14,
          family: "'Inter', sans-serif",
        },
        padding: 12,
        cornerRadius: 8,
        displayColors: false,
        callbacks: {
          label: function (context) {
            return `${context.parsed.y.toFixed(2)} ${toCurrency}`;
          },
        },
      },
    },
    scales: {
      y: {
        grid: {
          color: "rgba(0, 0, 0, 0.05)",
        },
        ticks: {
          font: {
            family: "'Inter', sans-serif",
          },
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            family: "'Inter', sans-serif",
          },
        },
      },
    },
    maintainAspectRatio: false,
  };

  const filteredCurrencies = search
    ? currencies.filter((cur) =>
        cur.country.toLowerCase().includes(search.toLowerCase())
      ).slice(0, 8)
    : currencies.slice(0, 8);

  return (
    <div
      className="home-container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem 5%",
        minHeight: "calc(100vh - 120px)",
        position: "relative",
      }}
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          opacity: 0.5,
        }}
      >
        <source
          src="https://media.istockphoto.com/id/472837345/ru/%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE/%D0%B0%D0%BC%D0%B5%D1%80%D0%B8%D0%BA%D0%B0%D0%BD%D1%81%D0%BA%D0%B0%D1%8F-%D0%B2%D0%B0%D0%BB%D1%8E%D1%82%D0%B0-%D0%B2%D1%8B%D0%B1%D0%BE%D1%80%D0%BE%D1%87%D0%BD%D0%B0%D1%8F-%D1%84%D0%BE%D0%BA%D1%83%D1%81%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0.mp4?s=mp4-640x640-is&k=20&c=BzNZgZe7TlAf6t1E5HMcnzxAW6GPATcBk27qtBbdNpM="
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      {/* Overlay for subtle shadow/vibrance */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(34, 34, 64, 0.15)",
          zIndex: 1,
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "3rem",
          width: "100%",
          justifyContent: "center",
        }}
      >
        {/* Converter Card */}
        <div
          className="converter"
          style={{
            flex: "1",
            maxWidth: "500px",
            transition: "transform 0.3s, box-shadow 0.3s",
            cursor: "pointer",
            background: "linear-gradient(135deg, #e0e7ff 0%, #f3e8ff 100%)",
            color: "#1e293b",
            padding: "2rem",
            borderRadius: "16px",
            boxShadow: "0 4px 12px rgba(99, 102, 241, 0.08)",
            position: "relative",
            overflow: "hidden",
            zIndex: 2,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-8px) scale(1.03)";
            e.currentTarget.style.boxShadow =
              "0 8px 32px 0 rgba(99,102,241,0.25)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "none";
            e.currentTarget.style.boxShadow =
              "0 4px 12px rgba(99, 102, 241, 0.08)";
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(255,255,255,0.10)",
              borderRadius: "20px",
              pointerEvents: "none",
            }}
          ></div>

          <h2
            style={{
              marginBottom: "1.5rem",
              fontSize: "1.75rem",
              fontWeight: "700",
              color: "#1e293b",
              textAlign: "center",
            }}
          >
            Currency Converter
          </h2>

          {/* Currency Input Section */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              marginBottom: "1.5rem",
            }}
          >
            {/* Amount Input */}
            <div style={{ flex: 1 }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  color: "#64748b",
                }}
              >
                Amount
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => {
                  const value = e.target.value;
                  const numValue = Number(value);
                  if (value === "" || isNaN(numValue)) {
                    setAmount(0);
                  } else {
                    setAmount(numValue);
                    convertCurrency(numValue, fromCurrency, toCurrency, rates);
                  }
                }}
                min="0"
                step="0.01"
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  fontSize: "1rem",
                  border: "2px solid #000",
                  borderRadius: "8px",
                  outline: "none",
                  background: "white",
                  boxSizing: "border-box",
                  transition: "border-color 0.2s",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#6366f1")}
                onBlur={(e) => (e.target.style.borderColor = "#000")}
              />
            </div>

            {/* Currency Selectors */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                position: "relative",
                alignItems: "center",
              }}
            >
              {/* From Currency */}
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <div style={{ flex: 1 }}>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "0.5rem",
                      fontSize: "0.875rem",
                      fontWeight: "500",
                      color: "#64748b",
                    }}
                  >
                    From
                  </label>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      border: "2px solid #000",
                      borderRadius: "8px",
                      padding: "0.5rem",
                      transition: "border-color 0.2s",
                    }}
                  >
                    <img
                      src={`https://flagcdn.com/48x36/${fromCurrency
                        .slice(0, 2)
                        .toLowerCase()}.png`}
                      alt={fromCurrency}
                      style={{
                        width: "24px",
                        height: "18px",
                        objectFit: "cover",
                      }}
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
                        cursor: "pointer",
                      }}
                    >
                      {currencies.map((currency) => (
                        <option key={currency.code} value={currency.code}>
                          {currency.code} - {currency.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Swap Button */}
                <button
                  onClick={handleSwapCurrencies}
                  style={{
                    background: "#ffffff",
                    border: "1px solid #e2e8f0",
                    borderRadius: "50%",
                    width: "10px",
                    height: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                    transition: "all 0.2s",
                    marginTop: "1.5rem",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#f1f5f9";
                    e.currentTarget.style.transform = "rotate(180deg)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#ffffff";
                    e.currentTarget.style.transform = "rotate(0deg)";
                  }}
                >
                  <span style={{ fontSize: "1.25rem" }}>⇄</span>
                </button>

                {/* To Currency */}
                <div style={{ flex: 1 }}>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "0.5rem",
                      fontSize: "0.875rem",
                      fontWeight: "500",
                      color: "#64748b",
                    }}
                  >
                    To
                  </label>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      border: "2px solid #000",
                      borderRadius: "8px",
                      padding: "0.5rem",
                      transition: "border-color 0.2s",
                    }}
                  >
                    <img
                      src={`https://flagcdn.com/48x36/${toCurrency
                        .slice(0, 2)
                        .toLowerCase()}.png`}
                      alt={toCurrency}
                      style={{
                        width: "24px",
                        height: "18px",
                        objectFit: "cover",
                      }}
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
                        cursor: "pointer",
                      }}
                    >
                      {currencies.map((currency) => (
                        <option key={currency.code} value={currency.code}>
                          {currency.code} - {currency.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Result Section */}
          <div
            style={{
              marginTop: "1.5rem",
              padding: "1.5rem",
              background: "#f8fafc",
              borderRadius: "12px",
              textAlign: "center",
            }}
          >
            {isLoading ? (
              <div style={{ color: "#64748b" }}>Loading exchange rates...</div>
            ) : convertedAmount ? (
              <>
                <div
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "600",
                    color: "#1e293b",
                    marginBottom: "0.5rem",
                  }}
                >
                  {amount} {fromCurrency} = {convertedAmount} {toCurrency}
                </div>
                <div
                  style={{
                    fontSize: "0.875rem",
                    color: "#64748b",
                  }}
                >
                  1 {fromCurrency} = {(convertedAmount / amount).toFixed(6)}{" "}
                  {toCurrency}
                </div>
              </>
            ) : (
              <div style={{ color: "#64748b" }}>
                {amount <= 0 ? "Please enter a valid amount." : "Unable to fetch exchange rates."}
              </div>
            )}
          </div>
        </div>

        {/* Graph Card */}
        <div
          className="graph"
          style={{
            flex: "1",
            maxWidth: "600px",
            transition: "transform 0.3s, box-shadow 0.3s",
            cursor: "pointer",
            background: "linear-gradient(135deg, #ffe7d1 0%, #ffe4ec 100%)",
            color: "#1e293b",
            padding: "2rem",
            borderRadius: "16px",
            boxShadow: "0 4px 12px rgba(236, 72, 153, 0.08)",
            position: "relative",
            overflow: "hidden",
            zIndex: 2,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-8px) scale(1.03)";
            e.currentTarget.style.boxShadow =
              "0 8px 32px 0 rgba(236,72,153,0.25)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "none";
            e.currentTarget.style.boxShadow =
              "0 4px 12px rgba(236, 72, 153, 0.08)";
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(255,255,255,0.10)",
              borderRadius: "20px",
              pointerEvents: "none",
            }}
          ></div>

          <h2
            style={{
              marginBottom: "1.5rem",
              fontSize: "1.75rem",
              fontWeight: "700",
              color: "#1e293b",
              textAlign: "center",
            }}
          >
            Exchange Rate Trend
          </h2>

          <div style={{ height: "350px" }}>
            <Line data={currencyGraphData} options={options} />
          </div>

          <div
            style={{
              marginTop: "1rem",
              fontSize: "0.875rem",
              color: "#64748b",
              textAlign: "center",
            }}
          >
            Last 30 days trend for {fromCurrency}/{toCurrency}
          </div>
        </div>
      </div>

      {/* Find other currencies section at the bottom */}
      <div
        style={{
          marginTop: "3rem",
          background: "linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)",
          borderRadius: "20px",
          boxShadow: "0 8px 32px 0 rgba(99,102,241,0.15)",
          padding: "2.5rem",
          maxWidth: "900px",
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          border: "2px solid #6366f1",
          transition: "box-shadow 0.3s, transform 0.3s",
          position: "relative",
          zIndex: 2,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow =
            "0 16px 48px 0 rgba(99,102,241,0.25)";
          e.currentTarget.style.transform = "translateY(-6px) scale(1.02)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow =
            "0 8px 32px 0 rgba(99,102,241,0.15)";
          e.currentTarget.style.transform = "none";
        }}
      >
        <h2
          style={{
            fontWeight: 700,
            fontSize: "2rem",
            marginBottom: "1.5rem",
            color: "#3730a3",
          }}
        >
          Find other currencies
        </h2>
        <input
          type="text"
          placeholder="Search by country name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "100%",
            padding: "0.75rem 1rem",
            fontSize: "1rem",
            borderRadius: "8px",
            border: "1.5px solid #6366f1",
            marginBottom: "2rem",
          }}
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {filteredCurrencies.map((cur) => (
            <div
              key={cur.code}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
              }}
            >
              <span style={{ fontSize: "1.5rem" }}>{cur.flag}</span>
              <span style={{ fontWeight: 600 }}>{cur.code}</span>
              <span
                style={{
                  marginLeft: "0.5rem",
                  color: "#2563eb",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                {cur.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;