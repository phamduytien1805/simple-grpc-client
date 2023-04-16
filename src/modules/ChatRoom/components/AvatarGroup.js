import { Box } from '@chakra-ui/react';
import React from 'react';

const AvatarGroup = () => {
  return (
    <Box display="flex">
      <Box
        border="1px solid white"
        w={'24px'}
        h="24px"
        borderRadius="50%"
        bg={'red'}
      />{' '}
      <Box position="relative" left="-10%">
        <Box
          w={'24px'}
          border="1px solid white"
          h="24px"
          borderRadius="50%"
          bg={'black'}
        />{' '}
      </Box>
      <Box position="relative" left="-20%">
        <Box
          border="1px solid white"
          w={'24px'}
          h="24px"
          borderRadius="50%"
          bg={'grey'}
        />{' '}
      </Box>
    </Box>
  );
};

export default AvatarGroup;
