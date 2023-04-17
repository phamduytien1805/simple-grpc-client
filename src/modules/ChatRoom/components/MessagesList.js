import { Flex } from '@chakra-ui/react';
import React from 'react';
import MessageBubble from './MessageBubble';

const MessagesList = props => {
  const { messagesList, currentUser, onHandleLike } = props;
  return (messagesList || []).map((messageModel, index) => (
    <MessageBubble
      key={messageModel.uuid}
      messageModel={messageModel}
      onHandleLike={onHandleLike}
    />
  ));
};

export default MessagesList;
