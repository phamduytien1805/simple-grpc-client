import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  IconButton,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { ChatRoom } from '../../ChatRoom/containers';

const AccessForm = () => {
  const handleChange = e => {
    console.log('e', e.target.value);
  };
  const handleSubmit = e => {
    console.log('e', e.target.value);
  };

  return (
    // <Flex justifyContent="center" alignItems="center" height="90vh">
    //   <Flex>
    //     <FormControl display={'flex'} flexDirection={'column'}>
    //       <FormLabel>Username</FormLabel>
    //       <Flex gap={2} justifyContent={'center'} alignItems={'center'}>
    //         <Input type="text" onChange={handleChange} />
    //         <IconButton icon={<ArrowForwardIcon />} onClick={handleSubmit} />
    //       </Flex>
    //       <FormHelperText alignSelf={'flex-start'}>
    //         We'll never share your email.
    //       </FormHelperText>
    //     </FormControl>
    //   </Flex>
    // </Flex>
    <ChatRoom />
  );
};

export default AccessForm;
