import React from "react";

const NutriLoopPage = () => {
  return (
    <div className="p-6 space-y-6 bg-[#f8f7f4] min-h-screen">

      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            NutriLoop Intelligence
          </h1>
          <p className="text-sm text-gray-500">
            Precision feed optimization powered by AI
          </p>
        </div>
        <button className="bg-green-700 text-white px-4 py-2 rounded-lg shadow">
          Optimize Feed Plan
        </button>
      </div>

      {/* Closed Loop Steps */}
      <div className="grid grid-cols-4 gap-4">
        {["Sense", "Analyse", "Recommend", "Reorder"].map((step, i) => (
          <div
            key={i}
            className="bg-white p-4 rounded-xl shadow border text-center"
          >
            <h3 className="text-sm text-gray-500">{step}</h3>
            <p className="text-lg font-semibold mt-2">
              {step === "Sense" && "Live farm data"}
              {step === "Analyse" && "AI benchmarking"}
              {step === "Recommend" && "Feed adjustments"}
              {step === "Reorder" && "Auto supply update"}
            </p>
          </div>
        ))}
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-4 gap-4">
        <Card title="Feed Efficiency" value="+12%" status="Improved" />
        <Card title="Emission Reduction" value="-8%" status="Lower methane" />
        <Card title="Growth Rate" value="+6%" status="Optimized" />
        <Card title="Cost Savings" value="€1,240" status="This month" />
      </div>

      {/* AI Recommendations */}
      <div className="bg-white rounded-xl p-6 shadow">
        <h2 className="text-lg font-semibold mb-4">
          AI Feed Recommendations
        </h2>

        <div className="space-y-4">
          <Recommendation
            animal="Pigs (Batch A)"
            suggestion="Increase protein by 5% to improve weight gain"
            impact="↑ Growth +4% | ↓ Emissions -2%"
          />
          <Recommendation
            animal="Cattle (Group 2)"
            suggestion="Reduce overfeeding by 8%"
            impact="↓ Cost €320 | ↓ Methane -3%"
          />
        </div>
      </div>

      {/* Feed Adjustment Panel */}
      <div className="bg-white rounded-xl p-6 shadow grid grid-cols-2 gap-6">
        <div>
          <h2 className="text-lg font-semibold mb-4">
            Current Feed Mix
          </h2>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>Corn: 40%</li>
            <li>Soybean Meal: 25%</li>
            <li>Barley: 20%</li>
            <li>Supplements: 15%</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4 text-green-700">
            Recommended Mix
          </h2>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>Corn: 35%</li>
            <li>Soybean Meal: 30%</li>
            <li>Barley: 20%</li>
            <li>Supplements: 15%</li>
          </ul>
        </div>
      </div>

      {/* Auto Reorder Section */}
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold text-green-800">
            Auto Reorder Ready
          </h2>
          <p className="text-sm text-green-700">
            Updated feed composition will be applied to next Cargill order
          </p>
        </div>

        <button className="bg-green-700 text-white px-4 py-2 rounded-lg">
          Confirm Order Update
        </button>
      </div>

    </div>
  );
};

/* Reusable Components */

const Card = ({ title, value, status }) => (
  <div className="bg-white p-4 rounded-xl shadow">
    <h3 className="text-sm text-gray-500">{title}</h3>
    <p className="text-2xl font-semibold mt-2">{value}</p>
    <p className="text-sm text-green-600 mt-1">{status}</p>
  </div>
);

const Recommendation = ({ animal, suggestion, impact }) => (
  <div className="border rounded-lg p-4 flex justify-between items-center">
    <div>
      <h4 className="font-medium">{animal}</h4>
      <p className="text-sm text-gray-600">{suggestion}</p>
    </div>
    <span className="text-sm text-green-700">{impact}</span>
  </div>
);

export default NutriLoopPage;
