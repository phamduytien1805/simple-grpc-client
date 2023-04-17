import { StarIcon } from '@chakra-ui/icons';
import { Avatar, Box, Divider, Flex, IconButton, Text } from '@chakra-ui/react';
import React from 'react';
import { format } from 'date-fns';
const MessageBubble = props => {
  const { currentUser, messageModel, onHandleLike } = props;
  console.log('messageModel', messageModel);
  const { uuid, msg, timestamp, username, like, eventType } = messageModel;
  const isMine = currentUser === username;

  return (
    <Flex
      color={'black'}
      maxWidth="80%"
      my={2}
      py={2}
      px={3}
      gap={2}
      alignSelf={isMine ? 'flex-end' : 'flex-start'}
      flexDirection={isMine ? 'row-reverse' : 'row'}
    >
      {!isMine && <Avatar size="sm" name={username} />}
      <Flex flexDirection={'column'} maxW={'60%'} minW={'80px'}>
        <Flex
          alignItems={isMine ? 'flex-end' : 'flex-start'}
          flexDirection={'column'}
          mb={1}
          backgroundColor={'#F2F2F7'}
          p={'4px 8px 4px 8px'}
          borderRadius={6}
        >
          {!isMine && (
            <Text fontSize="sm" fontWeight="bold">
              {username}
            </Text>
          )}

          <Text
            fontSize="sm"
            color={'##2C2C2E'}
            textAlign={'start'}
            noOfLines={1}
            maxW={'100%'} // add this line
            overflow={'none'}
            display={''}
          >
            {msg.replace(/\\n/g, '\n')}
          </Text>
          <Text
            fontSize="sm"
            alignSelf="flex-end"
            color={'#666668'}
            wordBreak={'break-all'}
          >
            {format(Number(timestamp), 'HH:mm:ss')}
          </Text>
        </Flex>
        <Flex>
          {Array.from({ length: like }).map(() => (
            <StarIcon fillOpacity={'20%'} boxSize={3} color={'yellow.700'} />
          ))}
        </Flex>
      </Flex>

      {!isMine && (
        <IconButton
          variant="outline"
          colorScheme="telegram"
          alignSelf={'center'}
          onClick={() => onHandleLike(uuid)}
          icon={<StarIcon />}
        />
      )}
    </Flex>
  );
};

export default MessageBubble;
