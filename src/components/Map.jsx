import React from 'react'
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { Stack } from '@chakra-ui/react';

import markerIcon from "../assets/marker-icon.png";
const Map = ({ coordinates }) => {

    const marker = new L.icon({ iconUrl: markerIcon });
    let state = {
        keyMAP: Math.random(),
    };
    return (
        <>
            <Stack w={'100%'} h={'67vh'} zIndex={'5'} mt={0}>
                <MapContainer
                    key={state.keyMAP}
                    center={[coordinates.lat, coordinates.lng]}
                    zoom={18}
                    style={{ width: '100%', height: '67vh' }}
                >
                    <TileLayer
                        attribution="Google Maps"
                        url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
                    >
                        <Marker
                            position={[coordinates.lat, coordinates.lng]}
                            icon={marker}
                        ></Marker>
                    </TileLayer>
                </MapContainer>
            </Stack>
        </>
    )
}

export default Map