import streamChatServices from '@src/features/chat/services/stream-chat.services';
import { useEffect } from 'react';

export default function useChatListener() {
  useEffect(() => {
    streamChatServices.init(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZGVtbzEifQ.89GvBB7GPdJeCtdvqwTHMBZjESd6OZXh4pTWPUHPQhs',
    );
  }, []);
}
