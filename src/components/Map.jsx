import React, { useRef,useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

let latitude = 22.571571729784605 ;
let longitude = 88.42824612753667;
let mapRef = null;

export function initialize(a, b) {
  if (mapRef.current) {
    mapRef.current.setView([latitude, longitude], mapRef.current.getZoom());
  }
}
export default function Map() {
  mapRef = useRef(null);
  const [coordinates, setCoordinates] = useState({ latitude: 53, longitude: 22 });
  
  
  return (
    <MapContainer center={[coordinates.latitude, coordinates.longitude]} zoom={13} ref={mapRef} style={{ height: "57vh", width: "100vw" }}>
      <TileLayer
        attribution=''
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
    </MapContainer>
  )
}
