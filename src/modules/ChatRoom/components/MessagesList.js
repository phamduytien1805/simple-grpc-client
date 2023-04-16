import { Flex } from '@chakra-ui/react';
import React from 'react';
import MessageBubble from './MessageBubble';

const MessagesList = props => {
  const { messagesList, currentUser } = props;
  return messagesList.map((item, index) => (
    <MessageBubble isMine={index === 3} />
  ));
};

export default MessagesList;
