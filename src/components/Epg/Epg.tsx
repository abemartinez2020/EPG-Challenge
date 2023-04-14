import useGuide from '../../hooks/useGuide';
import {
  Grid,
  GridItem,
  Flex,
  Heading,
  Image,
  Spinner,
} from '@chakra-ui/react';
import './Epg.css';

interface EpgProps {
  closeModal: () => void;
}
const Epg = ({ closeModal }: EpgProps) => {
  const { channels, isLoading, error } = useGuide();
  if (error) {
    console.log(error);
    return (
      <Heading as="h6" width={'50%'} size="sm">
        No se pudo cargar la guia.
      </Heading>
    );
  }

  let count = 1;
  return (
    <div className="modal-Background">
      {isLoading && <Spinner />}
      <div className="btn-container">
        <button className="btn" onClick={closeModal}>
          x
        </button>
      </div>
      <Grid
        className="grid"
        templateColumns="repeat(5,1fr)"
        templateRows="repeat(5, 1rf)"
        gap={0.5}
        bg={'grey'}
        borderTopRadius={'20px'}
      >
        <GridItem bg={'black'} colSpan={1} color={'white'}>
          <h1>hoy</h1>
        </GridItem>
        <GridItem></GridItem>
        {channels?.map((channel) => {
          ++count;
          return (
            <>
              <GridItem
                key={channel.id}
                colStart={1}
                colEnd={1}
                rowStart={count}
                bg={'black'}
                color={'white'}
              >
                <Flex
                  justifyContent={'center'}
                  alignItems={'center'}
                  padding={1}
                >
                  <Heading as="h6" width={'50%'} size="sm">
                    {'000' + channel.number}
                  </Heading>{' '}
                  <Image
                    src={channel.image}
                    alt={`logo del ${channel.name}`}
                    title={channel.name}
                    width={'50%'}
                  />
                </Flex>
              </GridItem>
              {channel.events.slice(20).map((event) => {
                return (
                  <GridItem rowStart={count} bg={'black'} color={'white'}>
                    {event.name === 'NA' ? 'Programa' : event.name}
                  </GridItem>
                );
              })}
            </>
          );
        })}
      </Grid>
    </div>
  );
};

export default Epg;
