import { StarIcon } from '@chakra-ui/icons';
import { Avatar, Box, Flex, IconButton, Text } from '@chakra-ui/react';
import React from 'react';

const MessageBubble = props => {
  const { isMine, message, timestamp, username, likes = 2 } = props;
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
      {!isMine && <Avatar size="sm" name="Sender Name" />}
      <Flex flexDirection={'column'} maxW={'60%'}>
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
              Sender Name
            </Text>
          )}

          <Text fontSize="sm" color={'##2C2C2E'} textAlign={'start'}>
            lorem ipsum lorem ipsum lorem ipsum ipsum ipsumipsumipsum
            ipsumipsumipsum ipsumipsumipsum ipsumipsumipsum ipsumipsumipsum
            ipsumipsumipsum ipsumipsumipsum ipsumipsumipsum ipsumipsumipsum
            ipsumipsumipsum
          </Text>
          <Text fontSize="sm" alignSelf="flex-end" color={'#666668'}>
            12:40pm
          </Text>
        </Flex>
        <Flex>
          {Array.from({ length: likes }).map(() => (
            <StarIcon fillOpacity={'20%'} boxSize={3} color={'yellow.700'} />
          ))}
        </Flex>
      </Flex>

      {!isMine && (
        <IconButton
          variant="outline"
          colorScheme="telegram"
          alignSelf={'center'}
          icon={<StarIcon />}
        />
      )}
    </Flex>
  );
};

export default MessageBubble;
