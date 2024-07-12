import React from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { Stack } from "@chakra-ui/react";

import markerIcon from "../assets/marker-icon.png";

// Fix Leaflet's default icon issue
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon,
  iconUrl: markerIcon,
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const Map = ({ coordinates }) => {
  let state = {
    keyMAP: Math.random(),
  };

  return (
    <>
      <Stack w={"100%"} h={"67vh"} zIndex={"5"} mt={0}>
        <MapContainer
          key={state.keyMAP}
          center={[coordinates.lat, coordinates.lng]}
          zoom={18}
          style={{ width: "100%", height: "67vh" }}
        >
          <TileLayer
            attribution="Google Maps"
            url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
          />
          <Marker
            position={[coordinates.lat, coordinates.lng]}
            icon={new L.Icon({ iconUrl: markerIcon })}
          />
        </MapContainer>
      </Stack>
    </>
  );
};

export default Map;
