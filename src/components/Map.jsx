import React, { useRef, useState, useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { updateCoordinates } from "./InputBox";

//DEFAULT VALUES
let latitude = Math.random() * (72 - 35) + 35;
let longitude = Math.random() * (65 - 25) + 25;
let mapRef = null;


export default function Map() {
  mapRef = useRef(null);

  const [coordinates, setCoordinates] = useState({ latitude: latitude, longitude: longitude });


  return (
    <MapContainer center={[coordinates.latitude, coordinates.longitude]} zoom={13} ref={mapRef} style={{ height: "57vh", width: "100vw" }}>
      <TileLayer
        attribution=''
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  )
}
