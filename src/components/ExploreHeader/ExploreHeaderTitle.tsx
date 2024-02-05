import React from 'react';
import { Box, Icon, Text } from '../elements';

export const ExploreHeaderTitle = () => {
  return (
    <Box flexDirection="row" alignItems="flex-start">
      <Icon name="sunny" color="orange" size={25} />
      <Text marginLeft="s" variant={'header'} color={'primary'}>
        Chào Nguyễn Văn A!
      </Text>
    </Box>
  );
};
