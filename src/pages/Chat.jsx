import React, {useState, useEffect, useMemo, useContext} from 'react';
// import {useCollection, useCollectionData} from 'react-firebase-hooks/firestore';

import {FirebaseContext, AuthContext} from 'context';
import {Message} from 'components';
import {BaseInput, BaseButton, Spinner} from 'components/ui';

const Chat = (props) => {
  const {db, collection, getDocs, addDoc, doc, onSnapshot} = useContext(FirebaseContext);
  const {user, isLoading} = useContext(AuthContext);
  const [value, setValue] = useState('');
  const [messages, setMessages] = useState([]);

  // const sortedMessages = useMemo(() => {
  //   return [...messages.reverse()];
  // }, [messages]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "messages"), (doc) => {
        const messageList = [];
        doc.forEach(item => messageList.push(item.data()));

        setMessages(messageList);
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
        {messages.map(message =>
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
