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
import React, { useContext, useEffect, useState } from 'react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { ChatRoom } from '../../ChatRoom/containers';
import { useHistory } from 'react-router-dom';
import { Context } from '../../../common/context/Context';

const AccessForm = () => {
  const [userName, setUserName] = useState('');
  const [user, setUser] = useContext(Context);
  const history = useHistory();

  useEffect(() => {
    if (user) {
      history.push('/');
    }
  }, []);

  const handleChange = e => {
    setUserName(e.target.value);
  };
  const handleSubmit = () => {
    localStorage.setItem('user', userName);
    setUser(userName);
    history.push('/');
  };

  return (
    <Flex justifyContent="center" alignItems="center" height="90vh">
      <Flex>
        <FormControl display={'flex'} flexDirection={'column'}>
          <FormLabel>Username</FormLabel>
          <Flex gap={2} justifyContent={'center'} alignItems={'center'}>
            <Input type="text" onChange={handleChange} value={userName} />
            <IconButton icon={<ArrowForwardIcon />} onClick={handleSubmit} />
          </Flex>
          <FormHelperText alignSelf={'flex-start'}>
            Enter your username
          </FormHelperText>
        </FormControl>
      </Flex>
    </Flex>
  );
};

export default AccessForm;
