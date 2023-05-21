import React from 'react';
import {
  Box,
  Container,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingoptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  texttransform: 'uppercase',
  padding: '2rem',
  size: ['1xl', '4xl'],
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container maxW={'container.xl'} p={'10'} minH={['fit-content', '100vh']}>
        <Heading
          textTransform={'uppercase'}
          py={'2'}
          w="fit-content"
          borderBottom={'2px solid'}
          m={'auto'}
        >
          Services
        </Heading>
        <Stack
          h={'full'}
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} filter={'hue-rotate(-130deg)'} h={['40', '400']} />
          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'center'}
          >
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            sint ducimus non deleniti dolores consequatur rem quibusdam ullam
            cumque cum eum, explicabo praesentium doloremque ratione ipsam
            tempora amet inventore. Tempora accusantium minus distinctio vitae,
            quis molestiae at commodi magnam aliquid! Eius suscipit quo aperiam
            nostrum perferendis commodi a nam earum. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quia nisi fugiat magni ad
            exercitationem. Ipsa consequatur alias error eum quam. Architecto
            quibusdam alias expedita libero sunt distinctio est recusandae
            ducimus deleniti corporis. Aliquid rem tempora maxime unde
            distinctio! Beatae vitae quod aspernatur ea repellendus veritatis
            mollitia? Amet eius aperiam ad.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={1000}
      showStatus={false}
      showArrows={false}
      showThumbs={false}
    >
      <Box w={'full'} h={['fit-content', '100vh']}>
        <Image src={img1} />
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingoptions}>
          Watch the Future
        </Heading>
      </Box>
      <Box w={'full'} h={['fit-content', '100vh']}>
        <Image src={img2} />
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingoptions}>
          Future in gaming
        </Heading>
      </Box>
      <Box w={'full'} h={['fit-content', '100vh']}>
        <Image src={img3} />
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingoptions}>
          Game Mania
        </Heading>
      </Box>
      <Box w={'full'} h={['fit-content', '100vh']}>
        <Image src={img4} />
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingoptions}>
          Evening Games
        </Heading>
      </Box>
    </Carousel>
  );
};
export default Home;
