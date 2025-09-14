import 'ol/ol.css';
import { useEffect, useRef } from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

const MapComponent = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current && !mapRef.current.map) {
      const map = new Map({
        target: mapRef.current,
        layers: [
          new TileLayer({
            source: new OSM(), // OpenStreetMap tiles
          }),
        ],
        view: new View({
          center: [0, 0], // Center the map (longitude, latitude)
          zoom: 2, // Default zoom level
          projection: 'EPSG:4326', // Use geographic coordinates
        }),
      });

      mapRef.current.map = map;
    }
  }, []);

  return (
    <div
      ref={mapRef}
      style={{
        width: '100vw',
        height: '100vh',
      }}
    />
  );
};

export default MapComponent;
