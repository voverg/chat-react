import React, {useState, useEffect, useMemo, useContext} from 'react';

import {FirebaseContext, AuthContext} from 'context';
import {useSortedMessages} from 'hooks';
import {Message} from 'components';
import {BaseInput, BaseButton, Spinner} from 'components/ui';

const Chat = (props) => {
  const {db, collection, getDocs, addDoc, doc, onSnapshot} = useContext(FirebaseContext);
  const {user, isLoading} = useContext(AuthContext);
  const [value, setValue] = useState('');
  const [messages, setMessages] = useState([]);
  const sortedMessages = useSortedMessages(messages);


  useEffect(() => {
    const unsub = onSnapshot(collection(db, "messages"), (doc) => {
        const messageList = [];
        doc.forEach(item => messageList.push(item.data()));

        setMessages([...messages, ...messageList]);
      });

    return () => {
      unsub();
    }
  }, []);

  const sendMessage = async (event) => {
    event.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "messages"), {
        id: Date.now(),
        user,
        message: value,
        date: new Date().toLocaleString('ru'),
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    setValue('');
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="chat">
      <div className="chat__dashboard">
        {sortedMessages.map(message =>
          <Message
            key={message.date.toString()}
            user={user}
            message={message}
          />
        )}
      </div>

      <form className="chat__new-message" onSubmit={sendMessage}>
        <BaseInput
          className="chat__input"
          type="text"
          placeholder="Введите сообщение..."
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <BaseButton
          className="chat__add-btn"
        >
          Отправить
        </BaseButton>
      </form>
    </div>
  );
};

export default Chat;
