import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"

const HolidayAIPage = () => {
  const [destination, setDestination] = useState("");
  const [numPeople, setNumPeople] = useState(1);
  const [kidsFriendly, setKidsFriendly] = useState(false);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const prompt = `Generate holiday recommendations for ${destination} for ${numPeople} people, ${
        kidsFriendly ? "with kids-friendly options." : ""
      } It should strictly follow the JSON format,no backticks allowed. The JSON format should be as follows:
        {
          "holiday_recommendations": {
            "destination": "${destination}",
            "budget": "Estimated budget for your trip",
            "best_time_to_visit": "Best time of the year to visit",
            "recommended_places": ["List of recommended places to visit"]
          }
        }`;

      const geminiResponse = await axios.post(
        "http://localhost:5000/generate-prompt",
        { prompt }
      );
      const geminiRecommendations = geminiResponse.data.text;

      try {
        const recommendations = JSON.parse(geminiRecommendations);
        setResponse(recommendations.holiday_recommendations);
      } catch (jsonError) {
        console.error("JSON Parsing Error:", jsonError);
        console.error("Gemini Response:", geminiRecommendations);
        alert("Error parsing JSON response from Gemini. Please try again.");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="holiday-ai-page">
      <h1>Holiday AI Recommendations</h1>

      {/* Back Button */}
      <button onClick={() => navigate("/")} style={{ marginBottom: "20px" }}>
        ⬅️ Back to Home
      </button>

      <form onSubmit={handleSubmit} className="form">
        <div>
          <label htmlFor="destination">Destination:</label>
          <input
            type="text"
            id="destination"
            placeholder="Enter Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="numPeople">Number of People:</label>
          <input
            type="number"
            id="numPeople"
            min="1"
            value={numPeople}
            onChange={(e) => setNumPeople(parseInt(e.target.value, 10))}
          />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <input
              type="checkbox"
              id="kidsFriendly"
              checked={kidsFriendly}
              onChange={(e) => setKidsFriendly(e.target.checked)}
            />
            <label htmlFor="kidsFriendly">Kids Friendly</label>
          </div>
        <button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Get Recommendations"}
        </button>
      </form>

      {response && (
        <div>
          <h2>Recommendations for {response.destination}:</h2>
          <p>Budget: {response.budget}</p>
          <p>Best Time to Visit: {response.best_time_to_visit}</p>
          <h3>Recommended Places:</h3>
          <ul>
            {response.recommended_places.map((place, index) => (
              <li key={index}>{place}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HolidayAIPage;