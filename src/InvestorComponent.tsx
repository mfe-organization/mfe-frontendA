import { Box, Heading, Text } from '@chakra-ui/react';

const InvestorComponent = () => {
    return (
        <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Investor Information</Heading>
            <Text mt={4}>
                This section contains important information for investors. Stay updated with the latest financial news and analysis.
            </Text>
        </Box>
    );
};

export default InvestorComponent;
