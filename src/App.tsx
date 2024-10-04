import { ChakraProvider } from '@chakra-ui/react';
import InvestorComponent from './InvestorComponent';

function App() {
    return (
        <ChakraProvider>
            <div className="App">
                <InvestorComponent />
            </div>
        </ChakraProvider>
    );
}

export default App;
