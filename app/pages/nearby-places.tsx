import React, { useState } from 'react';
import NearbyPlaces from '../components/NearbyPlaces';

export default function NearbyPlacesPage() {
  const [selectedLocation, setSelectedLocation] = useState({
    lat: 51.5074,
    lng: -0.1278,
  });

  return (
    <div className="flex h-screen">
      {/* Left side - Map placeholder */}
      <div className="flex-grow bg-gray-100 p-4">
        <div className="bg-white rounded-lg p-4 mb-4 shadow">
          <h2 className="text-xl font-semibold mb-2">Select Location</h2>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Enter address or coordinates"
              className="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Search
            </button>
          </div>
        </div>
        
        {/* Map placeholder - Replace with actual map component */}
        <div className="h-[calc(100vh-12rem)] bg-gray-200 rounded-lg flex items-center justify-center">
          <p className="text-gray-600">Map will be displayed here</p>
        </div>
      </div>

      {/* Right side - Nearby places */}
      <NearbyPlaces location={selectedLocation} />
    </div>
  );
} 