import React, { useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
let latitude=51.505;
let  longitude=-0.09;
const arr = []
export function initialize(a, b) {
  arr.push(a);
  arr.push(b);
}
console.log(arr)
export default function Map() {
  const mapRef = useRef(null);
  return (
    <MapContainer center={[arr[0],arr[1]]} zoom={13} ref={mapRef} style={{ height: "57vh", width: "100vw" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* Additional map layers or components can be added here */}
    </MapContainer>
  )
}
