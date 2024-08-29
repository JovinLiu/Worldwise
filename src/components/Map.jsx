/* eslint-disable react/prop-types */

import styles from "./Map.module.css";
import { useCities } from "../Contexts/CityContexts";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { useEffect, useState } from "react";
import Button from "./Button";
import { useGeolocation } from "../Hooks/useGeolocation";
import useUrlPosition from "../Hooks/useUrlPosition";
import { useNavigate } from "react-router-dom";

function Map() {
  const { cities } = useCities();
  const [currentPosition, setCurrentPosition] = useState([
    -37.81360547648188, 144.95946419755685,
  ]);
  const [position, error, isLoading, setIsLoading] = useGeolocation();
  const [mapLat, mapLng] = useUrlPosition();

  useEffect(
    function () {
      console.log(position);
      if (mapLat && mapLng) setCurrentPosition([mapLat, mapLng]);
    },
    [mapLat, mapLng, position]
  );

  useEffect(
    function () {
      if (error) return console.error(error);
      if (!position.coords) return;
      const { latitude, longitude } = position.coords;
      setCurrentPosition([latitude, longitude]);
    },
    [isLoading, error, position]
  );

  return (
    <div className={styles.mapContainer}>
      <Button type="position" onClick={() => setIsLoading(true)}>
        {isLoading ? "Loading Position" : "Use my current location"}
      </Button>
      <MapContainer
        className={styles.map}
        center={currentPosition}
        zoom={6}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              <span>{city.emoji}</span>
              <span>{city.country}</span>
            </Popup>
          </Marker>
        ))}
        <ChangeCenter position={currentPosition} />
        <DetectClick />
      </MapContainer>
    </div>
  );
}

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

function DetectClick() {
  const navigate = useNavigate();

  useMapEvents({
    click: (e) => {
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
    },
  });
}

export default Map;
