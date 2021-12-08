import {useMemo} from 'react';

export const useSortedMessages = (messages) => {
  const sort = 'id';

  const getSortedMessages = () => {
    return [...messages].sort((a, b) => b[sort] - a[sort]);
    // Если поле сортировки является string, тоs
    // return [...messages].sort((a, b) => b[sort].localeCompare(a[sort]));
  }

  const sortedMessages = useMemo(getSortedMessages, [messages, sort]);
  return sortedMessages;
};
