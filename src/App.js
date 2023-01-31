import { ChakraProvider, } from '@chakra-ui/react'

import './App.css';
import Fotter from './components/Fotter';
import MainComp from './components/MainComp';




function App() {
  return (
    <ChakraProvider >
      <MainComp />
      <Fotter />
    </ChakraProvider>
  );
}

export default App;
