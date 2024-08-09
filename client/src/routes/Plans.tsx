import React, { useState } from "react";

const Plans = () => {
  // State to track which card is enlarged
  const [enlargedCard, setEnlargedCard] = useState<string | null>(null);

  // Function to handle card click
  const handleCardClick = (card: string) => {
    setEnlargedCard(enlargedCard === card ? null : card);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center">
      {/* Background Section */}
      <div
        className="bg-cover bg-center bg-no-repeat h-full w-full absolute top-0 left-0"
        style={{ backgroundImage: "url('care2.png')", opacity: 0.3 }}
      ></div>

      {/* Cards Section */}
      <div className="absolute flex justify-center items-center mt-24 h-3/4 space-x-4">
        {/* Basic Plan */}
        <div
          onClick={() => handleCardClick("basic")}
          className={`bg-red-50 p-6 rounded-lg shadow-lg z-10 transition-all duration-300 cursor-pointer ${
            enlargedCard === "basic" ? "w-full h-full z-50" : "w-1/3 h-full"
          }`}
        >
          <h3 className="text-xl font-bold text-red-600 mb-4">
            Empower <span className="font-normal">Basic</span>
          </h3>
          <p className="text-3xl font-semibold mb-4">₹199/month</p>
          <p className="text-sm text-red-600 mb-6">
            *Prices shown are for prepaid annual plans only
          </p>
          <button className="bg-red-500 text-white py-2 px-4 rounded-lg mb-6 w-full">
            Request callback
          </button>
          <h4 className="text-lg font-semibold mb-4">Key Features</h4>
          <ul className="text-sm space-y-2">
            <li>✓ 24/7 Emergency Coordination Access</li>
            <li>✓ Senior Help Desk For Lab Tests & Deliveries</li>
            <li>✓ Access To Verified Healthcare Professionals</li>
            <li>✓ Support For Local & International Travel</li>
            <li>✓ Expert Talks On Diet, Health & Wellness</li>
          </ul>
        </div>

        {/* Advanced Plan */}
        <div
          onClick={() => handleCardClick("advanced")}
          className={`bg-white p-6 rounded-lg shadow-lg z-10 transition-all duration-300 cursor-pointer ${
            enlargedCard === "advanced" ? "w-full h-full z-50" : "w-1/3 h-full"
          }`}
        >
          <h3 className="text-xl font-bold text-red-600 mb-4">
            Empower <span className="font-normal">Advanced</span>
          </h3>
          <p className="text-3xl font-semibold mb-4">₹799/month</p>
          <p className="text-sm text-red-600 mb-6">
            *Prices shown are for prepaid annual plans only
          </p>
          <button className="bg-red-500 text-white py-2 px-4 rounded-lg mb-6 w-full">
            Request callback
          </button>
          <h4 className="text-lg font-semibold mb-4">Key Features</h4>
          <ul className="text-sm space-y-2">
            <li>✓ BLS Emergency Ambulance Coverage (One Per Year)</li>
            <li>✓ Access To Doctor On Call During Emergencies</li>
            <li>✓ Receive Weekly Wellness Check-In Calls By Emoha Daughter</li>
            <li>✓ Regular Care Updates To Family</li>
            <li>✓ Annual Lab Tests For 58 Health Parameters</li>
            <li>✓ Enjoy All The Services Included In The Basic Plan</li>
          </ul>
        </div>

        {/* Premium Plan */}
        <div
          onClick={() => handleCardClick("premium")}
          className={`bg-red-50 p-6 rounded-lg shadow-lg z-10 transition-all duration-300 cursor-pointer ${
            enlargedCard === "premium" ? "w-full h-full z-50" : "w-1/3 h-full"
          }`}
        >
          <h3 className="text-xl font-bold text-red-600 mb-4">
            Empower <span className="font-normal">Premium</span>
          </h3>
          <p className="text-3xl font-semibold mb-4">₹2299/month</p>
          <p className="text-sm text-red-600 mb-6">
            *Prices shown are for prepaid annual plans only
          </p>
          <button className="bg-red-500 text-white py-2 px-4 rounded-lg mb-6 w-full">
            Request callback
          </button>
          <h4 className="text-lg font-semibold mb-4">Key Features</h4>
          <ul className="text-sm space-y-2">
            <li>✓ Unlimited BLS Emergency Ambulance Coverage</li>
            <li>✓ Unlimited Access To Doctor On Call During Emergencies</li>
            <li>✓ Receive Weekly Wellness Check-In Calls By Emoha Daughter</li>
            <li>✓ Regular Care Updates To Family</li>
            <li>✓ Annual Lab Tests For 72 Health Parameters</li>
            <li>✓ Enjoy All The Services Included In The Basic Plan</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Plans;
