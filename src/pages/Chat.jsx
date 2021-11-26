import React, {useState, useContext} from 'react';
import {useCollectionData} from 'react-firebase-hooks/firestore';

import {FirebaseContext, AuthContext} from 'context';
import {BaseInput, BaseButton, Spinner} from 'components/ui';

const Chat = (props) => {
  const {db, collection, getDocs} = useContext(FirebaseContext);
  const {user} = useContext(AuthContext);
  const [value, setValue] = useState('');

  const getMessages = async (db) => {
    const messagesCol = collection(db, 'messages');
    const messageSnapshot = await getDocs(messagesCol);
    const messageList = messageSnapshot.docs.map(doc => doc.data());

    return messageList;
  }

  const messages = getMessages(db).then((result) => {
    console.log(result[0]);
  });

  const sendMessage = async (event) => {
    event.preventDefault();
    console.log(value);
    setValue('');
  };

  return (
    <div className="chat">
      <div className="chat__dashboard">Chat</div>

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
