import { useState } from 'react';
import Epg from './components/Epg/Epg';
import { Button, Container } from '@chakra-ui/react';
import './App.css';

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="main">
      {openModal ? (
        <Epg closeModal={() => setOpenModal(false)} />
      ) : (
        <Button colorScheme="black" onClick={() => setOpenModal(true)}>
          Mostrar EPG
        </Button>
      )}
    </div>
  );
}

export default App;
