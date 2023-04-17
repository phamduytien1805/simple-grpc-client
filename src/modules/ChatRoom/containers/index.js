import { Flex, Box, useColorMode, Avatar, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Header } from '../components/Header';
import ChatBox from '../components/ChatBox';
import MessagesList from '../components/MessagesList';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

export const ChatRoom = () => {
  console.log('asdasd');
  const [inputMessage, setInputMessage] = useState('');
  const [messagesList, setMessagesList] = useState([
    {
      uuid: 1,
      message: 'asd',
      timestamp: 1681735041626,
      username: '123',
      likes: 2,
    },
    {
      uuid: 2,
      message: 'asd',
      timestamp: 1681735041626,
      username: 'ses',
      likes: 2,
    },
    {
      uuid: 3,
      message: 'asd',
      timestamp: 1681735041626,
      username: '123',
      likes: 2,
    },
  ]);
  const user = localStorage.getItem('user');

  const onMessaging = e => {
    console.log('value', e.target.value);
    setInputMessage(e.target.value);
  };
  const onSendMsg = () => {
    console.log('inputMessage', inputMessage);
  };

  const onHandleLike = uuid => {
    console.log('uuid', uuid);
  };
  return (
    <Flex justifyContent="center" alignItems="center" h={'90vh'}>
      <Flex
        w={'90%'}
        h={'90%'}
        borderWidth={2}
        flexDirection="column"
        backgroundColor={'white'}
        borderRadius={8}
        position={'relative'}
      >
        <Header />
        <PerfectScrollbar
          style={{
            height: 'calc(100% - 174px)',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <MessagesList
            messagesList={messagesList}
            currentUser={user}
            onHandleLike={onHandleLike}
          />
        </PerfectScrollbar>
        <ChatBox
          onMessaging={onMessaging}
          message={inputMessage}
          onSendMsg={onSendMsg}
        />
      </Flex>
    </Flex>
  );
};
