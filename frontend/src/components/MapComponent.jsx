import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import '../styles/tileDisplay.css'
import '../styles/MapComponent.css'

export default function MapComponent() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyBDBWZewbYplD3oafGKBK66gotFML1BiVg',
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const center = useMemo(() => ({ lat: 31.400633, lng: 74.213730 }), []);

  return (
    <GoogleMap zoom={15} center={center} mapContainerClassName="map-container">
      <Marker 
      position={center}
      />
    </GoogleMap>
  );
}