import {
  Button,
  Container,
  Heading,
  Input,
  VStack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Container maxW={'container.xl'} p={'16'} h={'100vh'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={['full', '96']}
          m={'auto'}
          h={'full'}
          my={'16'}
        >
          <Heading color={'purple.500'}>Welcome Back,</Heading>
          <Input
            required
            type={'email'}
            placeholder={'Email'}
            focusBorderColor="purple.500"
          />
          <Input
            required
            type={'password'}
            placeholder={'Password'}
            focusBorderColor="purple.500"
          />
          <Button variant={'link'} alignSelf={'flex-end'}>
            <Link to={'/forgetpassword'}>Forget Password</Link>
          </Button>
          <Button colorScheme={'purple'} type={'submit'}>
            Login
          </Button>
          <Text textAlign={'right'} colorScheme={'purple'}>
            New User?{' '}
            <Button variant={'link'} alignSelf={'flex-end'}>
              <Link to={'/signup'}>Sign Up</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
