import { useState, useEffect } from "react";

export default function CarbonMarketplace() {
  const [farmData, setFarmData] = useState({
    livestockCount: 120,
    feedType: "standard",
    emissions: 0,
    carbonCredits: 0,
    pricePerCredit: 35
  });

  const [recommendations, setRecommendations] = useState([]);

  // 🔢 Carbon Calculation Logic (simplified baseline)
  useEffect(() => {
    const emissionFactor = farmData.feedType === "low-emission" ? 1.8 : 2.5;

    const emissions = farmData.livestockCount * emissionFactor;
    const credits = emissions * 0.02; // conversion factor

    setFarmData(prev => ({
      ...prev,
      emissions,
      carbonCredits: credits
    }));

    generateRecommendations(emissions);
  }, [farmData.livestockCount, farmData.feedType]);

  // 🧠 AI Recommendation Engine (rule-based starter)
  const generateRecommendations = (emissions) => {
    let recs = [];

    if (emissions > 250) {
      recs.push({
        title: "Switch to Low-Emission Feed",
        impact: "Reduce emissions by 20%",
        revenueBoost: "+€500/year"
      });
    }

    if (farmData.livestockCount > 100) {
      recs.push({
        title: "Optimize Herd Size",
        impact: "Improve efficiency",
        revenueBoost: "+€300/year"
      });
    }

    setRecommendations(recs);
  };

  const totalRevenue =
    farmData.carbonCredits * farmData.pricePerCredit;

  return (
    <div className="p-6 space-y-6">

      <h1 className="text-2xl font-bold">
        🌱 Carbon & Sustainability Marketplace
      </h1>

      {/* 🌍 Carbon Score */}
      <div className="bg-white p-4 rounded-2xl shadow">
        <h2 className="text-lg font-semibold">Farm Carbon Score</h2>
        <p>Emissions: {farmData.emissions.toFixed(2)} kg CO₂</p>
        <p>Carbon Credits: {farmData.carbonCredits.toFixed(2)}</p>
      </div>

      {/* 💰 Revenue */}
      <div className="bg-green-50 p-4 rounded-2xl shadow">
        <h2 className="text-lg font-semibold">💰 Earnings Potential</h2>
        <p>Price per Credit: €{farmData.pricePerCredit}</p>
        <p className="text-xl font-bold text-green-700">
          €{totalRevenue.toFixed(2)} / year
        </p>
      </div>

      {/* 🧠 Recommendations */}
      <div className="bg-white p-4 rounded-2xl shadow">
        <h2 className="text-lg font-semibold">AI Recommendations</h2>
        {recommendations.length === 0 && <p>No suggestions</p>}
        {recommendations.map((rec, i) => (
          <div key={i} className="border-b py-2">
            <p className="font-medium">{rec.title}</p>
            <p className="text-sm text-gray-600">{rec.impact}</p>
            <p className="text-sm text-green-600">
              {rec.revenueBoost}
            </p>
          </div>
        ))}
      </div>

      {/* 🛒 Marketplace */}
      <div className="bg-white p-4 rounded-2xl shadow">
        <h2 className="text-lg font-semibold">Carbon Marketplace</h2>
        <p>Available Credits: {farmData.carbonCredits.toFixed(2)}</p>

        <button
          className="mt-3 px-4 py-2 bg-black text-white rounded-xl"
          onClick={() => alert("Credits sold successfully!")}
        >
          Sell Credits
        </button>
      </div>

    </div>
  );
}
