import React from 'react';

import {BaseInput, BaseButton} from 'components/ui';

const Chat = (props) => {

  return (
    <div className="chat">
      <div className="chat__dashboard">Chat</div>

      <form className="chat__new-message">
        <BaseInput
          className="chat__input"
          type="text"
          placeholder="Введите сообщение..."
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
