import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Flex, IconButton, Input, Textarea } from '@chakra-ui/react';
import React from 'react';

const ChatBox = props => {
  const { message, onMessaging, onSendMsg } = props;
  return (
    <Flex
      position={'absolute'}
      gap={1}
      bottom={0}
      align="center"
      justifyContent={'center'}
      width={'100%'}
      boxShadow={'inset 0px 1px 0px #E5E5EA'}
      p={13}
      color={'black'}
    >
      <Textarea
        resize={'none'}
        placeholder="Here is a sample placeholder"
        value={message}
        onChange={onMessaging}
      />{' '}
      <IconButton icon={<ArrowForwardIcon />} onClick={onSendMsg} />
    </Flex>
  );
};

export default ChatBox;
