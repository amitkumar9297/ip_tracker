import { Box, HStack, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const Stats = ({ ipAddress, location, timezone, isp }) => {
    return (
        <>
            <Stack w={'90%'} h={{ base: "auto", lg: '8rem' }} borderRadius={'1rem'} direction={{ base: 'column', lg: 'row' }} p={8} justifyContent={{ base: 'center', lg: 'space-between' }} boxShadow={{ base: '0', lg: '0px 0px 10px #D9D9D9' }} zIndex={'50'} bg={'white'} position={{ base: 'relative', lg: 'absolute' }} mt={{ base: '0px', lg: '12rem' }}>
                <Box w={{ base: '100%', lg: '24%' }} textAlign={{ base: 'center', lg: 'left' }} h={'100%'} pl={'0.5rem'} p={{ base: '1rem', lg: '0.1rem' }} >
                    <Text fontWeight={'400'}>IP Address</Text>
                    <Text fontWeight={'bold'}>{ipAddress}</Text>
                </Box>
                <Box w={{ base: '100%', lg: '24%' }} textAlign={{ base: 'center', lg: 'left' }} h={'100%'} pl={'0.5rem'} p={{ base: '1rem', lg: '0.1rem' }} borderLeft={{ base: 'none', lg: '1px solid #333333' }} borderTop={{ base: '1px solid #333333', lg: 'none' }}>
                    <Text fontWeight={'400'}>Location</Text>
                    <Text fontWeight={'bold'}>{location}</Text>
                </Box>
                <Box w={{ base: '100%', lg: '24%' }} textAlign={{ base: 'center', lg: 'left' }} h={'100%'} pl={'0.5rem'} p={{ base: '1rem', lg: '0.1rem' }} borderLeft={{ base: 'none', lg: '1px solid #333333' }} borderTop={{ base: '1px solid #333333', lg: 'none' }}>
                    <Text fontWeight={'400'}>Timezone</Text>
                    <Text fontWeight={'bold'}>{timezone}</Text>
                </Box>
                <Box w={{ base: '100%', lg: '24%' }} textAlign={{ base: 'center', lg: 'left' }} h={'100%'} pl={'0.5rem'} p={{ base: '1rem', lg: '0.1rem' }} borderLeft={{ base: 'none', lg: '1px solid #333333' }} borderTop={{ base: '1px solid #333333', lg: 'none' }}>
                    <Text fontWeight={'400'}>ISP</Text>
                    <Text fontWeight={'bold'}>{isp}</Text>
                </Box>


            </Stack>
        </>
    )
}

export default Stats