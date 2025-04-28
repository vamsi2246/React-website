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
      <h1 className="text-3xl font-bold mb-6">Currency Converter</h1>
      <div className="bg-white shadow-lg rounded-lg p-6 w-80">
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