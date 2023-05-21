import {
  Box,
  Stack,
  Heading,
  VStack,
  HStack,
  Button,
  Input,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
      <Stack direction={['column', 'row']} justifyContent={'space-between'}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
          <Heading
            size={'md'}
            textAlign={['center', 'left']}
            textTransform={'uppercase'}
          >
            Subscribe to our News Letter
          </Heading>
          <HStack py={'2'}>
            <Input
              placeholder={'Enter your email'}
              borderRadius={'20px 0 0 20px'}
              outline={'none'}
            />
            <Button
              p={'0'}
              colorScheme={'purple'}
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={'20'} />
            </Button>
          </HStack>
        </VStack>
        <VStack
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
          w={'full'}
          px={'4'}
        >
          <Heading textAlign={'center'} textTransform={'uppercase'}>
            Video Hub
          </Heading>
          <Text>All rights reserved</Text>
        </VStack>
        <VStack w={'full'} px={'4'}>
          <Heading
            size={'md'}
            p={'2'}
            textTransform={'uppercase'}
            textAlign={'center'}
          >
            Social Media
          </Heading>
          <Button variant={'link'} colorScheme="purple">
            <a href="https://instagram.com" target={'blank'}>
              Instagram
            </a>
          </Button>
          <Button variant={'link'} colorScheme="purple">
            <a href="https://google.com" target={'blank'}>
              google
            </a>
          </Button>
          <Button variant={'link'} colorScheme="purple">
            <a href="https://youtube.com" target={'blank'}>
              youtube
            </a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
