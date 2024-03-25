import { VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import Stats from './Stats';
import SearchBar from './SearchBar';
import Map from './Map';

const IPAddress = () => {

    const [IPAddress, setIPAddress] = useState("");
    const [location, setLocation] = useState("");
    const [timezone, setTimezone] = useState("");
    const [ISP, setISP] = useState("");
    const [coordinates, setCoordinates] = useState({
        lat: 51.5074,
        lng: -0.1278,
    });



    const fetchLocation = (ipAddress = "") => {
        fetch(
            `https://geo.ipify.org/api/v2/country,city?apiKey=at_6IMsM7Uxn3rnRlrtLGX8KH8YW7nzk&ipAddress=${ipAddress}`
        )
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch IP information");
                }
                return res.json();
            })
            .then((data) => {
                console.log(data);
                const { ip, location, isp } = data;
                setIPAddress(ip);
                setLocation(
                    `${location.city}, ${location.country} ${location.postalCode}`
                );
                setTimezone(`UTC ${location.timezone}`);
                setISP(isp);
                if (location.lat && location.lng) { // Check if lat and lng are defined
                    setCoordinates({ lat: location.lat, lng: location.lng });
                } else {
                    console.error("Latitude or longitude is undefined");
                    // Optionally, set default coordinates or handle the error accordingly
                }
            })
            .catch((error) => {
                console.error("Error fetching IP information:", error.message);
                // Optionally, set default coordinates or handle the error accordingly
            });
    };


    useEffect(() => {
        fetchLocation();
    }, []);


    return (
        <>
            <VStack w={'100%'} gap={0}>
                <SearchBar setIPAddress={setIPAddress} fetchLocation={fetchLocation} />
                <Stats
                    ipAddress={IPAddress}
                    location={location}
                    timezone={timezone}
                    isp={ISP}
                />
                <Map coordinates={coordinates} />
            </VStack>
        </>
    )
}

export default IPAddress