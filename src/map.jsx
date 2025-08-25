import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix para que se vean los íconos de los marcadores
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconShadowUrl from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = L.icon({
  iconUrl,
  shadowUrl: iconShadowUrl,
});
L.Marker.prototype.options.icon = DefaultIcon;

export default function Map() {
  const position = [4.60971, -74.08175]; // Bogotá

  return (
    <MapContainer center={position} zoom={13} style={{ height: "100vh", width: "100%" }}>
      {/* Capa base de OpenStreetMap */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />

      {/* Ejemplo de marcador */}
      <Marker position={position}>
        <Popup>¡Hola desde Bogotá! 📍</Popup>
      </Marker>
    </MapContainer>
  );
}
