import React from 'react';
import { Flex, Box, IconButton } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import AvatarGroup from './AvatarGroup';

export const Header = () => {
  return (
    <Flex
      height={'68px'}
      color={'black'}
      justifyContent="space-between"
      alignItems="center"
      boxShadow={'inset 0px -1px 0px #E5E5EA'}
      p={13}
    >
      <AvatarGroup />
      <Box>Distributed System</Box>
      <Box>
        <IconButton icon={<ArrowForwardIcon />} onClick={() => {}} />
      </Box>
    </Flex>
  );
};
