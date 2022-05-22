import {
    Box,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    GridItem,
    Button,
} from '@chakra-ui/react';

const IMAGE =
    'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';

const Product = () => {
    return (
        <GridItem py={12} className='mx-auto'>
            <Box
                role={'group'}
                p={6}
                maxW={'330px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'xl'}
                rounded={'lg'}
                pos={'relative'}
                zIndex={1}>
                <Box
                    rounded={'lg'}
                    mt={-10}
                    pos={'relative'}
                    height={'230px'}
                    _after={{
                        transition: 'all .3s ease',
                        content: '""',
                        w: 'full',
                        h: 'full',
                        pos: 'absolute',
                        top: 2,
                        left: 0,
                        backgroundImage: `url(${IMAGE})`,
                        filter: 'blur(2px)',
                        zIndex: -1,
                    }}
                    _groupHover={{
                        _after: {
                            filter: 'blur(6px)',
                        },
                    }}>
                    <Image
                        rounded={'lg'}
                        height={230}
                        width={282}
                        objectFit={'cover'}
                        src={IMAGE}
                    />
                </Box>
                <Stack pt={10} align={'center'}>

                    <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                        Nice Chair, pink
                    </Heading>
                    <Text color={'gray.500'} fontSize={'sm'}>
                        Note that unlike containers you might have used in other frameworks.
                    </Text>
                    <Stack direction={'row'} align={'center'}>
                        <Text textTransform='uppercase' title='Minimum Order Quantity'>
                            MOQ : <span className='font-bold'>20</span>
                        </Text>
                        <Text textTransform='uppercase'>
                            Current Stock : <span className='font-bold'>500</span>
                        </Text>
                    </Stack>
                    <Stack direction={'row'} align={'center'}>
                        <Text fontWeight={500}
                        >
                            Price:
                        </Text>
                        <Text fontWeight={800} fontSize={'xl'}
                        >
                            $57
                        </Text>
                    </Stack>
                    <Button
                        mt={10}
                        w={'full'}
                        bg={'brand.900'}
                        color={'white'}
                        rounded={'xl'}
                        _hover={{
                            bg: 'brand.500',
                        }}
                        _focus={{
                            bg: 'brand.500',
                        }}>
                        Buy Now
                    </Button>
                </Stack>
            </Box>
        </GridItem>
    );
}

export default Product