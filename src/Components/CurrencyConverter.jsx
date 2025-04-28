import React, { useState, useEffect } from 'react';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');
  const [rates, setRates] = useState({});
  const [result, setResult] = useState(0);

  useEffect(() => {
    // Fetch exchange rates once when component loads
    fetch('https://api.exchangerate-api.com/v4/latest/USD')
      .then(response => response.json())
      .then(data => setRates(data.rates))
      .catch(error => console.error('Error fetching rates:', error));
  }, []);

  useEffect(() => {
    if (rates) {
      convert();
    }
  }, [amount, fromCurrency, toCurrency, rates]);

  const convert = () => {
    if (!rates[fromCurrency] || !rates[toCurrency]) return;
    const usdAmount = amount / rates[fromCurrency];
    const converted = usdAmount * rates[toCurrency];
    setResult(converted.toFixed(2));
  };

  return (
    <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">

      <nav className="w-full bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-xl font-bold">Currency Converter</h1>
      <ul className="flex gap-4">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
      </nav>

      
      <div className="bg-white shadow-lg rounded-lg p-6 w-80 mt-6">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />
        <div className="flex gap-4 mb-4">
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="flex-1 p-2 border rounded"
          >
            {Object.keys(rates).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="flex-1 p-2 border rounded"
          >
            {Object.keys(rates).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
        <div className="text-center text-xl font-semibold">
          {amount} {fromCurrency} = {result} {toCurrency}
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;