"use client"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const CongoMap = () => {
  return (
    <MapContainer center={[-4.0383, 21.7587] as [number, number]} zoom={6}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {/* <Marker position={[-4.0383, 21.7587] as [number, number]}>
        <Popup>
          A sample popup.
        </Popup>
      </Marker> */}
    </MapContainer>
  );
};


export default CongoMap;