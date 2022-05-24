import {
    Box,
    chakra,
    Flex,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
} from '@chakra-ui/react';
import { BsPerson, BsTools } from 'react-icons/bs';
import { FaChartLine } from 'react-icons/fa';
import { MdOutlineRateReview } from 'react-icons/md';


function StatsCard(props) {
    const { title, stat, icon } = props;
    return (
        <Stat
            maxW='full'
            px={{ base: 4, md: 4 }}
            py={'3'}
            mb='10'
            shadow={'xl'}
            border={'1px solid'}
            borderColor={useColorModeValue('brand.800', 'gray.500')}
            transition='all 0.5s ease'
            _hover={{
                backgroundColor: useColorModeValue('brand.100', 'gray.500')
            }}
            rounded={'lg'}>
            <Flex justifyContent={'space-between'}>
                <Box pl={{ base: 2, md: 4 }}>
                    <StatLabel fontWeight={'medium'} istruncated='true'>
                        {title}
                    </StatLabel>
                    <StatNumber fontSize={'2xl'} fontWeight={'medium'}
                        color={useColorModeValue('brand.900', 'gray.200')}
                    >
                        {stat}
                    </StatNumber>
                </Box>
                <Box
                    my={'auto'}
                    color={useColorModeValue('brand.800', 'gray.200')}
                    alignContent={'center'}>
                    {icon}
                </Box>
            </Flex>
        </Stat>
    );
}

export default function Summary() {
    return (
        <Box className='container mx-auto' pt={5} px={{ base: 2, sm: 12, md: 15 }}>
            <chakra.h1
                textAlign={'center'}
                fontSize={'4xl'}
                py={10}
                fontWeight={'bold'}>
                Business Summary
            </chakra.h1>
            <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={{ base: 5, lg: 8 }}>
                <StatsCard
                    title={'Users'}
                    stat={'100K+'}
                    icon={<BsPerson size={'3em'} />}
                />
                <StatsCard
                    title={'Annual revenue'}
                    stat={'120M+'}
                    icon={<FaChartLine size={'3em'} />}
                />
                <StatsCard
                    title={'Reviews'}
                    stat={'10K+'}
                    icon={<MdOutlineRateReview size={'3em'} />}
                />
                <StatsCard
                    title={'Tools'}
                    stat={'2K+'}
                    icon={<BsTools size={'3em'} />}
                />
            </SimpleGrid>
        </Box>
    );
}