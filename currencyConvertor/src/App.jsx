import { useState, useEffect } from 'react';
import './App.css';
import {Input} from './Components';
import UseCurrencyInfo from './Hooks/UseCurrencyInfo';

function App() {
    const [amount, setAmount] = useState(0);
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("inr");
    const [convertedAmount, setConvertedAmount] = useState(0);

    const { rate, error } = UseCurrencyInfo(from, to);

    useEffect(() => {
        if (rate !== null) {
            setConvertedAmount(amount * rate);
        }
    }, [amount, rate]);

    const swap = () => {
        setFrom(to);
        setTo(from);
        setAmount(convertedAmount);
    };

    const convert = () => {
        if (rate !== null) {
            setConvertedAmount(amount * rate);
        }
    };

    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert();
                        }}
                    >
                        <div className="w-full mb-1">
                            <Input
                                label="From"
                                amount={amount}
                                currencyOptions={[from, to]}
                                onCurrencyChange={setFrom}
                                selectCurrency={from}
                                onAmountChange={setAmount}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <Input
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={[from, to]}
                                onCurrencyChange={setTo}
                                selectCurrency={to}
                                amountDisable
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                    {error && <div className="text-red-500 mt-2">{error}</div>}
                </div>
            </div>
        </div>
    );
}

export default App;
