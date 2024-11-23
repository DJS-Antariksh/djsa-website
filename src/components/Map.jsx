import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet's CSS

function Map() {
  useEffect(() => {
    // Initialize the map
    const map = L.map('map').setView([15.393, 73.878], 14.1); // BITS Pilani Goa coordinates

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);

    const blueMarkerIcon = L.icon({
      iconUrl: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png',
      iconSize: [32, 32], // Adjust size if needed
      iconAnchor: [16, 32], // Anchor point for accurate placement
    });
    
    const customMarker = L.marker([15.3909, 73.879], { icon: blueMarkerIcon }).addTo(map);

    // Optional: Add a circle around the campus
    L.circle([15.3909, 73.879], {
      color: 'blue',
      fillColor: '#add8e6',
      fillOpacity: 0.5,
      radius: 400, // Radius in meters
    }).addTo(map);

    // Cleanup on unmount
    return () => {
      map.remove();
    };
  }, []);

}

export default Map;