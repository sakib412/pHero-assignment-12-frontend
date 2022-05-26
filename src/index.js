import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';

const root = ReactDOM.createRoot(document.getElementById('root'));
const colors = {
  brand: {
    900: '#521B41',
    800: '#702459',
    700: '#97266D',
    600: '#B83280',
    500: '#D53F8C',
    400: '#ED64A6',
    300: '#F687B3',
    200: '#FBB6CE',
    100: '#FED7E2'
  },
  primary: {

  },
  secondary: {

  }
}

const theme = extendTheme({ colors })

const queryClient = new QueryClient()

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
