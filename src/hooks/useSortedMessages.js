import {useMemo} from 'react';

export const useSortedMessages = (messages) => {
  const sort = 'date';

  const getSortedMessages = () => {
    return [...messages].sort((a, b) => b[sort].localeCompare(a[sort]));
  }

  const sortedMessages = useMemo(getSortedMessages, [messages, sort]);
  return sortedMessages;
};
