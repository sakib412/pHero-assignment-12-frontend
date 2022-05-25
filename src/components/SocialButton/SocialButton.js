import { useColorModeValue, VisuallyHidden, chakra } from "@chakra-ui/react";

const SocialButton = ({
    children,
    label,
    href,
    ...rest
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            target='_blank'
            _hover={{
                bg: useColorModeValue('blackAlpha.400', 'whiteAlpha.300'),
            }}
            {...rest}
        >
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

export default SocialButton