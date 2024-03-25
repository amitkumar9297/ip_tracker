import { Box, HStack, Input, Text, VStack } from '@chakra-ui/react'
import React, { useState } from "react";
import iconImage from "../assets/icon-arrow.svg";

const SearchBar = ({ setIPAddress, fetchLocation }) => {

    const [ipAddress, setIpAddress] = useState("");

    const handleClick = () => {
        setIPAddress(ipAddress);
        fetchLocation(ipAddress);
    };


    return (
        <>
            <Box
                w={'100%'} h={{ base: '10rem', lg: '16rem' }}
                backgroundImage={"url('https://img.freepik.com/premium-photo/gps-tracker-map-navigation-pins-map-navigation-technology-mapping-capital-road-3d_357568-2358.jpg')"}
                bgSize={'cover'}
                bgPos={'center'}
                bgRepeat={'no-repeat'}
                mb={0}
            >
                <VStack justifyContent={'center'} alignItems={'center'} w={'100%'} bg={'transparent'}>
                    <Text color={'white'} fontSize={'2.2rem'} fontWeight={'bold'} textAlign={'center'}>IP Address Tracker</Text>
                    <HStack w={{ base: '90%', md: '70%', lg: '40%' }} mt={'1rem'}>
                        <Input
                            type="text"
                            placeholder="Enter the IP Address here.."
                            bg={'white'}
                            _placeholder={{ color: 'black' }}
                            w={'100%'}
                            onChange={(e) => setIpAddress(e.target.value)}
                            onKeyDown={(event) => { if (event.key === "Enter" || event.keyCode === 13) { handleClick() } }}
                        />
                        <Box
                            cursor={'pointer'}
                            onClick={handleClick}
                        >
                            <img src={iconImage} alt="arrow-icon" className="px-3 py-2" />
                        </Box>
                    </HStack>
                </VStack>

            </Box>
        </>
    )
}

export default SearchBar