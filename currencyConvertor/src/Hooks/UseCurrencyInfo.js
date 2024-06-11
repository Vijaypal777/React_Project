import { useState, useEffect } from "react";

function UseCurrencyInfo(baseCurrency, targetCurrency) {
    const [rate, setRate] = useState(null); // Initialize as null
    const [error, setError] = useState(null); // Error state

    useEffect(() => {
        const fetchCurrencyData = async () => {
            try {
                const response = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${baseCurrency}/${targetCurrency}.json`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setRate(result[targetCurrency]);
                setError(null);
            } catch (error) {
                console.error('Error fetching currency data:', error);
                setRate(null);
                setError(error.message);
            }
        };

        if (baseCurrency && targetCurrency) {
            fetchCurrencyData();
        }
    }, [baseCurrency, targetCurrency]);

    return { rate, error };
}

export default UseCurrencyInfo;
