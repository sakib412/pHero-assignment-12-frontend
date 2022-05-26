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
import { Link } from 'react-router-dom'

const Product = ({ product }) => {
    const { _id, name, image, description, price, minOrderQuantity, quantity } = product
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
                        backgroundImage: `url(${product.image || ''})`,
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
                        src={image || ''}
                    />
                </Box>
                <Stack pt={10} align={'center'}>

                    <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                        {name}
                    </Heading>
                    <Text color={'gray.500'} fontSize={'sm'}>
                        {description.slice(0, 20)}
                    </Text>
                    <Stack direction={'row'} align={'center'}>
                        <Text textTransform='uppercase' title='Minimum Order Quantity'>
                            MOQ : <span className='font-bold'>{minOrderQuantity}</span>
                        </Text>
                        <Text textTransform='uppercase'>
                            Current Stock : <span className='font-bold'>{quantity}</span>
                        </Text>
                    </Stack>
                    <Stack direction={'row'} align={'center'}>
                        <Text fontWeight={500}
                        >
                            Price:
                        </Text>
                        <Text fontWeight={800} fontSize={'xl'}
                        >
                            ${price}
                        </Text>
                    </Stack>
                    <Button
                        as={Link}
                        to={`purchage/${_id}`}
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