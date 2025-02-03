import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Home = () => {
  const [set, setSet] = useState('striver_a2z');
  const [selectedTime, setSelectedTime] = useState(60);
  const navigate = useNavigate();

  const handleGenerateContest = () => {
    try {
      navigate('/contest', {
        state: {
          selectedSet: set,
          selectedTime,
        },
      });
    } catch (error) {
      console.error('Error generating contest:', error);
    }
  };

  return (
    <div className="App">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">Contest817</h1>

      <div className="card">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Select Question Set</label>
          <select
            value={set}
            onChange={(e) => setSet(e.target.value)}
            className="select-dropdown"
          >
            <option value="striver_a2z">Striver A2Z</option>
            <option value="neetcode_450">Neetcode 450</option>
            {/* <option value="set_75">Striver 75 </option>
            <option value="set_150">Striver 150</option> */}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Select Timer</label>
          <select
            value={selectedTime}
            onChange={(e) => setSelectedTime(parseInt(e.target.value))}
            className="select-dropdown"
          >
            <option defaultChecked value={60}>60 Minutes</option>
            <option value={30}>30 Minutes</option>
          </select>
        </div>

        <button
          onClick={handleGenerateContest}
          className="generate-button"
        >
          Generate Contest
        </button>
      </div>
    </div>
  );
};

export default Home;
