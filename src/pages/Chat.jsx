import React, {useState, useEffect, useContext} from 'react';
// import {useCollection, useCollectionData} from 'react-firebase-hooks/firestore';

import {FirebaseContext, AuthContext} from 'context';
import {Message} from 'components';
import {BaseInput, BaseButton, Spinner} from 'components/ui';

const Chat = (props) => {
  const {db, collection, getDocs, addDoc} = useContext(FirebaseContext);
  const {user} = useContext(AuthContext);
  const [value, setValue] = useState('');
  const [messages, setMessages] = useState([]);

  const getMessages = async (db) => {
    const messagesCol = collection(db, 'messages');
    const messageSnapshot = await getDocs(messagesCol);
    const messageList = messageSnapshot.docs.map(doc => doc.data());

    setMessages([...messages, ...messageList]);
  }

  useEffect(() => {
    getMessages(db);
  }, []);

  const sendMessage = async (event) => {
    event.preventDefault();
    console.log(value, user);

    try {
      const docRef = await addDoc(collection(db, "messages"), {
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
