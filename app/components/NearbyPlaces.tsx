import React, { useState, useEffect } from 'react';

interface Place {
  id: string;
  name: string;
  type: string;
  distance: number;
  address: string;
}

interface NearbyPlacesProps {
  location: {
    lat: number;
    lng: number;
  };
}

export default function NearbyPlaces({ location }: NearbyPlacesProps) {
  const [places, setPlaces] = useState<Place[]>([]);
  const [selectedType, setSelectedType] = useState<string>('all');

  const placeTypes = [
    { id: 'all', label: 'All Places' },
    { id: 'supermarket', label: 'Supermarkets' },
    { id: 'restaurant', label: 'Restaurants' },
    { id: 'cafe', label: 'Coffee Shops' },
  ];

  // Mock data for demonstration - Replace with actual API call
  useEffect(() => {
    // This would be replaced with actual Google Places API call
    const mockPlaces: Place[] = [
      {
        id: '1',
        name: 'Local Supermarket',
        type: 'supermarket',
        distance: 0.3,
        address: '123 Main St'
      },
      {
        id: '2',
        name: 'Coffee House',
        type: 'cafe',
        distance: 0.5,
        address: '456 Oak Ave'
      },
      {
        id: '3',
        name: 'Italian Restaurant',
        type: 'restaurant',
        distance: 0.8,
        address: '789 Pine Rd'
      },
    ];

    setPlaces(mockPlaces);
  }, [location]);

  const filteredPlaces = places.filter(place => 
    selectedType === 'all' || place.type === selectedType
  );

  return (
    <div className="w-1/3 fixed right-0 top-0 h-screen bg-white shadow-lg p-6 overflow-y-auto">
      <h2 className="text-2xl font-bold mb-6">Nearby Places</h2>
      
      {/* Filter buttons */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {placeTypes.map(type => (
          <button
            key={type.id}
            onClick={() => setSelectedType(type.id)}
            className={`px-4 py-2 rounded-full ${
              selectedType === type.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {type.label}
          </button>
        ))}
      </div>

      {/* Places list */}
      <div className="space-y-4">
        {filteredPlaces.map(place => (
          <div
            key={place.id}
            className="border rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold text-lg">{place.name}</h3>
            <p className="text-gray-600">{place.address}</p>
            <div className="flex items-center mt-2">
              <span className="text-sm text-blue-600">
                {place.distance} km away
              </span>
              <span className="mx-2 text-gray-400">•</span>
              <span className="text-sm text-gray-500 capitalize">
                {place.type}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 