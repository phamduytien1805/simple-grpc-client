import {
  Flex,
  Box,
  useColorMode,
  Avatar,
  Text,
  useToast,
} from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react';
import { Header } from '../components/Header';
import ChatBox from '../components/ChatBox';
import MessagesList from '../components/MessagesList';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { Empty, MessagePayload } from '../../../chat_pb';
import useChatStreamManager, {
  ChatStreamManager,
  client,
} from '../../../grpcClient';
import { Context } from '../../../common/context/Context';
import { CODE } from '../../../common/constant';
import { isEmpty } from 'lodash';

export const ChatRoom = () => {
  const [inputMessage, setInputMessage] = useState('');
  const [messagesList, setMessagesList] = useState([]);
  const [user, setUser] = useContext(Context);
  const [error, setError] = useState(null);
  const toast = useToast();

  const [event] = useChatStreamManager(client);

  useEffect(() => {
    if (!isEmpty(event)) {
      const { eventType, data: msg } = event;
      if (eventType === 3) {
        return;
      }
      if (event && msg) {
        console.log('event', event);
        setMessagesList(prev => [...prev, { ...msg, eventType }]);
      }

      // if (eventType === 1) {
      //   setMessagesList(prev => [...prev, {...msg,eventType }]);
      // }
      // else if (eventType === 2) {
      //   setMessagesList(prev => [...prev, msg]);
      // }
    }
  }, [event]);

  const onMessaging = e => {
    if (error) {
      setError(null);
    }
    setInputMessage(e.target.value);
  };
  const onSendMsg = () => {
    const msg = new MessagePayload();
    msg.setUsername(user);
    msg.setMsg(inputMessage);
    client.sendMsg(msg, null, (err, res) => {
      const message = res.getMessage();
      const subcode = res.getSubcode();
      if (subcode && subcode !== CODE.SUCCESS) {
        setError(message);
        toast({
          status: 'error',
          title: message,
        });
        return;
      }
      setError(null);
      setInputMessage('');
    });
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
          error={error}
          onMessaging={onMessaging}
          message={inputMessage}
          onSendMsg={onSendMsg}
        />
      </Flex>
    </Flex>
  );
};
