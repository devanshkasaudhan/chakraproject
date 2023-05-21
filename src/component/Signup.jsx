import {
  Button,
  Container,
  Heading,
  Input,
  VStack,
  Text,
  Avatar,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <Container maxW={'container.xl'} p={'16'} h={'100vh'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={['full', '96']}
          m={'auto'}
          h={'full'}
          my={'10'}
        >
          <Heading color={'purple.500'} alignSelf={'center'}>
            VIDEO HUB
          </Heading>
          <Avatar alignSelf={'center'} boxSize={'32'} />
          <Input
            required
            type={'text'}
            placeholder={'Name'}
            focusBorderColor="purple.500"
          />
          <Input
            required
            type={'email'}
            placeholder={'Email'}
            focusBorderColor="purple.500"
          />
          <Input
            required
            type={'password'}
            placeholder={'Create Password'}
            focusBorderColor="purple.500"
          />
          <Input
            required
            type={'password'}
            placeholder={'Confirm Password'}
            focusBorderColor="purple.500"
          />
          <Button colorScheme={'purple'} type={'submit'}>
            Sign Up
          </Button>
          <Text textAlign={'right'} colorScheme={'purple'}>
            Already a User?{' '}
            <Button variant={'link'} alignSelf={'flex-end'}>
              <Link to={'/login'}>Log in</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Signup;
