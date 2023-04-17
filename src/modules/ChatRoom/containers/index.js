import { Flex, Box, useColorMode, Avatar, Text } from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react';
import { Header } from '../components/Header';
import ChatBox from '../components/ChatBox';
import MessagesList from '../components/MessagesList';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { Empty, MessagePayload } from '../../../chat_pb';
import { client } from '../../../grpcClient';
import { Context } from '../../../common/context/Context';
import { CODE } from '../../../common/constant';

export const ChatRoom = () => {
  const [inputMessage, setInputMessage] = useState('');
  const [messagesList, setMessagesList] = useState([]);
  const [user, setUser] = useContext(Context);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('first');

    // if (user) {
    //   const empty = new Empty();
    //   console.log('first');
    //   // strRq.setUser(username);
    //   var chatStream = client.receiveEvent(empty, {});
    //   chatStream.on('data', response => {
    //     const eventType = response.getEventCase();
    //     if (eventType === 1) {
    //       const messageModel = response.getChatmessage();
    //       const message = {
    //         uuid: messageModel.getUuid(),
    //         username: messageModel.getUsername(),
    //         msg: messageModel.getMsg(),
    //         timestamp: messageModel.getTimestamp(),
    //         like: messageModel.getLike(),
    //       };
    //       setMessagesList(prev => [...prev, message]);
    //     }
    //     console.log('event', eventType);
    //     // const msg = response.getMsg();
    //     // const time = response.getTime();
    //     // console.log('sending friend msg:' + msg, ' from:' + from);
    //     // if (from === username) {
    //     //   setMsgList(oldArray => [...oldArray, { from, msg, time, mine: true }]);
    //     // } else {
    //     //   setMsgList(oldArray => [...oldArray, { from, msg, time }]);
    //     // }
    //   });
    //   chatStream.on('status', function (status) {
    //     console.log(status.code, status.details, status.metadata);
    //   });
    //   chatStream.on('end', () => {
    //     console.log('Stream ended.');
    //   });
    // }
  }, []);

  const onMessaging = e => {
    setInputMessage(e.target.value);
  };
  const onSendMsg = () => {
    const msg = new MessagePayload();
    msg.setUsername(user);
    msg.setMsg(inputMessage);
    console.log('msg', msg);
    client.sendMsg(msg, null, (err, res) => {
      const message = res.getMessage();
      const subcode = res.getSubcode();
      console.log('subcode', subcode);
      if (subcode && subcode !== CODE.SUCCESS) {
        setError(message);
        return;
      }
      setError(null);
    });
  };
  console.log('error', error);

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
