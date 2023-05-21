import { Container, Heading, Image, Text, Stack } from '@chakra-ui/react';
import React from 'react';
import img1 from '../assets/5.png';
const About = () => {
  return (
    <Container maxW={'container.xl'} p={'10'} minH={['fit-content', '100vh']}>
      <Heading
        textTransform={'uppercase'}
        py={'2'}
        w="fit-content"
        borderBottom={'2px solid'}
        m={'auto'}
      >
        About Us
      </Heading>
      <Stack
        h={'full'}
        p={'4'}
        alignItems={'center'}
        direction={['column', 'row']}
      >
        <Image src={img1} h={['40', '400']} />
        <Text
          letterSpacing={'widest'}
          lineHeight={'190%'}
          p={['4', '16']}
          textAlign={'center'}
        >
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sint
          ducimus non deleniti dolores consequatur rem quibusdam ullam cumque
          cum eum, explicabo praesentium doloremque ratione ipsam tempora amet
          inventore. Tempora accusantium minus distinctio vitae, quis molestiae
          at commodi magnam aliquid! Eius suscipit quo aperiam nostrum
          perferendis commodi a nam earum. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quia nisi fugiat magni ad
          exercitationem. Ipsa consequatur alias error eum quam. Architecto
          quibusdam alias expedita libero sunt distinctio est recusandae ducimus
          deleniti corporis. Aliquid rem tempora maxime unde distinctio! Beatae
          vitae quod aspernatur ea repellendus veritatis mollitia? Amet eius
          aperiam ad.
        </Text>
      </Stack>
    </Container>
  );
};

export default About;
